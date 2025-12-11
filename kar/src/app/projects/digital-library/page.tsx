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
          Digital Library
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
            SwiftUI
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            Swift
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            OpenAI API
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #333",
              borderRadius: "0",
              fontSize: "0.875rem",
            }}
          >
            Google Books API

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
              The Digital Library is a full-stack iOS application built with
              SwiftUI that enables users to track their reading progress,
              manage personal book collections, and discover new titles.
              The app integrates with OpenAI’s GPT-4 API to generate
              personalized book recommendations and uses the Google Books
              API to fetch detailed metadata, including summaries, genres,
              and cover art.
            </p>
            <p>
              Designed with the MVVM architecture, the Digital Library
              emphasizes clean state management, reusable components, and a
              responsive, modern reading dashboard. The result is a smooth,
              intuitive experience for users who want an organized, intelligent
              way to explore and track their books.
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
                <strong>Personalized Recommendations:</strong> Uses GPT-4 to
                provide tailored reading suggestions based on user preferences and history
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Book Metadata Integration:</strong> Retrieves book
                summaries, authors, categories, and cover art from Google Books API
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Favorites & Collections:</strong> Organize books into custom lists for easy access
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>MVVM Architecture:</strong> Ensures predictable data flow, maintainability, and modularity
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
                  <li>SwiftUI</li>
                  <li>Combine</li>
                  <li>MVVM Architecture</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  APIs & Services
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>OpenAI GPT-4 API</li>
                  <li>Google Books API</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Development
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Xcode</li>
                  <li>Git</li>
                  <li>RESTful API Integration</li>
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
                Recommendation Quality
              </h3>
              <p>
                <strong>Challenge:</strong> Generating recommendations that
                feel relevant and personalized for each user.
                <br />
                <strong>Solution:</strong> Integrated GPT-4 with structured
                prompts that include user reading history, genres, and
                preferences, resulting in consistently tailored suggestions.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Managing Large Book Data
              </h3>
              <p>
                <strong>Challenge:</strong> Displaying and storing rich
                metadata from Google Books without overwhelming the UI or
                slowing performance.
                <br />
                <strong>Solution:</strong> Implemented lightweight models,
                on-demand API fetching, and cached results to keep the
                interface responsive.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                State Management Across Views
              </h3>
              <p>
                <strong>Challenge:</strong> Ensuring book data, search results,
                and reading progress remain synchronized across multiple screens.
                <br />
                <strong>Solution:</strong> Adopted MVVM with Combine bindings
                to maintain predictable, reactive data flow throughout the app.
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
                User accounts with cloud sync across devices
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Social reading lists to share recommendations with friends
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Machine-generated summaries using GPT-4 for quick previews
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Advanced analytics for reading habits and genre preferences
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
