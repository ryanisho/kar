import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Plus } from "lucide-react";
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

const Sidebar = () => {
  const location = useLocation();
  const [navigation, setNavigation] = useState<NavSection[]>([
    {
      title: "Home",
      items: [{ label: "Overview", href: "/" }],
    },
  ]);

  const fetchNavigation = useCallback(() => {
    fetch("http://localhost:3001/api/docs")
      .then((r) => r.json())
      .then((docs) => {
        const navSection: NavSection = {
          title: "Documentation",
          items: docs.map(
            (doc: { id: number; slug: string; title: string }) => ({
              label: doc.title,
              href: `/docs/${doc.slug}`,
            })
          ),
        };
        setNavigation([
          {
            title: "Home",
            items: [{ label: "Overview", href: "/" }],
          },
          navSection,
        ]);
      })
      .catch((err) => {
        console.error("Failed to fetch navigation:", err);
      });
  }, []);

  useEffect(() => {
    fetchNavigation();
  }, []); // Empty dependency array - only fetch once on mount

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-3">
        {/* new doc button */}
        <Link
          to="/docs/new"
          className="flex items-center justify-center gap-2 w-full mb-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium">New Document</span>
        </Link>

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
                {section.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={itemIndex}>
                      <Link
                        to={item.href || "#"}
                        className={cn(
                          "sidebar-link group",
                          isActive && "sidebar-link-active"
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
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
