import { Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  hasArrow?: boolean;
  badge?: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Get started",
    items: [
      { label: "Overview", active: true },
      { label: "Quickstart" },
      { label: "Models" },
      { label: "Pricing" },
      { label: "Libraries", badge: "New" },
      { label: "Latest: GPT-5.2", badge: "New" },
    ],
  },
  {
    title: "Core concepts",
    items: [
      { label: "Text generation" },
      { label: "Code generation" },
      { label: "Images and vision" },
      { label: "Audio and speech" },
      { label: "Structured output" },
      { label: "Function calling" },
      { label: "Responses API" },
    ],
  },
  {
    title: "Agents",
    items: [
      { label: "Overview" },
      { label: "Build agents", hasArrow: true },
      { label: "Deploy in your product", hasArrow: true },
      { label: "Optimize", hasArrow: true },
      { label: "Voice agents" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Using tools" },
      { label: "Connectors and MCP" },
      { label: "Developer mode", href: "/docs/guides/developer-mode" },
      { label: "Web search" },
      { label: "Code interpreter" },
      { label: "File search and retrieval", hasArrow: true },
    ],
  },
  {
    title: "More products",
    items: [
      { label: "Realtime API", hasArrow: true },
      { label: "Fine-tuning", hasArrow: true },
      { label: "Batch API" },
      { label: "Assistants", hasArrow: true },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-3">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-12 py-2 text-sm bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-xs">
              ⌘
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-background border border-border rounded text-xs">
              K
            </kbd>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-6">
          {navigation.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h3 className="px-3 py-2 text-xs font-semibold text-foreground">
                  {section.title}
                </h3>
              )}
              <ul className="space-y-0.5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={item.href || "#"}
                      className={cn(
                        "sidebar-link group",
                        item.active && "sidebar-link-active"
                      )}
                    >
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-xs font-medium bg-badge-new text-badge-new-foreground rounded">
                          {item.badge}
                        </span>
                      )}
                      {item.hasArrow && (
                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
