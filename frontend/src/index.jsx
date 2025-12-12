import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  const [health, setHealth] = useState({});
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch(`${backendUrl}/health`)
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error("Health fetch error:", err));

    fetch(`${backendUrl}/v1/download/errors`)
      .then(res => res.json())
      .then(data => setErrors(data))
      .catch(err => console.error("Error fetch error:", err));

    fetch(`${backendUrl}/v1/download/metrics`)
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error("Metrics fetch error:", err));

    const interval = setInterval(() => {
      fetch(`${backendUrl}/v1/download/status/all`)
        .then(res => res.json())
        .then(data => setJobs(data))
        .catch(err => console.error("Jobs fetch error:", err));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>Observability Dashboard</h1>

      <div className="card">
        <h2>Health Status</h2>
        <pre>{JSON.stringify(health, null, 2)}</pre>
      </div>

      <div className="card">
        <h2>Download Jobs</h2>
        <ul>
          {jobs.map(job => (
            <li key={job.id}>
              {job.id} - {job.status} - {job.progress || 0}%
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Error Log</h2>
        <ul>
          {errors.map((err, i) => (
            <li key={i}>
              {err.message} - trace_id: {err.trace_id}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Performance Metrics</h2>
        <pre>{JSON.stringify(metrics, null, 2)}</pre>
      </div>

      <div className="card">
        <h2>Trace Viewer</h2>
        <a href="http://delineate-jaeger:16686" target="_blank" rel="noreferrer">
          Open Jaeger UI
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
