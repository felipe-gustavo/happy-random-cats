import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./config/reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Analytics. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
