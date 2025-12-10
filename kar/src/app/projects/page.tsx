import Navigation from "@/components/Navigation";
import WikiCard from "@/components/WikiCard";

export default function Projects() {
  const projects = [
    {
      title: "KAR Wiki",
      description:
        "A collaborative knowledge base built with Next.js and TypeScript. Features include dynamic routing, server-side rendering, and a clean minimal design.",
      link: "/projects/kar-wiki",
    },
    {
      title: "Task Manager Pro",
      description:
        "A full-stack task management application with real-time updates, user authentication, and team collaboration features.",
      link: "/projects/task-manager",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather application using third-party APIs, featuring location-based forecasts and data visualization.",
      link: "/projects/weather-dashboard",
    },
    {
      title: "Code Snippet Library",
      description:
        "A searchable library of code snippets across multiple programming languages with syntax highlighting and copy-to-clipboard functionality.",
      link: "/projects/snippet-library",
    },
    {
      title: "Portfolio Generator",
      description:
        "An automated portfolio website generator that converts markdown files into beautiful, responsive websites.",
      link: "/projects/portfolio-generator",
    },
    {
      title: "Open Source Contributions",
      description:
        "Our various contributions to open source projects including bug fixes, feature additions, and documentation improvements.",
      link: "/projects/open-source",
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
          Projects
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            opacity: 0.8,
            marginBottom: "4rem",
            lineHeight: "1.6",
          }}
        >
          A collection of projects we've built together and individually. Each
          project represents our commitment to learning, building, and sharing
          knowledge.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <WikiCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
