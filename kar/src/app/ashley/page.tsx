import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Ashley() {
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
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "3rem",
          }}
        >
          Ashley
        </h1>

        <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
          <section style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About Me
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Hi, I'm Ashley. I'm a software engineer passionate about building
              web applications and exploring new technologies. You can find my
              work on{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                GitHub
              </a>{" "}
              and connect with me on{" "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                LinkedIn
              </a>
              .
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I currently work with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                React
              </a>
              ,{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Next.js
              </a>
              , and{" "}
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                TypeScript
              </a>
              . I love creating clean, minimal interfaces that prioritize user
              experience.
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
              Skills & Expertise
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Frontend
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 & CSS3</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Design
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>UI/UX Design</li>
                  <li>Figma</li>
                  <li>Accessibility</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Tools
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Vercel</li>
                  <li>npm/yarn</li>
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
              Recent Projects
            </h2>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>
                  <Link
                    href="/projects/kar-wiki"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    KAR Wiki
                  </Link>
                </strong>{" "}
                - Collaborative knowledge base with Next.js
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>
                  <Link
                    href="/projects/weather-dashboard"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Weather Dashboard
                  </Link>
                </strong>{" "}
                - Interactive weather app with data visualization
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>
                  <Link
                    href="/projects/portfolio-generator"
                    style={{ color: "inherit", textDecoration: "underline" }}
                  >
                    Portfolio Generator
                  </Link>
                </strong>{" "}
                - Automated portfolio website builder
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
              Interests
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              When I'm not coding, you might find me reading about{" "}
              <a
                href="https://en.wikipedia.org/wiki/Design"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                design
              </a>
              , exploring{" "}
              <a
                href="https://en.wikipedia.org/wiki/Open-source_software"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                open source
              </a>{" "}
              projects, or experimenting with new frameworks and tools. I'm
              particularly interested in design systems, accessibility, and
              creating delightful user experiences.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Team
            </h2>
            <p>
              Check out my teammates{" "}
              <Link
                href="/katherine"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Katherine
              </Link>{" "}
              and{" "}
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
