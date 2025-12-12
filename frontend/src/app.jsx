import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/react';

// Mock API calls
const fetchHealth = async () => {
  try {
    // Replace with actual fetch
    return { status: "healthy", checks: { storage: "ok" } };
  } catch (err) {
    Sentry.captureException(err);
    return { status: "unknown", checks: {} };
  }
};

const fetchDownloads = async () => {
  try {
    return [
      { fileId: 70000, status: "completed" },
      { fileId: 70001, status: "in_progress" },
      { fileId: 70002, status: "failed" },
    ];
  } catch (err) {
    Sentry.captureException(err);
    return [];
  }
};

const fetchErrors = async () => {
  try {
    return [
      { id: 1, message: "Download timeout for file 70002", time: "10:45 AM" },
      { id: 2, message: "S3 upload failed for file 70003", time: "11:00 AM" },
    ];
  } catch (err) {
    Sentry.captureException(err);
    return [];
  }
};

export default function App() {
  const [health, setHealth] = useState({ status: "unknown", checks: {} });
  const [downloads, setDownloads] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setHealth(await fetchHealth());
      setDownloads(await fetchDownloads());
      setErrors(await fetchErrors());
    };
    loadData();
  }, []);

  const statusColor = (status) =>
    status === "healthy" ? "text-green-600" : "text-red-600";

  const downloadColor = (status) => {
    if (status === "completed") return "bg-green-100 text-green-800";
    if (status === "in_progress") return "bg-yellow-100 text-yellow-800";
    if (status === "failed") return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Observability Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Monitor service health, downloads, and errors in real-time
        </p>
      </header>

      {/* Health Status */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Health Status</h2>
        <div className="flex items-center space-x-4 bg-white p-4 rounded shadow">
          <span
            className={`px-3 py-1 rounded-full font-semibold ${statusColor(
              health.status
            )}`}
          >
            {health.status.toUpperCase()}
          </span>
          {Object.entries(health.checks).map(([key, value]) => (
            <span key={key} className="text-gray-700">
              {key}: {value}
            </span>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Downloads</h2>
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {downloads.map((d) => (
                <tr key={d.fileId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {d.fileId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${downloadColor(
                        d.status
                      )}`}
                    >
                      {d.status.replace("_", " ").toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Error Log */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Error Log</h2>
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {errors.map((e) => (
                <tr key={e.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {e.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-700">
                    {e.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
