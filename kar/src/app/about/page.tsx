"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Head from "next/head";


export default function About() {
  const activeId = useScrollSpy([
  "#what-is-kar",
  "#our-mission",
  "#tech-stack",
  "#get-involved",
]);
  return (
    <>
      <Head>
          <title>About KAR Wiki | KAR</title>
          <meta
            name="description"
            content="Learn more about KAR Wiki — a collaborative developer wiki built by Katherine, Ashley, and Ryan."
          />
        </Head>
      <Navigation />
      <div 
        className="min-h-screen bg-[#fafafa] text-[#111] font-[var(--font-geist-sans)]" 
      >
      <div
        className="grid grid-cols-1 md:grid-cols-[250px_1fr] max-w-7xl mx-auto">
          <aside className="border-r border-gray-200 p-6 hidden md:block sticky top-20 h-[calc(100vh-5rem)]"> 
            <nav className="space-y-2 text-[0.95rem]">
              <a
                href="#what-is-kar"
                className={`block transition-all duration-200 ${
                  activeId === "what-is-kar"
                    ? "font-medium underline underline-offset-4 decoration-2 decoration-black"
                    : "text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-black"
                }`}
              >
                What is KAR?
              </a>

              <a
                href="#our-mission"
                className={`block transition-all duration-200 ${
                  activeId === "our-mission"
                    ? "font-medium underline underline-offset-4 decoration-2 decoration-black"
                    : "text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-black"
                }`}
              >
                Our Mission
              </a>

              <a
                href="#tech-stack"
                className={`block transition-all duration-200 ${
                  activeId === "tech-stack"
                    ? "font-medium underline underline-offset-4 decoration-2 decoration-black"
                    : "text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-black"
                }`}
              >
                Technology Stack
              </a>

              <a
                href="#get-involved"
                className={`block transition-all duration-200 ${
                  activeId === "get-involved"
                    ? "font-medium underline underline-offset-4 decoration-2 decoration-black"
                    : "text-gray-600 hover:underline hover:underline-offset-4 hover:decoration-black"
                }`}
              >
                Get Involved
              </a>
            </nav>

          </aside>
          <div className="pt-[5rem]">
          <main className="p-8 md:p-16 pt-36 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-10">About KAR Wiki</h1>

            <section 
              id="what-is-kar"
              className="mb-12 pb-12 border-b border-gray-200"> 
              <h2 className="text-3xl font-semibold mb-4">What is KAR?</h2> 
              <p className="text-lg leading-relaxed mb-3">
                KAR is a collaborative wiki created by three software engineers:{" "}
                <Link href="/katherine" className="underline hover:text-blue-600">
                  Katherine
                </Link>
                ,{" "}
                <Link href="/ashley" className="underline hover:text-blue-600">
                  Ashley
                </Link>
                , and{" "}
                <Link href="/ryan" className="underline hover:text-blue-600">
                  Ryan
                </Link>
                . We're passionate about web development, open source, and sharing knowledge.
              </p>
            </section>

            <section 
            id="our-mission" 
            className="mb-12 pb-12 border-b border-gray-200"> 
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-3">
              Our mission is to create a comprehensive resource for developers at all levels. We believe in:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-lg"> 
              <li>📚 Knowledge sharing and open collaboration</li>
              <li>🚀 Building practical, real-world projects</li>
              <li>🌱 Continuous learning and growth</li>
              <li>✨ Clean, accessible, and user-friendly design</li>
            </ul>
          </section>
          <section 
          id="tech-stack" 
          className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-3xl font-semibold mb-4">Technology Stack</h2>
              <p className="text-lg leading-relaxed mb-3">
                This wiki is built with modern web technologies:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-lg">
                <li><strong>Next.js 15</strong> – React framework for production</li>
                <li><strong>TypeScript</strong> – Type-safe JavaScript</li>
                <li><strong>Tailwind CSS</strong> – Utility-first CSS framework</li>
                <li><strong>React</strong> – UI component library</li>
              </ul>
          </section>
          <section id="get-involved" className="mb-16">
              <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
              <p className="text-lg leading-relaxed">
                We're always looking to improve and expand this wiki. If you have
                suggestions, corrections, or would like to contribute, feel free
                to reach out to any of our team members or check out our{" "}
                <Link href="/resources" className="underline hover:text-blue-600">
                  resources page
                </Link>
                .
              </p>
            </section>
          </main>
          </div>
      </div> 
      </div>
      
    </>
  );
}
