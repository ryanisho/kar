import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LinkResolverProvider } from "./LinkResolverContext";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <LinkResolverProvider apiBaseUrl="http://localhost:3001">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LinkResolverProvider>
  </React.StrictMode>
);
