"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: string;
}

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  title: string;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  isActive = false,
  children,
  title,
}) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`
      p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 
      ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:text-gray-900"
      }
    `}
  >
    {children}
  </button>
);

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Start writing...",
  className = "",
  minHeight = "200px",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleContentChange();
  }, []);

  const handleContentChange = useCallback(() => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onChange(content);
    }
  }, [onChange]);

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
  }, []);

  const insertLink = useCallback(() => {
    const url = prompt("Enter URL:");
    if (url) {
      execCommand("createLink", url);
    }
  }, [execCommand]);

  const insertImage = useCallback(() => {
    const url = prompt("Enter image URL:");
    if (url) {
      execCommand("insertImage", url);
    }
  }, [execCommand]);

  const isCommandActive = useCallback((command: string): boolean => {
    return document.queryCommandState(command);
  }, []);

  const [activeStates, setActiveStates] = useState({
    bold: false,
    italic: false,
    underline: false,
    orderedList: false,
    unorderedList: false,
  });

  const updateActiveStates = useCallback(() => {
    setActiveStates({
      bold: isCommandActive("bold"),
      italic: isCommandActive("italic"),
      underline: isCommandActive("underline"),
      orderedList: isCommandActive("insertOrderedList"),
      unorderedList: isCommandActive("insertUnorderedList"),
    });
  }, [isCommandActive]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  return (
    <div
      className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-300">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => execCommand("bold")}
            isActive={activeStates.bold}
            title="Bold"
          >
            <Bold size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("italic")}
            isActive={activeStates.italic}
            title="Italic"
          >
            <Italic size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("underline")}
            isActive={activeStates.underline}
            title="Underline"
          >
            <Underline size={16} />
          </ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => execCommand("insertUnorderedList")}
            isActive={activeStates.unorderedList}
            title="Bullet List"
          >
            <List size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("insertOrderedList")}
            isActive={activeStates.orderedList}
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </ToolbarButton>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => execCommand("justifyLeft")}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("justifyCenter")}
            title="Align Center"
          >
            <AlignCenter size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("justifyRight")}
            title="Align Right"
          >
            <AlignRight size={16} />
          </ToolbarButton>
        </div>

        {/* Special Elements */}
        <div className="flex items-center gap-1">
          <ToolbarButton
            onClick={() => execCommand("formatBlock", "blockquote")}
            title="Quote"
          >
            <Quote size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => execCommand("formatBlock", "pre")}
            title="Code Block"
          >
            <Code size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={insertLink} title="Insert Link">
            <Link size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={insertImage} title="Insert Image">
            <Image size={16} />
          </ToolbarButton>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleContentChange}
        onPaste={handlePaste}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          updateActiveStates();
        }}
        onKeyUp={updateActiveStates}
        onMouseUp={updateActiveStates}
        className={`
          p-4 outline-none resize-none overflow-y-auto
          ${isFocused ? "ring-2 ring-blue-500 ring-opacity-50" : ""}
        `}
        style={{ minHeight }}
        data-placeholder={placeholder}
        suppressContentEditableWarning
      />

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};
