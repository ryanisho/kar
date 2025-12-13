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
import { useEffect, useState } from "react";

const DocsContent = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      direction:
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right";
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const generateParticle = () => {
      const directions: Array<
        | "top"
        | "bottom"
        | "left"
        | "right"
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right"
      > = [
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ];
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
      const randomDelay = Math.random() * 2000; // 0-2 seconds delay

      const newParticle = {
        id: Date.now() + Math.random(),
        direction: randomDirection,
        delay: randomDelay,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after animation completes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 2000 + randomDelay);
    };

    // Generate particles at random intervals
    const interval = setInterval(() => {
      generateParticle();
    }, 500); // New particle every 500ms

    return () => clearInterval(interval);
  }, []);

  const getParticlePosition = (direction: string) => {
    switch (direction) {
      case "top":
        return { top: "0px", left: "50%" };
      case "bottom":
        return { bottom: "0px", left: "50%" };
      case "left":
        return { left: "16px", top: "50%" };
      case "right":
        return { right: "16px", top: "50%" };
      case "top-left":
        return { top: "40px", left: "40px" };
      case "top-right":
        return { top: "40px", right: "40px" };
      case "bottom-left":
        return { bottom: "40px", left: "40px" };
      case "bottom-right":
        return { bottom: "40px", right: "40px" };
      default:
        return { top: "16px", left: "50%" };
    }
  };

  const getParticleAnimation = (direction: string) => {
    switch (direction) {
      case "top":
        return "animate-path-particle";
      case "bottom":
        return "animate-path-particle-reverse";
      case "left":
        return "animate-path-particle-left";
      case "right":
        return "animate-path-particle-right";
      case "top-left":
        return "animate-path-particle-top-left";
      case "top-right":
        return "animate-path-particle-top-right";
      case "bottom-left":
        return "animate-path-particle-bottom-left";
      case "bottom-right":
        return "animate-path-particle-bottom-right";
      default:
        return "animate-path-particle";
    }
  };

  const getParticleColor = () => {
    const colors = ["bg-gray-400", "bg-gray-500", "bg-gray-600"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <main className="ml-64 pt-14">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-foreground mb-12">
          wf4: Intelligent Search
        </h1>

        {/* Quickstart Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              CS 4701 AI Practicum
            </h2>
            <p className="text-muted-foreground mb-6">
              Cornell University: Fall 2025
            </p>
            <p className="text-muted-foreground mb-6">
              AI-powered search for technical documentation. Natural language
              queries, contextual results.
            </p>
            <Button asChild>
              <a href="/docs/wf4-overview-architecture">About</a>
            </Button>
          </div>

          {/* Flowing Animation */}
          <div className="relative flex items-center justify-center h-64">
            {/* Background glow */}
            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 opacity-30 blur-3xl animate-pulse" />

            {/* Outer spinning ring - pathfinding network */}
            <div className="w-48 h-48 rounded-full border-[3px] border-dashed border-gray-300 animate-spin opacity-40" />

            {/* Middle spinning ring (opposite direction) */}
            <div className="absolute w-36 h-36 rounded-full border-[3px] border-dashed border-gray-400 animate-spin-slow opacity-50" />

            {/* Inner static ring */}
            <div className="absolute w-24 h-24 rounded-full border-[2px] border-gray-300 opacity-60" />

            {/* Center logo - wf4 text */}
            <div className="absolute flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-br from-gray-700 via-gray-800 to-black bg-clip-text text-transparent">
                wf4
              </span>
            </div>

            {/* Pathfinding nodes - cardinal directions */}
            <div className="absolute w-3 h-3 rounded-full bg-gray-600 top-0 left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg shadow-gray-600/50" />
            <div className="absolute w-3 h-3 rounded-full bg-gray-700 bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse delay-500 shadow-lg shadow-gray-700/50" />
            <div className="absolute w-3 h-3 rounded-full bg-gray-500 left-4 top-1/2 transform -translate-y-1/2 animate-pulse delay-250 shadow-lg shadow-gray-500/50" />
            <div className="absolute w-3 h-3 rounded-full bg-gray-600 right-4 top-1/2 transform -translate-y-1/2 animate-pulse delay-750 shadow-lg shadow-gray-600/50" />

            {/* Corner nodes */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-400 top-10 left-10 animate-pulse delay-150 shadow-md shadow-gray-400/50" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-500 top-10 right-10 animate-pulse delay-650 shadow-md shadow-gray-500/50" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-400 bottom-10 left-10 animate-pulse delay-400 shadow-md shadow-gray-400/50" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-gray-500 bottom-10 right-10 animate-pulse delay-900 shadow-md shadow-gray-500/50" />

            {/* Connecting lines - pathfinding paths */}
            <svg
              className="absolute w-full h-full"
              style={{ pointerEvents: "none" }}
            >
              <line
                x1="50%"
                y1="16px"
                x2="50%"
                y2="50%"
                stroke="url(#gradient1)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.3"
                className="animate-pulse"
              />
              <line
                x1="50%"
                y1="calc(100% - 16px)"
                x2="50%"
                y2="50%"
                stroke="url(#gradient2)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.3"
                className="animate-pulse delay-500"
              />
              <line
                x1="16px"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient3)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.3"
                className="animate-pulse delay-250"
              />
              <line
                x1="calc(100% - 16px)"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient4)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.3"
                className="animate-pulse delay-750"
              />

              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#4b5563" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="gradient4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#4b5563" />
                </linearGradient>
              </defs>
            </svg>

            {/* Moving data particles - random and sporadic */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className={`absolute w-1.5 h-1.5 rounded-full ${getParticleColor()} ${getParticleAnimation(
                  particle.direction
                )}`}
                style={{
                  ...getParticlePosition(particle.direction),
                  animationDelay: `${particle.delay}ms`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Models Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              Meet The Team
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <ModelCard
              name="Katherine"
              description="Fullstack Developer"
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
