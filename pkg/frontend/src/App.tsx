import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

const Home: React.FC = () => (
  <div>
    <h1>Docs Home</h1>
    <p>Welcome to the wf4 demo docs site.</p>
    <p>
      Broken link example:{" "}
      <a href="/docs/gettting-started">Getting started (typo)</a>
    </p>
    <p>
      Working link:{" "}
      <Link to="/docs/getting-started">Getting started (correct)</Link>
    </p>
  </div>
);

const GettingStarted: React.FC = () => (
  <div>
    <h1>Getting started</h1>
    <p>Here is the real getting started page.</p>
  </div>
);

export const App: React.FC = () => {
  return (
    <>
      <nav
        style={{
          padding: "1rem",
          borderBottom: "1px solid #ddd",
          marginBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/docs/getting-started">Getting started</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/getting-started" element={<GettingStarted />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
