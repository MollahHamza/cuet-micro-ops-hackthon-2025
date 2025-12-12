<img width="2816" height="1536" alt="Archi" src="https://github.com/user-attachments/assets/ea0f2dba-8d4f-4bd0-b6b2-b6395909e55e" />

## Overview

This download microservice simulates file downloads that can take anywhere from around 10 seconds to well over 120 seconds. When exposed directly to clients or placed behind a reverse proxy such as Cloudflare, long-running HTTP requests lead to connection timeouts, poor user experience, wasted server resources, and retry storms as clients reissue timed-out requests. To handle these variable download times gracefully, the system must avoid tying the entire download operation to a single HTTP request.[1][2][3]

The proposed solution uses an asynchronous **Polling Pattern**: the client sends a short request to initiate a download job, the backend quickly creates and enqueues that job, and returns a `jobId` immediately. The client then polls a dedicated status endpoint using that `jobId` until the job has finished, and finally performs a short download step using a presigned MinIO (S3-compatible) URL. This design keeps all HTTP requests short-lived, avoids Cloudflare timeouts, and gives users continuous progress updates instead of a blank screen for minutes.[4][5][6]

---

## Architecture Diagram

### Components

The system consists of the following components:

- **Frontend (React + React Query)**  
  A browser-based UI where users initiate downloads, see job status and progress, and trigger the final file download.

- **Reverse Proxy (Cloudflare)**  
  Cloudflare sits in front of the API, terminating TLS, applying request timeouts, and optionally caching and inspecting traffic.[3][7]

- **Download API (Node.js + Hono)**  
  The existing microservice that exposes HTTP endpoints for initiating download jobs, checking status, and returning download information. It also integrates with Redis for job tracking and queueing, and with MinIO for storage.[1]

- **Redis (Job Store + Queue)**  
  A Redis instance serves two purposes:
  - As a **Job Store**, holding per-job metadata keyed by `jobId`.
  - As a **Queue** (e.g., via BullMQ) where new download jobs are enqueued for background processing.[2]

- **Background Worker Service**  
  A separate worker process that subscribes to the Redis-based download queue, executes the slow download logic, interacts with MinIO, and updates job status and result information.

- **MinIO (S3-Compatible Storage)**  
  A self-hosted S3-compatible object store that holds download objects and serves them via presigned URLs using the `downloads` bucket.[5][1]

### Data Flow (Fast and Slow Downloads)

The same architecture handles both fast (~10 seconds) and slow (60–120+ seconds) downloads; only the worker’s processing time differs.

1. **Job initiation (fast, short-lived request)**
   - The React frontend sends `POST /v1/download/initiate` (through Cloudflare) with the requested `file_ids`.
   - The Download API validates the request, associates it with an authenticated `userId`, creates a job in Redis with status `queued`, enqueues a job message onto a Redis-backed queue, and returns `{ jobId, status: "queued" }` with HTTP 202 Accepted.[4][1]

2. **Background processing (slow, asynchronous)**
   - The Background Worker consumes jobs from the Redis queue.
   - For each job, it updates status to `processing`, calls the existing download logic (reusing the semantics of `/v1/download/check` and `/v1/download/start` internally) to simulate 10–120+ second delays, and interacts with MinIO for reading/writing objects.[1]
   - When processing completes successfully, the worker generates a presigned MinIO URL for the resulting object, updates the job to `completed`, sets `progress=1.0`, and stores both the S3 key and `downloadUrl` in Redis.
   - If processing fails after retries, the worker marks the job as `failed` and records an error message.[2][5]

3. **Status polling and final download (short-lived requests)**
   - The frontend uses React Query to poll `GET /v1/download/status/:jobId` every few seconds via Cloudflare to check status and progress.
   - Once status is `completed`, the frontend reads `downloadUrl` from the response and redirects the browser to this presigned MinIO URL to start the actual file download.
   - For both fast and slow downloads, all HTTP interactions remain short, so Cloudflare and any other reverse proxies do not see long-lived connections.[3][5][4]

---

## Technical Approach – Polling Pattern

### API Contract Changes and New Endpoints

The base microservice already exposes endpoints like `/v1/download/check` and `/v1/download/start` that simulate long-running behaviour. For the polling architecture, these become internal primitives invoked by the worker, and new asynchronous endpoints are added for clients.[1]

#### 1. `POST /v1/download/initiate`

**Purpose:** Start a long-running download job asynchronously.

- **Request (authenticated user):**

  ```json
  {
    "file_ids": [70000, 70001, 70002]
  }
  ```

  The backend resolves the authenticated `userId` from the session or token and validates that `file_ids` are non-empty and within the allowed range.[1]

- **Response (202 Accepted):**

  ```json
  {
    "jobId": "uuid-1234-5678",
    "status": "queued"
  }
  ```

**Behaviour:**

- Validate input and authorization.
- Create a job record in Redis Job Store with `jobId`, `userId`, `fileIds`, `status=queued`, `progress=0`, and timestamps.
- Push a job description (at minimum `jobId` and `userId`) into a Redis-based queue (e.g., BullMQ queue named `download-jobs`).
- Return quickly with HTTP 202 so Cloudflare timeouts are never approached.[2][4]

#### 2. `GET /v1/download/status/:jobId`

**Purpose:** Allow the client to poll for job status and progress.

- **Response examples:**
  - While processing:

    ```json
    {
      "jobId": "uuid-1234-5678",
      "userId": "user-42",
      "status": "processing",
      "progress": 0.4
    }
    ```

  - Completed:

    ```json
    {
      "jobId": "uuid-1234-5678",
      "userId": "user-42",
      "status": "completed",
      "progress": 1.0,
      "downloadUrl": "https://minio.example.com/presigned-url"
    }
    ```

  - Failed:

    ```json
    {
      "jobId": "uuid-1234-5678",
      "userId": "user-42",
      "status": "failed",
      "error": "File not found in storage"
    }
    ```

**Behaviour:**

- Authenticate the user and ensure the `jobId` belongs to that `userId`.
- Fetch job metadata from Redis by `jobId`.
- Return current status, progress, and (when available) `downloadUrl`.[2]

#### 3. `GET /v1/download/:jobId` (optional)

**Purpose:** Provide a download endpoint keyed by `jobId`, for clients that prefer not to follow `downloadUrl` directly.

**Behaviour options:**

- Look up the job by `jobId` and `userId`.
- If `status=completed` and `downloadUrl` exists:
  - Redirect (HTTP 302) to `downloadUrl`, which is a presigned MinIO URL.
- Alternatively, stream the file directly from MinIO using the stored S3 key (`resultLocation`).

In many cases, returning `downloadUrl` from `status` is enough, and the frontend can initiate the browser download by navigating to that URL.

#### 4. Existing endpoints

- `/v1/download/check` and `/v1/download/start` remain as core operations for checking availability and simulating delay but are used internally by the Background Worker rather than being called directly by the frontend for long-running flows.[1]

---

## Job Tracking and Background Processing

### Job Schema in Redis

Download jobs are stored in Redis as hashes or JSON documents keyed by `jobId`. A typical schema:

- `jobId`: string (UUID).
- `userId`: string (authenticated user identifier).
- `fileIds`: array of numbers (requested files).
- `status`: one of `queued | processing | completed | failed | cancelled`.
- `progress`: numeric progress (0.0–1.0) or percentage.
- `resultLocation`: S3 key in MinIO (e.g., `downloads/user-42/job-uuid.tar`).
- `downloadUrl`: presigned MinIO URL for final download.
- `attempts`: integer count of retry attempts.
- `lastError`: string describing the last error (if any).
- `createdAt`: ISO timestamp when job was created.
- `updatedAt`: ISO timestamp when job was last updated.[5][2]

This schema supports efficient status reads, user scoping (jobs per user), and detailed error reporting.

### Queue and Worker Strategy

**Queue:**

- A Redis-backed queue (e.g., BullMQ) named `download-jobs` holds job messages.
- Each message contains at least `jobId` and `userId`, and optionally `fileIds` and other metadata.

**Worker:**

- The Background Worker is a separate Node.js process that connects to the same Redis instance and subscribes to `download-jobs`.
- For each job:
  - Fetch the job record from Redis and verify that `status` is `queued`.
  - Update `status` to `processing` and set an initial `progress` (e.g., 0.1).
  - Use the internal download logic (equivalent to the `/v1/download/check` and `/v1/download/start` semantics) to simulate 10–120+ second delays and handle file availability.[1]
  - Interact with MinIO (via the S3 SDK) to either:
    - Prepare or verify the final object in the `downloads` bucket, and
    - Generate a presigned URL for the object (`downloadUrl`).[5][1]
  - Update `progress` periodically (e.g., per file, phase, or time-based granularity) so status polling returns meaningful percentages.
  - On success, set `status=completed`, `progress=1.0`, and store `resultLocation` and `downloadUrl`.
  - On error, apply retry logic (below) and eventually set `status=failed` with `lastError` if all retries are exhausted.[2]

### Error Handling and Retry Logic

- **Validation errors** (e.g., invalid `file_ids`, unauthorized user) are handled at `/v1/download/initiate` and return 4xx responses without creating or enqueueing a job.
- **Transient errors** (such as network glitches, temporary MinIO unavailability, or intermittent internal failures) are handled by the worker:
  - Each job can be retried up to **3 times**.
  - Retries use an exponential backoff schedule: delay 1 second before the first retry, 5 seconds before the second, and 30 seconds before the third.[2]
  - The worker increments `attempts` on each failure.
- **Permanent errors** (e.g., non-existent file, consistently failing logic) cause the worker to:
  - Mark `status=failed`.
  - Populate `lastError` with a clear message.
  - Leave `downloadUrl` empty so the frontend knows not to attempt a download.

### Timeout Configuration

- **Worker-level timeout:**
  - Each job has a maximum processing window, for example **5 minutes**. If processing exceeds this, the worker aborts the job and marks it as `failed` with a timeout error.
- **API endpoints:**
  - `/v1/download/initiate`, `/v1/download/status/:jobId`, and `/v1/download/:jobId` are designed to complete quickly (single DB/Redis lookup and minimal logic), so they operate well within typical HTTP timeouts.
- **Client-side polling interval:**
  - The frontend polls status every **3–5 seconds**, balancing responsiveness with avoiding excessive load or rate limits.[2]

---

## Proxy Configuration (Cloudflare)

### Cloudflare Timeouts

Cloudflare enforces upper limits on request duration, and long-running synchronous HTTP requests can result in 524 or related 5xx timeout errors. With the polling architecture:[7][3]

- All client-visible endpoints (`/v1/download/initiate`, `/v1/download/status/:jobId`, `/v1/download/:jobId`) return quickly and do not hold the Cloudflare connection open for the full 10–120+ seconds of processing.
- Long-running work is performed in the background worker, decoupled from the client connection.
- Therefore, Cloudflare’s request duration limits are no longer a problem, and no special timeout tuning is required.

### Example Cloudflare Considerations

- Ensure that the API endpoints behind Cloudflare are configured for normal HTTP traffic; WebSockets/SSE are not required for the polling pattern.
- Optionally enable caching for static assets (frontend) but not for dynamic endpoints like `/v1/download/status/:jobId`, which should always reflect current job state.
- Maintain standard security and rate-limiting rules to prevent abusive polling.

---

## Frontend Integration (React + React Query)

A React frontend with React Query provides a clean way to implement the polling behaviour and user feedback.

### Initiating Downloads

1. The user selects one or more files in the UI and clicks a “Start Download” button.
2. The frontend sends an authenticated `POST /v1/download/initiate` request with the chosen `file_ids`.
3. On success, the API returns a `jobId` and initial `status="queued"`. The frontend stores `jobId` (and perhaps `userId`) in component state or React Query cache.[8][2]

### Showing Progress

Using React Query, the frontend sets up a query keyed by `["download-status", jobId]` that calls `GET /v1/download/status/:jobId` on an interval:

- Poll every 3–5 seconds while `status` is `queued` or `processing`.
- Update UI components with `status` and `progress`, e.g.:
  - Show badges like “Queued”, “In progress (40%)”, “Completed”, “Failed”.
  - Display a progress bar driven by the `progress` field.
- Stop polling automatically when `status` becomes `completed` or `failed`.

### Handling Completion

When the status query returns `status="completed"` and includes a `downloadUrl`:

- The frontend triggers the browser download by:
  - Setting `window.location.href = downloadUrl`, or
  - Using an `<a>` tag with `href={downloadUrl}` and `download` attribute.
- Because `downloadUrl` is a presigned MinIO URL, the browser downloads the file directly from MinIO, offloading large file transfer from the API server.

If you also implement `GET /v1/download/:jobId`, the frontend may call that endpoint instead to let the API handle redirects or streaming.

### Handling Failures and Retry

If the status query returns `status="failed"`:

- The UI displays the `error` message returned by the API.
- A “Retry” button is shown; clicking it issues a fresh `POST /v1/download/initiate` with the same `file_ids`, which creates a new job and new `jobId`, and the polling flow restarts.

### Edge Cases

- **User closes browser mid-download:**
  - Jobs continue running in the background worker because they are tracked in Redis and processed independently of the client session.
  - On return, the user can view their recent jobs (e.g. an optional `GET /v1/download/jobs?userId=...` endpoint) or resume polling using a stored `jobId`.

- **Multiple concurrent downloads per user:**
  - The frontend maintains a list of jobs (e.g., using React Query for each `jobId`), showing separate progress indicators and completion statuses.
  - Each job uses its own polling query; rate limits and Redis throughput determine concurrency limits.

---

## Summary

By using a Redis-backed polling architecture with background workers and presigned MinIO URLs, this design decouples long-running download processing from client HTTP connections, avoids Cloudflare timeouts, and provides authenticated users with clear progress and retry capabilities. All heavy work runs asynchronously in the worker layer, while the React + React Query frontend interacts with the API through short, predictable requests for initiation, status, and final download.
