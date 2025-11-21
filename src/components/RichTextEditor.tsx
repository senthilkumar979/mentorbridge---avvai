"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import posthog from 'posthog-js';
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
  AlertTriangle,
  Info,
  StickyNote,
  Columns,
  Table,
  Plus,
  ChevronDown,
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
  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false);

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
      posthog.capture('rte_element_inserted', { element_type: 'link' });
      execCommand("createLink", url);
    }
  }, [execCommand]);

  const insertImage = useCallback(() => {
    const url = prompt("Enter image URL:");
    if (url) {
      posthog.capture('rte_element_inserted', { element_type: 'image' });
      execCommand("insertImage", url);
    }
  }, [execCommand]);

  // Advanced features
  const insertAlert = useCallback(() => {
    const alertContent = prompt("Enter alert content:");
    if (alertContent) {
      posthog.capture('rte_element_inserted', { element_type: 'alert' });
      const alertHtml = `
        <div class="alert alert-warning" style="
          background-color: #fef3c7;
          border: 1px solid #f59e0b;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        ">
          <div style="color: #f59e0b; font-size: 1.25rem; margin-top: 0.125rem;">⚠️</div>
          <div>${alertContent}</div>
        </div>
      `;
      execCommand("insertHTML", alertHtml);
    }
  }, [execCommand]);

  const insertNote = useCallback(() => {
    const noteContent = prompt("Enter note content:");
    if (noteContent) {
      posthog.capture('rte_element_inserted', { element_type: 'note' });
      const noteHtml = `
        <div class="note" style="
          background-color: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        ">
          <div style="color: #0ea5e9; font-size: 1.25rem; margin-top: 0.125rem;">📝</div>
          <div>${noteContent}</div>
        </div>
      `;
      execCommand("insertHTML", noteHtml);
    }
  }, [execCommand]);

  const insertInfo = useCallback(() => {
    const infoContent = prompt("Enter info content:");
    if (infoContent) {
      posthog.capture('rte_element_inserted', { element_type: 'info' });
      const infoHtml = `
        <div class="info" style="
          background-color: #f0fdf4;
          border: 1px solid #22c55e;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        ">
          <div style="color: #22c55e; font-size: 1.25rem; margin-top: 0.125rem;">ℹ️</div>
          <div>${infoContent}</div>
        </div>
      `;
      execCommand("insertHTML", infoHtml);
    }
  }, [execCommand]);

  const insertSingleColumn = useCallback(() => {
    const content = prompt("Enter single column content:");
    if (content) {
      posthog.capture('rte_element_inserted', { element_type: 'single_column' });
      const columnHtml = `
        <div class="single-column" style="
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin: 1rem 0;
        ">
          <div>${content}</div>
        </div>
      `;
      execCommand("insertHTML", columnHtml);
    }
  }, [execCommand]);

  const insertTwoColumns = useCallback(() => {
    const leftContent = prompt("Enter left column content:");
    const rightContent = prompt("Enter right column content:");
    if (leftContent && rightContent) {
      posthog.capture('rte_element_inserted', { element_type: 'two_columns' });
      const columnsHtml = `
        <div class="two-columns" style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        ">
          <div style="
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            padding: 1rem;
          ">
            <div><strong>Left Column:</strong></div>
            <div>${leftContent}</div>
          </div>
          <div style="
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            padding: 1rem;
          ">
            <div><strong>Right Column:</strong></div>
            <div>${rightContent}</div>
          </div>
        </div>
      `;
      execCommand("insertHTML", columnsHtml);
    }
  }, [execCommand]);

  const insertTable = useCallback(() => {
    const rows = prompt("Enter number of rows (2-10):", "3");
    const cols = prompt("Enter number of columns (2-6):", "3");
    const numRows = Math.min(Math.max(parseInt(rows || "3") || 3, 2), 10);
    const numCols = Math.min(Math.max(parseInt(cols || "3") || 3, 2), 6);

    posthog.capture('rte_table_inserted', { rows: numRows, columns: numCols });

    let tableHtml = `
      <table style="
        border-collapse: collapse;
        width: 100%;
        margin: 1rem 0;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        overflow: hidden;
      ">
    `;

    // Header row
    tableHtml += `
      <thead style="background-color: #f3f4f6;">
        <tr>
    `;
    for (let i = 0; i < numCols; i++) {
      tableHtml += `
        <th style="
          border: 1px solid #d1d5db;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
        ">Header ${i + 1}</th>
      `;
    }
    tableHtml += `</tr></thead>`;

    // Body rows
    tableHtml += `<tbody>`;
    for (let i = 0; i < numRows - 1; i++) {
      tableHtml += `<tr>`;
      for (let j = 0; j < numCols; j++) {
        tableHtml += `
          <td style="
            border: 1px solid #d1d5db;
            padding: 0.75rem;
          ">Cell ${i + 1}-${j + 1}</td>
        `;
      }
      tableHtml += `</tr>`;
    }
    tableHtml += `</tbody></table>`;

    execCommand("insertHTML", tableHtml);
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

  // Close advanced menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showAdvancedMenu) {
        const target = event.target as Element;
        if (!target.closest(".advanced-menu-container")) {
          setShowAdvancedMenu(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAdvancedMenu]);

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
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
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

        {/* Advanced Features */}
        <div className="flex items-center gap-1">
          <div className="relative advanced-menu-container">
            <ToolbarButton
              onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
              title="Advanced Features"
            >
              <Plus size={16} />
              <ChevronDown size={12} className="ml-1" />
            </ToolbarButton>

            {showAdvancedMenu && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-48">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                    Alerts & Notes
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        insertAlert();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <AlertTriangle size={14} className="text-yellow-600" />
                      Alert
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        insertNote();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <StickyNote size={14} className="text-blue-600" />
                      Note
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        insertInfo();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <Info size={14} className="text-green-600" />
                      Info
                    </button>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                    Layout
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        insertSingleColumn();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <Columns size={14} className="text-gray-600" />
                      Single Column
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        insertTwoColumns();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <Columns size={14} className="text-gray-600" />
                      Two Columns
                    </button>
                  </div>

                  <div className="border-t border-gray-200 my-2"></div>

                  <div className="text-xs font-semibold text-gray-500 mb-2 px-2">
                    Tables
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        insertTable();
                        setShowAdvancedMenu(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <Table size={14} className="text-gray-600" />
                      Insert Table
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
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
          p-4 outline-none resize-none overflow-y-auto prose prose-sm max-w-none
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

        /* Enhanced styling for rich text content */
        .prose {
          max-width: none;
        }

        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4,
        .prose h5,
        .prose h6 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          line-height: 1.25;
        }

        .prose h1 {
          font-size: 2rem;
        }
        .prose h2 {
          font-size: 1.5rem;
        }
        .prose h3 {
          font-size: 1.25rem;
        }
        .prose h4 {
          font-size: 1.125rem;
        }
        .prose h5 {
          font-size: 1rem;
        }
        .prose h6 {
          font-size: 0.875rem;
        }

        .prose p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .prose ul,
        .prose ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .prose li {
          margin-bottom: 0.25rem;
        }

        .prose blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }

        .prose pre {
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          overflow-x: auto;
          font-family: "Courier New", monospace;
        }

        .prose code {
          background-color: #f3f4f6;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: "Courier New", monospace;
          font-size: 0.875rem;
        }

        .prose a {
          color: #2563eb;
          text-decoration: underline;
        }

        .prose a:hover {
          color: #1d4ed8;
        }

        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }

        .prose table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }

        .prose th,
        .prose td {
          border: 1px solid #d1d5db;
          padding: 0.75rem;
          text-align: left;
        }

        .prose th {
          background-color: #f9fafb;
          font-weight: 600;
        }

        .prose .alert {
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .prose .note {
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .prose .info {
          border-radius: 0.5rem;
          padding: 1rem;
          margin: 1rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .prose .single-column {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin: 1rem 0;
        }

        .prose .two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        }

        .prose .two-columns > div {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          padding: 1rem;
        }

        @media (max-width: 768px) {
          .prose .two-columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
