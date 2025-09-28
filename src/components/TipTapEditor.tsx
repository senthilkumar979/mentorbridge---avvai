"use client";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Strike from "@tiptap/extension-strike";
import { Table } from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight } from "lowlight";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CheckSquare,
  Code,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Image as ImageIcon,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Table as TableIcon,
  Underline as UnderlineIcon,
  Undo,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ImageModal } from "./ImageModal";
import { LinkModal } from "./LinkModal";

interface TipTapEditorProps {
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
  disabled?: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  isActive = false,
  children,
  title,
  disabled = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`
      p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 
      ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:text-gray-900"
      }
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    `}
  >
    {children}
  </button>
);

export const TipTapEditor: React.FC<TipTapEditorProps> = ({
  value,
  onChange,
  placeholder = "Start writing...",
  className = "",
  minHeight = "200px",
}) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // We'll use CodeBlockLowlight instead
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-600 underline hover:text-blue-800",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Color.configure({ types: [TextStyle.name] }),
      TextStyle,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      Strike,
      CodeBlockLowlight.configure({
        lowlight: createLowlight(),
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Typography,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `prose prose-sm max-w-none focus:outline-none p-4`,
        style: `min-height: ${minHeight}`,
      },
    },
    immediatelyRender: false,
  });

  // Update editor content when value prop changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  const insertImage = useCallback(
    (url: string, alt: string) => {
      console.log("insertImage called with:", url, alt);
      if (editor) {
        // Use a more direct approach
        const imageHtml = `<img src="${url}" alt="${alt}" class="max-w-full h-auto rounded-lg" />`;
        editor.commands.insertContent(imageHtml);
        console.log("Image inserted via insertContent");
      }
    },
    [editor]
  );

  const insertLink = useCallback(
    (url: string, text: string) => {
      console.log("insertLink called with:", url, text);
      if (editor) {
        // Use a more direct approach
        const linkHtml = `<a href="${url}">${text}</a>`;
        editor.commands.insertContent(linkHtml);
        console.log("Link inserted via insertContent");
      }
    },
    [editor]
  );

  const insertTable = useCallback(() => {
    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    }
  }, [editor]);

  if (!editor) {
    console.log("Editor not ready yet");
    return null;
  }

  console.log("Editor is ready:", editor);

  return (
    <div
      className={`border border-gray-300 rounded-lg overflow-hidden ${className}`}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-300">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            title="Bold"
          >
            <Bold size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            title="Italic"
          >
            <Italic size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
            title="Underline"
          >
            <UnderlineIcon size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            title="Strikethrough"
          >
            <Strikethrough size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
            title="Inline Code"
          >
            <Code size={16} />
          </ToolbarButton>
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            isActive={editor.isActive("heading", { level: 1 })}
            title="Heading 1"
          >
            <Heading1 size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            isActive={editor.isActive("heading", { level: 2 })}
            title="Heading 2"
          >
            <Heading2 size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            isActive={editor.isActive("heading", { level: 3 })}
            title="Heading 3"
          >
            <Heading3 size={16} />
          </ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            title="Bullet List"
          >
            <List size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            isActive={editor.isActive("taskList")}
            title="Task List"
          >
            <CheckSquare size={16} />
          </ToolbarButton>
        </div>

        {/* Alignment */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            isActive={editor.isActive({ textAlign: "left" })}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            isActive={editor.isActive({ textAlign: "center" })}
            title="Align Center"
          >
            <AlignCenter size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            isActive={editor.isActive({ textAlign: "right" })}
            title="Align Right"
          >
            <AlignRight size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            isActive={editor.isActive({ textAlign: "justify" })}
            title="Justify"
          >
            <AlignJustify size={16} />
          </ToolbarButton>
        </div>

        {/* Special Elements */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive("blockquote")}
            title="Quote"
          >
            <Quote size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            isActive={editor.isActive("codeBlock")}
            title="Code Block"
          >
            <Code2 size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            isActive={editor.isActive("highlight")}
            title="Highlight"
          >
            <Highlighter size={16} />
          </ToolbarButton>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 border-r border-gray-300 pr-2 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Undo"
          >
            <Undo size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Redo"
          >
            <Redo size={16} />
          </ToolbarButton>
        </div>

        {/* Media & Links */}
        <div className="flex items-center gap-1">
          <ToolbarButton
            onClick={() => setShowLinkModal(true)}
            title="Insert Link"
          >
            <LinkIcon size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => setShowImageModal(true)}
            title="Upload Image"
          >
            <ImageIcon size={16} />
          </ToolbarButton>
          <ToolbarButton onClick={insertTable} title="Insert Table">
            <TableIcon size={16} />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => {
              console.log("Test button clicked");
              if (editor) {
                editor.commands.insertContent("Test content");
                console.log("Test content inserted");
              }
            }}
            title="Test Insert"
          >
            T
          </ToolbarButton>
        </div>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      {/* Modals */}
      <LinkModal
        isOpen={showLinkModal}
        onClose={() => {
          console.log("Link modal closing");
          setShowLinkModal(false);
        }}
        onInsert={(url, text) => {
          console.log("Link modal onInsert called with:", url, text);
          insertLink(url, text);
        }}
      />
      <ImageModal
        isOpen={showImageModal}
        onClose={() => {
          console.log("Image modal closing");
          setShowImageModal(false);
        }}
        onInsert={(url, alt) => {
          console.log("Image modal onInsert called with:", url, alt);
          insertImage(url, alt);
        }}
      />
    </div>
  );
};
