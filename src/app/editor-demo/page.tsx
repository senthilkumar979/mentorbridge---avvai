"use client";

import { TipTapEditor } from "@/components/TipTapEditor";
import { useState } from "react";

export default function EditorDemoPage() {
  const [content, setContent] = useState(`
    <h1>TipTap Editor Demo</h1>
    <p>This is a demonstration of the powerful TipTap rich text editor with all free features.</p>
    
    <h2>Features Available:</h2>
    <ul>
      <li><strong>Text Formatting:</strong> Bold, Italic, Underline, Strikethrough, Code</li>
      <li><strong>Headings:</strong> H1, H2, H3 with proper hierarchy</li>
      <li><strong>Lists:</strong> Bullet lists, numbered lists, and task lists</li>
      <li><strong>Alignment:</strong> Left, center, right, and justify alignment</li>
      <li><strong>Special Elements:</strong> Blockquotes, code blocks, highlights</li>
      <li><strong>Media:</strong> Images and links</li>
      <li><strong>Tables:</strong> Full table support with headers</li>
      <li><strong>Advanced Features:</strong> Alerts, notes, info blocks, and layouts</li>
    </ul>
    
    <h2>Try These Features:</h2>
    <p>Use the toolbar above to:</p>
    <ol>
      <li>Format text with bold, italic, underline</li>
      <li>Create different heading levels</li>
      <li>Add bullet points and numbered lists</li>
      <li>Insert images and links</li>
      <li>Create tables</li>
      <li>Use the advanced menu for alerts and layouts</li>
    </ol>
    
    <blockquote>
      <p>This is a blockquote example. Perfect for highlighting important information or quotes.</p>
    </blockquote>
    
    <h3>Code Example:</h3>
    <pre><code>function hello() {
  console.log("Hello, TipTap!");
}</code></pre>
    
    <h3>Task List Example:</h3>
    <ul data-type="taskList">
      <li data-type="taskItem" data-checked="true">Completed task</li>
      <li data-type="taskItem" data-checked="false">Pending task</li>
      <li data-type="taskItem" data-checked="false">Another pending task</li>
    </ul>
  `);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            TipTap Rich Text Editor Demo
          </h1>
          <p className="text-gray-600">
            Experience the power of TipTap with all its free features. This
            editor provides a modern, extensible rich text editing experience
            perfect for e-learning content.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Editor</h2>
          <TipTapEditor
            value={content}
            onChange={setContent}
            placeholder="Start writing your content here..."
            minHeight="500px"
          />
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            HTML Output
          </h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            {content}
          </pre>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Rendered Content
          </h2>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
