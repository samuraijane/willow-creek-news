import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import './styles/style.scss';

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
