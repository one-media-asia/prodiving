import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
// import "./index.css";

console.log("Main.tsx loaded");

const container = document.getElementById("root");
if (container) {
  try {
    ReactDOM.render(<App />, container);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering App:", error);
    container.innerHTML = "<h1 style='color: red;'>Error loading React app</h1>";
  }
} else {
  console.error("Root element not found");
}
