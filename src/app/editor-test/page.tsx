"use client";

import { SimpleTipTapEditor } from "@/components/SimpleTipTapEditor";
import { useState } from "react";

export default function EditorTestPage() {
  const [content, setContent] = useState("<p>Test content</p>");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          TipTap Simple Editor Test
        </h1>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Editor</h2>
          <SimpleTipTapEditor
            value={content}
            onChange={setContent}
            placeholder="Start writing your content..."
            minHeight="300px"
          />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">HTML Output</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}
