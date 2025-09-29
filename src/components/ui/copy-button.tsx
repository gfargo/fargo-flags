"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  children?: React.ReactNode;
}

export function CopyButton({ text, className, children }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleTextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const selection = window.getSelection();
    const range = document.createRange();
    const textElement = e.target as HTMLElement;
    range.selectNodeContents(textElement);
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-mono transition-colors border border-border",
        className
      )}
    >
      <span
        className="flex-1 text-left cursor-text select-all hover:bg-muted/50 rounded px-1 py-0.5 transition-colors"
        onClick={handleTextClick}
        title="Click to select text"
      >
        {text}
      </span>
      <span className="text-xs">
        {copied ? (
          <span className="text-green-600">✓</span>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </span>
      {children}
    </button>
  );
}