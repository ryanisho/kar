"use client";

import Navigation from "@/components/Navigation";

export default function Resources() {
  const resourceCategories = [
    {
      category: "Learning Platforms",
      resources: [
        {
          name: "freeCodeCamp",
          url: "https://www.freecodecamp.org",
          description: "Free coding curriculum",
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Web development documentation",
        },
        {
          name: "Frontend Mentor",
          url: "https://www.frontendmentor.io",
          description: "Real-world frontend challenges",
        },
        {
          name: "Exercism",
          url: "https://exercism.org",
          description: "Code practice and mentorship",
        },
      ],
    },
    {
      category: "Tools & Libraries",
      resources: [
        {
          name: "React",
          url: "https://react.dev",
          description: "JavaScript library for UI",
        },
        {
          name: "Next.js",
          url: "https://nextjs.org",
          description: "React framework",
        },
        {
          name: "TypeScript",
          url: "https://www.typescriptlang.org",
          description: "Typed JavaScript",
        },
        {
          name: "Tailwind CSS",
          url: "https://tailwindcss.com",
          description: "Utility-first CSS",
        },
        {
          name: "Vercel",
          url: "https://vercel.com",
          description: "Deployment platform",
        },
      ],
    },
    {
      category: "Design Resources",
      resources: [
        {
          name: "Figma",
          url: "https://www.figma.com",
          description: "Collaborative design tool",
        },
        {
          name: "Dribbble",
          url: "https://dribbble.com",
          description: "Design inspiration",
        },
        {
          name: "Font Awesome",
          url: "https://fontawesome.com",
          description: "Icon library",
        },
        {
          name: "Coolors",
          url: "https://coolors.co",
          description: "Color palette generator",
        },
      ],
    },
    {
      category: "Community & News",
      resources: [
        {
          name: "Dev.to",
          url: "https://dev.to",
          description: "Developer community",
        },
        {
          name: "Hacker News",
          url: "https://news.ycombinator.com",
          description: "Tech news",
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com",
          description: "Q&A for developers",
        },
        {
          name: "GitHub",
          url: "https://github.com",
          description: "Code hosting platform",
        },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Resources
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.8,
            marginBottom: "4rem",
            lineHeight: "1.6",
          }}
        >
          Curated list of tools, libraries, and learning resources that we use
          and recommend for web development.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {resourceCategories.map((category) => (
            <section key={category.category}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                }}
              >
                {category.category}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {category.resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "1.5rem",
                      border: "1px solid #333",
                      borderRadius: "0",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.2s",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#666";
                      e.currentTarget.style.backgroundColor =
                        "rgba(255, 255, 255, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#333";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {resource.name}
                    </h3>
                    <p style={{ opacity: 0.8, fontSize: "0.95rem" }}>
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
