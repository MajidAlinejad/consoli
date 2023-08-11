import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { consoli } from "./consoliClient";
window.consoli = consoli;

window.verbose = async () => {
  await consoli.verbose();
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
