import { ReactNode } from "react";

interface InfoBoxProps {
  type?: "info" | "warning" | "tip" | "success";
  title?: string;
  children: ReactNode;
  className?: string;
}

const typeStyles = {
  info: "bg-primary/10 border-primary/20",
  warning: "bg-red-50 border-red-200",
  tip: "bg-primary/5 border-primary/10",
  success: "bg-green-50 border-green-200",
};

const titleIcons = {
  info: "📦",
  warning: "⚠️",
  tip: "💡",
  success: "✅",
};

export function InfoBox({ type = "info", title, children, className = "" }: InfoBoxProps) {
  return (
    <div className={`p-4 rounded-lg border ${typeStyles[type]} ${className}`}>
      {title && (
        <h4 className="font-medium mb-2">
          {titleIcons[type]} {title}
        </h4>
      )}
      <div className="text-sm">{children}</div>
    </div>
  );
}