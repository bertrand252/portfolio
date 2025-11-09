import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Suppress development warnings and errors
if (import.meta.env.DEV) {
  // Suppress console warnings
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;

  console.warn = (...args) => {
    const message = String(args[0] || "");
    if (
      message.includes("React Router Future Flag Warning") ||
      message.includes("relative route resolution") ||
      message.includes("deprecated parameters for the initialization function")
    ) {
      return;
    }
    originalConsoleWarn(...args);
  };

  console.error = (...args) => {
    const message = String(args[0] || "");
    if (
      message.includes("Uncaught Error: Invalid argument not valid semver") ||
      message.includes("react_devtools_backend") ||
      message.includes("validateAndParse") ||
      message.includes("esm_compareVersions")
    ) {
      return;
    }
    originalConsoleError(...args);
  };

  // Suppress uncaught errors from React DevTools
  window.addEventListener("error", (event) => {
    if (
      event.message?.includes("Invalid argument not valid semver") ||
      event.filename?.includes("react_devtools_backend") ||
      event.error?.stack?.includes("react_devtools_backend")
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  });

  // Suppress unhandled promise rejections from React DevTools
  window.addEventListener("unhandledrejection", (event) => {
    const reason = String(event.reason || "");
    if (
      reason.includes("Invalid argument not valid semver") ||
      reason.includes("react_devtools_backend")
    ) {
      event.preventDefault();
      return false;
    }
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
