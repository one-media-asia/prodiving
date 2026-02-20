import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";

console.log("Main.tsx loaded");

const container = document.getElementById("root");
if (container) {
  try {
    const root = createRoot(container);
    const element = React.createElement("div", {
      className: "min-h-screen bg-red-500 text-white flex items-center justify-center"
    }, React.createElement("h1", { className: "text-4xl font-bold" }, "App is Working!"));
    root.render(element);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering App:", error);
    container.innerHTML = "<h1 style='color: red;'>Error loading React app</h1>";
  }
} else {
  console.error("Root element not found");
}
