"use client";
import { Flag } from "@/components/flags/flag";

export function DemoToolbar() {
  return (
    <div className="flex items-center justify-between p-3 border-b bg-gray-50">
      <h3 className="font-medium">Document Viewer</h3>
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm">
          📄 Save
        </button>
        <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm">
          🖨️ Print
        </button>
        <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm">
          📤 Share
        </button>
        
        <Flag when="enable-ai-assistant-in-pdf-toolbar">
          <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm animate-pulse">
            🤖 AI Assistant
          </button>
        </Flag>
      </div>
    </div>
  );
}