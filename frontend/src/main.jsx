import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

// Initialize Sentry
Sentry.init({
  dsn: 'YOUR_SENTRY_DSN_HERE', // Replace with your Sentry DSN
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust in production
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Sentry.ErrorBoundary fallback={<p>Something went wrong. Check Sentry dashboard.</p>}>
    <App />
  </Sentry.ErrorBoundary>
);
