import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function CrochetProjectTracker() {
  return (
    <>
      <Navigation />
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        <Link
          href="/projects"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "inherit",
            textDecoration: "underline",
            opacity: 0.8,
          }}
        >
          ← Back to Projects
        </Link>

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Crochet Project Tracker
        </h1>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            Node.js
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            React
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            JavaScript
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            Express.js
          </span>
        </div>

        <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Overview
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              The Crochet Project Tracker is a full-stack web application built
              with React, JavaScript, Node.js, and Express.js. It provides a
              clean and intuitive interface for users to organize their crochet
              projects, track progress, store pattern details, and document
              their creative workflow.
            </p>
            <p>
              Designed with simplicity and usability in mind, the tracker
              streamlines the process of managing multiple long-term projects.
              It leverages modern web technologies to deliver a fast,
              responsive, and maintainable experience for makers who want to
              stay organized and inspired.
            </p>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Key Features
            </h2>
            <ul style={{ marginLeft: "2rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Project Management:</strong> Create, edit, and archive
                crochet projects with detailed metadata
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>REST API Integration:</strong> Backend built with
                Node.js and Express.js for secure, scalable communication with
                the database
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Reusable Components:</strong> Component-based
                architecture keeps the UI consistent and easy to extend
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Search & Filtering:</strong> Quickly locate projects by
                status, tags, or keyword for efficient navigation
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Technical Stack
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Frontend
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Vite</li>
                  <li>React 19</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Styling
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Tailwind CSS</li>
                  <li>CSS Modules</li>
                  <li>Responsive Layout Techniques</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Development
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>npm</li>
                </ul>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Challenges & Solutions
            </h2>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Project Organization Structure
              </h3>
              <p>
                <strong>Challenge:</strong> Designing a project layout that
                allows users to track multiple works-in-progress, each with its
                own pattern, materials, and progress notes.
                <br />
                <strong>Solution:</strong> Structured the data model around
                distinct project entities, enabling users to store yarn details,
                hook sizes, pattern text, and images within a clean, organized
                interface.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                User Input & Pattern Storage
              </h3>
              <p>
                <strong>Challenge:</strong> Allowing users to upload patterns or
                paste long-form instructions while keeping the interface
                readable and clutter-free.
                <br />
                <strong>Solution:</strong> Implemented expandable text sections
                and a dedicated pattern editor area with clean typography,
                making long instructions easy to read and update.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Future Enhancements
            </h2>
            <ul style={{ marginLeft: "2rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>
                Project tagging system for better organization and filtering
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Calendar view for tracking deadlines, progress milestones, and
                start/finish dates
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Color palette picker to store yarn colors and visualize project themes
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Push notifications or reminders for long-term or paused projects
              </li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Team Members
            </h2>
            <p>
              This project is an independent project by{" "}
              <Link
                href="/ashley"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ashley
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
