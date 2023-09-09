import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { ViewportProvider } from './context/viewportContext';
import './styles/style.scss';

const container: HTMLElement | null = document.getElementById("root");
const root = container && createRoot(container);

root?.render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </BrowserRouter>
  </React.StrictMode>
);
