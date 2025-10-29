import { CopyButton } from "@/components/ui/copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
  className?: string;
}

export function CodeBlock({ code, language, showCopy = true, className = "" }: CodeBlockProps) {
  if (showCopy) {
    return (
      <div className={`mb-4 ${className}`}>
        <CopyButton text={code} className="w-full" />
      </div>
    );
  }

  return (
    <pre className={`bg-muted p-4 rounded-lg text-sm mb-4 ${className}`}>
      <code>{code}</code>
    </pre>
  );
}