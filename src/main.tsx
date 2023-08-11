import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { consoli } from "./consoliClient";

window.consoli = consoli;
window.verbose = async () => {
  await consoli.verbose();
};

consoli.log("it a log consoli 💎💎");
consoli.warn("it a warn consoli 🔶🔶");
consoli.error("it a error consoli 🧯🧯");
consoli.success("it a success consoli 🔋🔋");
consoli.tags?.myTag("it a my tag consoli 🍇🍇");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
