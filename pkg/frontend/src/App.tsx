import React from "react";
import { Routes, Route } from "react-router-dom";
import { DocsList } from "./wiki/DocsList";
import { DocPage } from "./wiki/DocPage";
import { NotFoundPage } from "./NotFoundPage";

const Home: React.FC = () => (
  <div style={{ padding: "2rem" }}>
    <h1>Welcome to the Documentation</h1>
    <p>Select a document from the sidebar to get started.</p>
  </div>
);

export const App: React.FC = () => (
  <div style={{ display: "flex", minHeight: "100vh" }}>
    <DocsList />
    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:slug" element={<DocPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);
