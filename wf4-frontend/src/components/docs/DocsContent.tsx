import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
import ModelCard from "./ModelCard";
import FeatureCard from "./FeatureCard";
import {
  CircuitBoard,
  Eye,
  Cat,
  Bot,
  Lightbulb,
  BookA,
  BookOpenText,
  Shirt,
} from "lucide-react";

const DocsContent = () => {
  return (
    <main className="ml-64 pt-14">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-foreground mb-12">
          KAR Wiki Platform
        </h1>

        {/* Quickstart Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Cornell University CS 4701 AI Practicum
            </h2>
            <p className="text-muted-foreground mb-6">
              Welcome to our AI Practicum project!
            </p>
            <Button asChild>
              <a href="/docs/wf4-overview-architecture">About</a>
            </Button>
          </div>
        </div>

        {/* Models Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Meet The Team
            </h2>
            {/* <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all
            </a> */}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <ModelCard
              name="Katherine"
              description="Fullstack Developer"
              //badge="New"
              gradient="from-emerald-50 to-teal-100"
            />
            <ModelCard
              name="Ashley"
              description="Frontend Developer"
              gradient="from-blue-50 to-indigo-100"
            />
            <ModelCard
              name="Ryan"
              description="Backend and Infrastructure Developer"
              gradient="from-amber-50 to-orange-100"
            />
          </div>
        </section>

        {/* Projects Overview */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Projects Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            <FeatureCard
              icon={Cat}
              title="Studio Ghibli App"
              description="Studio Ghibli–inspired SwiftUI app for mindful habit and mood tracking"
            />
            <FeatureCard
              icon={Eye}
              title="Image Stenography Tool"
              description="Python multifunction image steganography tool to hide and reveal messages"
            />
            <FeatureCard
              icon={Shirt}
              title="Crochet Project Tracker"
              description="React and Node.js web application for managing crochet projects, tracking progress, and documenting creative workflows"
            />
            <FeatureCard
              icon={BookOpenText}
              title="Digital Library"
              description="SwiftUI app for tracking reading and getting AI-powered book recommendations"
            />
            <FeatureCard
              icon={Bot}
              title="DRUIDS Chatbot"
              description="TypeScript-based AI chatbot using an MCP server and RAG with vector search to streamline access to internal design documentation for Datadog frontend teams"
            />
            <FeatureCard
              icon={CircuitBoard}
              title="GoDM"
              description="Golang and TypeScript distributed monitoring system with agent-based data collection and flexible metric aggregation"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DocsContent;
