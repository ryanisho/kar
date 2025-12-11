"use client";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import AboutSidebar from "@/components/AboutSidebar";



export default function About() {


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

      <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-gray-100 font-[var(--font-geist-sans)]">

      <div
        className="grid grid-cols-1 md:grid-cols-[250px_1fr] max-w-7xl mx-auto">
          <AboutSidebar />

          {/* Main Content*/}
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
