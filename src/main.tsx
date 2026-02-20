import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

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

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
