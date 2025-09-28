"use client";

import { SimpleTipTapEditor } from "@/components/SimpleTipTapEditor";
import { useCreateChapter } from "@/hooks/useChapters";
import { useCourses } from "@/hooks/useCourses";
import { CreateChapterData } from "@/types/course.types";
import { ArrowLeft, Save, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

interface AddChapterPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default function AddChapterPage({ params }: AddChapterPageProps) {
  const router = useRouter();
  const { courseId } = use(params);
  const { data: course } = useCourses();
  const createChapterMutation = useCreateChapter();

  const [newChapter, setNewChapter] = useState<
    Omit<CreateChapterData, "course_id">
  >({
    title: "",
    content: "",
    order: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapter.title.trim() || !newChapter.content.trim()) return;

    setIsSubmitting(true);
    try {
      await createChapterMutation.mutateAsync({
        ...newChapter,
        course_id: courseId,
      });
      router.push(`/admin/courses`);
    } catch (error) {
      console.error("Failed to create chapter:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push(`/admin/courses`);
  };

  const currentCourse = course?.find((c) => c.id === courseId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/courses"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Add New Chapter
              </h1>
              <p className="text-gray-600">
                {currentCourse
                  ? `to ${currentCourse.title}`
                  : "Loading course..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chapter Title
                </label>
                <input
                  type="text"
                  value={newChapter.title}
                  onChange={(e) =>
                    setNewChapter((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter chapter title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order
                </label>
                <input
                  type="number"
                  value={newChapter.order}
                  onChange={(e) =>
                    setNewChapter((prev) => ({
                      ...prev,
                      order: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  The order in which this chapter appears in the course
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <SimpleTipTapEditor
                  value={newChapter.content}
                  onChange={(content) =>
                    setNewChapter((prev) => ({ ...prev, content }))
                  }
                  placeholder="Enter chapter content..."
                  minHeight="400px"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <X size={16} />
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || createChapterMutation.isPending}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <Save size={16} />
              {isSubmitting || createChapterMutation.isPending
                ? "Creating..."
                : "Create Chapter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
