import { cn } from "@/lib/utils";

interface ModelCardProps {
  name: string;
  description: string;
  badge?: string;
  gradient?: string;
  className?: string;
}

const ModelCard = ({ name, description, badge, gradient = "from-gray-100 to-gray-200", className }: ModelCardProps) => {
  return (
    <a
      href="#"
      className={cn(
        "block group rounded-xl overflow-hidden border border-border hover:border-muted-foreground/30 transition-all hover:shadow-sm",
        className
      )}
    >
      <div className={cn("h-32 bg-gradient-to-br", gradient)} />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
            {name}
          </h3>
          {badge && (
            <span className="px-1.5 py-0.5 text-xs font-medium bg-badge-new text-badge-new-foreground rounded">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ModelCard;
