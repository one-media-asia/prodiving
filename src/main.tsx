import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Main.tsx loaded");

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(React.createElement(App));
} else {
  console.error("Root element not found");
}
