import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";

console.log("Main.js loaded");

const container = document.getElementById("root");
if (container) {
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering App:", error);
    container.innerHTML = "<h1 style='color: red;'>Error loading React app</h1>";
  }
} else {
  console.error("Root element not found");
}
