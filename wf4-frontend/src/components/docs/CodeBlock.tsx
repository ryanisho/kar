import { useState } from "react";
import { Copy, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeLine {
  number: number;
  content: React.ReactNode;
}

interface CodeBlockProps {
  language?: string;
  lines: CodeLine[];
  className?: string;
}

const languages = ["javascript", "python", "curl", "csharp"];

const CodeBlock = ({ language = "javascript", lines, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [selectedLang, setSelectedLang] = useState(language);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCopy = () => {
    const text = lines.map(l => 
      typeof l.content === 'string' ? l.content : ''
    ).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-block", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-code-border">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {selectedLang}
            <ChevronDown className="w-4 h-4" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 py-1 bg-popover border border-border rounded-md shadow-lg z-10">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setShowDropdown(false);
                  }}
                  className={cn(
                    "block w-full px-3 py-1.5 text-left text-sm hover:bg-accent transition-colors",
                    selectedLang === lang && "text-foreground font-medium"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-badge-new" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code>
            {lines.map((line) => (
              <div key={line.number} className="flex">
                <span className="code-line-number w-8 shrink-0 text-right pr-4">
                  {line.number}
                </span>
                <span className="flex-1">{line.content}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
