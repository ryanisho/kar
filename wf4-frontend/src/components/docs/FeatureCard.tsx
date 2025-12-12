import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <a
      href="#"
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-border hover:bg-secondary/50 transition-all group",
        className
      )}
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-background transition-colors">
        <Icon className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <h3 className="font-medium text-foreground group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export default FeatureCard;
