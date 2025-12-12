import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Copy } from "lucide-react";
import CodeBlock from "@/components/docs/CodeBlock";

const DeveloperMode = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-64 pt-14">
        <div className="max-w-3xl mx-auto px-8 py-12">
          {/* Page Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold text-foreground mb-2">
                ChatGPT Developer mode
              </h1>
              <p className="text-muted-foreground">
                Full MCP client access for connectors and tools.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Copy className="w-4 h-4" />
              Copy page
            </button>
          </div>

          {/* What is ChatGPT developer mode */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              What is ChatGPT developer mode
            </h2>
            <p className="text-foreground leading-relaxed">
              ChatGPT developer mode is a beta feature that provides full Model Context Protocol (MCP) client support for all tools, both read and write. It's powerful but dangerous, and is intended for developers who understand how to safely configure and test connectors. When using developer mode, watch for{" "}
              <a href="#" className="text-primary hover:underline">
                prompt injections and other risks
              </a>
              , model mistakes on write actions that could destroy data, and malicious MCPs that attempt to steal information.
            </p>
          </section>

          {/* How to use */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              How to use
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Eligibility:</span>{" "}
                  <span className="text-foreground">
                    Available in beta to Pro, Plus, Business, Enterprise and Education accounts on the web.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Enable developer mode:</span>{" "}
                  <span className="text-foreground">
                    Go to{" "}
                    <a href="#" className="text-primary hover:underline font-medium">
                      Settings → Connectors
                    </a>{" "}
                    → Advanced → Developer mode.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Import MCPs:</span>
                  <ul className="mt-2 space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Open{" "}
                        <a href="#" className="text-primary hover:underline">
                          ChatGPT settings
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        In the <span className="font-semibold">Connectors</span> tab, add your remote MCP server. It will appear in the composer's "Developer Mode" tool later during conversations.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Supported connector protocols: SSE and streaming HTTP.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Authentication supported: OAuth or no authentication.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Manage tools:</span>{" "}
                  <span className="text-foreground">
                    In connector details, toggle tools on or off and refresh connectors to pull new tool lists and descriptions from the MCP server.
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Use connectors in conversations:</span>{" "}
                  <span className="text-foreground">
                    Choose <span className="font-semibold">Developer mode</span> from the Plus menu and select connectors. You may need to explore different prompting techniques to call the correct tools. For example:
                  </span>
                  <ul className="mt-2 space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Be explicit: "Use the "Acme CRM" connector's "update_record" tool to …". When needed, include the server label and tool name.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Disallow alternatives to avoid ambiguity: "Do not use built-in browsing or other tools; only use the Acme CRM connector."
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Disambiguate similar tools: "Prefer{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">Calendar.create_event</code>{" "}
                        for meetings; do not use{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">Reminders.create_task</code>{" "}
                        for scheduling."
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Specify input shape and sequencing: "First call{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">Repo.read_file</code>{" "}
                        with{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">{`{ path: "…" }`}</code>
                        . Then call{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">Repo.write_file</code>{" "}
                        with the modified content. Do not call other tools."
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        If multiple connectors overlap, state preferences up front (e.g., "Use{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">CompanyDB</code>{" "}
                        for authoritative data; use other sources only if{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">CompanyDB</code>{" "}
                        returns no results").
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Developer mode does not require{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">search</code>
                        /
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">fetch</code>{" "}
                        tools. Any tools your connector exposes (including write actions) are available, subject to confirmation settings.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        See more guidance in{" "}
                        <a href="#" className="text-primary hover:underline">
                          Using tools
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary hover:underline">
                          Prompting
                        </a>
                        .
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Improve tool selection with better tool descriptions: In your MCP server, write action-oriented tool names and descriptions that include "Use this when…" guidance, note disallowed/edge cases, and add parameter descriptions (and enums) to help the model choose the right tool among similar ones and avoid built-in tools when inappropriate.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          {/* Examples */}
          <section className="mb-10">
            <p className="text-foreground mb-4">Examples:</p>
            <div className="space-y-4">
              <CodeBlock
                lines={[
                  { number: 1, content: 'Schedule a 30‑minute meeting tomorrow at 3pm PT with' },
                  { number: 2, content: 'alice@example.com and bob@example.com using "Calendar.create_event".' },
                  { number: 3, content: 'Do not use any other scheduling tools.' },
                ]}
                language="text"
              />
              <CodeBlock
                lines={[
                  { number: 1, content: 'Create a pull request using "GitHub.open_pull_request" from branch' },
                  { number: 2, content: '"feat-retry" into "main" with title "Add retry logic" and body "…".' },
                  { number: 3, content: 'Do not push directly to main.' },
                ]}
                language="text"
              />
            </div>
          </section>

          {/* Reviewing and confirming tool calls */}
          <section className="mb-10">
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <div>
                  <span className="font-semibold text-foreground">Reviewing and confirming tool calls:</span>
                  <ul className="mt-2 space-y-2 ml-4">
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Inspect JSON tool payloads verify correctness and debug problems. For each tool call, you can use the carat to expand and collapse the tool call details. Full JSON contents of the tool input and output are available.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Write actions by default require confirmation. Carefully review the tool input which will be sent to a write action to ensure the behavior is as desired. Incorrect write actions can inadvertently destroy, alter, or share data!
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        Read-only detection: We respect the{" "}
                        <code className="px-1.5 py-0.5 bg-code rounded text-sm font-mono">readOnlyHint</code>{" "}
                        tool annotation (see{" "}
                        <a href="#" className="text-primary hover:underline">
                          MCP tool annotations
                        </a>
                        ). Tools without this hint are treated as write actions.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-foreground">•</span>
                      <span className="text-foreground">
                        You can choose to remember the approve or deny choice for a given tool for a conversation, which means it will apply that choice for the rest of that conversation. Because of this, you should only allow a tool to remember the approve choice if you know and trust the underlying application to make further write actions without your approval. New conversations will prompt for confirmation again. Refreshing the same conversation will also prompt for confirmation again on subsequent turns.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DeveloperMode;
