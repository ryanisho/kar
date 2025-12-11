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
          Studio Ghibli App
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
              The Studio Ghibli App is a SwiftUI-based wellness application
              inspired by the calming, whimsical aesthetic of Studio Ghibli
              films. It allows users to track daily habits such as meals, water
              intake, journal entries, and mood, helping them build mindful
              routines while enjoying a comforting, themed interface.
            </p>
            <p>
              The app emphasizes clarity and simplicity, using gentle visuals,
              soft animations, and intuitive navigation to create a relaxing
              user experience. It leverages modern iOS development patterns
              to keep the interface responsive, maintainable, and easy to extend.
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
                <strong>Meal & Water Tracking:</strong> Log daily meals and hydration with lightweight, tap-based interactions
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Mood Logging:</strong> Simple mood input system to help users track emotional patterns over time
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Daily Journal:</strong> Minimalist journaling interface for reflections, notes, and personal insights
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                <strong>Ghibli-Themed UI:</strong> Soft colors, rounded components, and animated elements inspired by Studio Ghibli’s visual language
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
                  <li>Swift</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Styling
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Custom SwiftUI Components</li>
                  <li>Themed Color Palettes</li>
                  <li>SF Symbols</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                  Development
                </h3>
                <ul style={{ marginLeft: "1.5rem", opacity: 0.8 }}>
                  <li>Xcode</li>
                  <li>Git</li>
                  <li>Local Storage (UserDefaults)</li>
                  <li>MVVM Architecture</li>
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
                Visual Consistency
              </h3>
              <p>
                <strong>Challenge:</strong> Creating interfaces that feel
                authentically Ghibli-inspired without overwhelming users with too many decorative elements.
                <br />
                <strong>Solution:</strong> Designed a muted, nature-inspired
                palette and used gentle shadows and rounded shapes to evoke the Ghibli aesthetic while maintaining clarity.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                User Input Flow
              </h3>
              <p>
                <strong>Challenge:</strong> Ensuring habit tracking, journaling, and mood input all felt smooth and non-disruptive.
                <br />
                <strong>Solution:</strong> Implemented custom SwiftUI buttons and segmented controls that streamline user interaction and reduce clutter.
              </p>
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                Local Data Storage
              </h3>
              <p>
                <strong>Challenge:</strong> Choosing a storage method that balances simplicity with reliability.
                <br />
                <strong>Solution:</strong> Used lightweight persistence (UserDefaults) to store user entries, ensuring fast load times and offline usability.
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
                Expanded analytics to show weekly or monthly mood and habit trends
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Customizable themes inspired by specific Ghibli films (e.g., Totoro, Spirited Away)
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Reminders for journaling, water intake, or mood check-ins
              </li>
              <li style={{ marginBottom: "0.75rem" }}>
                Home screen widgets for quick daily logging
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
                href="/katherine"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Katherine
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
