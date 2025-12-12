import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-background border-b border-border z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">KAR Wiki</span>
          <span className="text-lg text-muted-foreground font-normal">
            Platform
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
