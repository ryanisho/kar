import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function KARWikiProject() {
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
          KAR Wiki
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
            Next.js
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            TypeScript
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
            Tailwind CSS
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
              KAR Wiki is a collaborative knowledge base built with Next.js 15
              and TypeScript. The project serves as a central hub for sharing
              information, projects, blog posts, and resources among team
              members Katherine, Ashley, and Ryan.
            </p>
            <p>
              The wiki features a clean, minimal design with a focus on
              readability and user experience. It leverages modern web
              technologies and best practices to create a fast, accessible, and
              maintainable application.
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
                <strong>Dynamic Routing:</strong> Leverages Next.js App Router
                for seamless navigation
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Server-Side Rendering:</strong> Optimized performance
                with SSR
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Responsive Design:</strong> Mobile-friendly layout that
                works on all devices
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Dark Mode Support:</strong> Automatic theme switching
                based on system preferences
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>TypeScript:</strong> Type-safe code for better developer
                experience
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Component-Based Architecture:</strong> Reusable
                components for consistency
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
                  <li>Next.js 15</li>
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
                  <li>Geist Font</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Development
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>ESLint</li>
                  <li>Git</li>
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
                Navigation Structure
              </h3>
              <p>
                <strong>Challenge:</strong> Creating an intuitive navigation
                system for multiple pages and team members.
                <br />
                <strong>Solution:</strong> Implemented a fixed navigation bar
                component with clear links to main sections, plus
                cross-referencing between team member pages.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Code Reusability
              </h3>
              <p>
                <strong>Challenge:</strong> Avoiding repetition across similar
                pages.
                <br />
                <strong>Solution:</strong> Created reusable components like
                Navigation and WikiCard to maintain consistency and reduce code
                duplication.
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
                Search functionality for quick content discovery
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Markdown support for blog posts and documentation
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Comments system for blog posts
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Analytics to track popular content
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                RSS feed for blog updates
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Internationalization (i18n) support
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
              This project is a collaborative effort by{" "}
              <Link
                href="/katherine"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Katherine
              </Link>
              ,{" "}
              <Link
                href="/ashley"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ashley
              </Link>
              , and{" "}
              <Link
                href="/ryan"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Ryan
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
