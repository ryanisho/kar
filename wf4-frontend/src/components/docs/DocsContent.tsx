import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";
import ModelCard from "./ModelCard";
import FeatureCard from "./FeatureCard";
import { MessageCircle, Eye, Image, Headphones, Bot, Lightbulb } from "lucide-react";

const codeLines = [
  { number: 1, content: <><span className="text-syntax-keyword">import</span> OpenAI <span className="text-syntax-keyword">from</span> <span className="text-syntax-string">"openai"</span>;</> },
  { number: 2, content: <><span className="text-syntax-keyword">const</span> client = <span className="text-syntax-keyword">new</span> <span className="text-syntax-function">OpenAI</span>();</> },
  { number: 3, content: "" },
  { number: 4, content: <><span className="text-syntax-keyword">const</span> response = <span className="text-syntax-keyword">await</span> client.responses.<span className="text-syntax-function">create</span>({"{"}</> },
  { number: 5, content: <>  model: <span className="text-syntax-string">"gpt-5.2"</span>,</> },
  { number: 6, content: <>  input: <span className="text-syntax-string">"Write a short bedtime story about a unicorn."</span>,</> },
  { number: 7, content: "});" },
  { number: 8, content: "" },
  { number: 9, content: <>console.<span className="text-syntax-function">log</span>(response.output_text);</> },
];

const DocsContent = () => {
  return (
    <main className="ml-64 pt-14">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-foreground mb-12">
          OpenAI Platform
        </h1>

        {/* Quickstart Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Developer quickstart
            </h2>
            <p className="text-muted-foreground mb-6">
              Make your first API request in minutes. Learn the basics of the OpenAI platform.
            </p>
            <Button>
              Get started
            </Button>
          </div>
          <CodeBlock lines={codeLines} />
        </div>

        {/* Models Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Models</h2>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <ModelCard
              name="GPT-5.2"
              description="The best model for coding and agentic tasks across industries"
              badge="New"
              gradient="from-emerald-50 to-teal-100"
            />
            <ModelCard
              name="GPT-5 mini"
              description="A faster, cost-efficient version of GPT-5 for well-defined tasks"
              gradient="from-blue-50 to-indigo-100"
            />
            <ModelCard
              name="GPT-5 nano"
              description="Fastest, most cost-efficient version of GPT-5"
              gradient="from-amber-50 to-orange-100"
            />
          </div>
        </section>

        {/* Start Building Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Start building
          </h2>
          <div className="grid md:grid-cols-2 gap-2">
            <FeatureCard
              icon={MessageCircle}
              title="Read and generate text"
              description="Use the API to prompt a model and generate text"
            />
            <FeatureCard
              icon={Eye}
              title="Use a model's vision capabilities"
              description="Allow models to see and analyze images in your application"
            />
            <FeatureCard
              icon={Image}
              title="Generate images as output"
              description="Create images with GPT Image 1"
            />
            <FeatureCard
              icon={Headphones}
              title="Build apps with audio"
              description="Analyze, transcribe, and generate audio with API endpoints"
            />
            <FeatureCard
              icon={Bot}
              title="Build agentic applications"
              description="Use the API to build agents that use tools and computers"
            />
            <FeatureCard
              icon={Lightbulb}
              title="Achieve complex tasks with reasoning"
              description="Use reasoning models to carry out complex tasks"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default DocsContent;
