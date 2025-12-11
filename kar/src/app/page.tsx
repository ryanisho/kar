"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import WikiCard from "@/components/WikiCard";

export default function Home() {
  return (
    <>
      <Navigation />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "var(--font-geist-sans)",
          padding: "6rem 2rem 4rem",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "clamp(8rem, 20vw, 20rem)",
            fontWeight: "bold",
            marginBottom: "4rem",
          }}
        >
          <Link
            href="/katherine"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            K
          </Link>
          <Link
            href="/ashley"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            A
          </Link>
          <Link
            href="/ryan"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            R
          </Link>
        </div>

        {/* Welcome Text */}
        <div
          style={{
            maxWidth: "800px",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Welcome to KAR Wiki
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.6",
              opacity: 0.8,
            }}
          >
            A collaborative knowledge base by Katherine, Ashley, and Ryan.
            Explore our projects, read our blog posts, and discover resources
            for web development.
          </p>
        </div>

        {/* Two-column section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
            gap: "2.5rem",
            width: "100%",
            maxWidth: "1200px",
            margin: "4rem auto",
          }}
        >
          {/* LEFT: Start Exploring */}
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Start Exploring
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "1.5rem",
              }}
            >
              Jump into the parts of the wiki you&apos;ll use the most.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <WikiCard
                title="About Us"
                description="Learn more about the KAR Wiki team, our mission, and the technology stack we use."
                link="/about"
              />
              <WikiCard
                title="Projects"
                description="Browse our collection of web development projects and open source contributions."
                link="/projects"
              />
              <WikiCard
                title="Blog"
                description="Read articles and tutorials on React, Next.js, TypeScript, and modern web development."
                link="/blog"
              />
              <WikiCard
                title="Resources"
                description="Curated list of tools, libraries, and learning resources for developers."
                link="/resources"
              />
            </div>
          </div>

          {/* RIGHT: What Lives Here */}
          <aside>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              What Lives Here
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#555",
                marginBottom: "1rem",
              }}
            >
              KAR Wiki is our shared brain for web development. We use it to:
            </p>

            <ul
              style={{
                listStyle: "disc",
                paddingLeft: "1.2rem",
                fontSize: "0.93rem",
                color: "#555",
                marginBottom: "1.75rem",
              }}
            >
              <li>Document patterns that actually worked in past projects.</li>
              <li>Store reusable snippets, configs, and command cheatsheets.</li>
              <li>Draft blog posts and notes before they go public.</li>
            </ul>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#777",
                marginBottom: "1rem",
              }}
            >
              Meet the humans behind the initials:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                {
                  href: "/katherine",
                  name: "Katherine",
                  role: "Full-stack · React, Node, DevOps",
                },
                {
                  href: "/ashley",
                  name: "Ashley",
                  role: "Frontend · UI/UX, accessibility",
                },
                {
                  href: "/ryan",
                  name: "Ryan",
                  role: "Backend · web tooling, infra",
                },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.8rem 1rem",
                    borderRadius: "0.9rem",
                    border: "1px solid #e0e0e0",
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "#fafafa",
                    transition: "border 0.15s ease, background 0.15s ease",
                  }}
                >
                  <div
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      borderRadius: "999px",
                      border: "1px solid #000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                    }}
                  >
                    {p.name[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                      }}
                    >
                      {p.role}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        {/* Bottom utility row */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "4rem",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {[
              {
                label: "Inspiration Board",
                text: "A curated gallery of ideas, references, and creative sparks.",
                href: "/inspiration",
              },
              {
                label: "Journal",
                text: "Lightweight updates, thoughts, and personal notes.",
                href: "/journal",
              },
              {
                label: "Team Values",
                text: "The principles that guide how we build and learn together.",
                href: "/values",
              },
              {
                label: "Favorites",
                text: "Our favorite tools, books, shows, cafes, apps, and more.",
                href: "/favorites",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  borderRadius: "0.9rem",
                  border: "1px solid #ddd",
                  padding: "0.9rem 1rem",
                  textDecoration: "none",
                  color: "inherit",
                  backgroundColor: "#fff",
                  transition: "border 0.15s ease, transform 0.15s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#666",
                  }}
                >
                  {item.text}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
