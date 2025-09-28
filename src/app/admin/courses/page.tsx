"use client";

import { RichTextEditor } from "@/components/RichTextEditor";
import { COURSE_CATEGORIES } from "@/constants/courseCategories";
import {
  useChapters,
  useCreateChapter,
  useDeleteChapter,
} from "@/hooks/useChapters";
import {
  useCourses,
  useCreateCourse,
  useDeleteCourse,
} from "@/hooks/useCourses";
import {
  Course,
  CreateChapterData,
  CreateCourseData,
} from "@/types/course.types";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Edit,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

const ADMIN_USER_ID = "admin"; // In a real app, this would come from authentication

export default function AdminCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isCreatingChapter, setIsCreatingChapter] = useState(false);
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(
    new Set()
  );

  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useCourses();
  const { data: chapters, isLoading: chaptersLoading } = useChapters(
    selectedCourse?.id || ""
  );

  const createCourseMutation = useCreateCourse();
  const deleteCourseMutation = useDeleteCourse();
  const createChapterMutation = useCreateChapter();
  const deleteChapterMutation = useDeleteChapter();

  const [newCourse, setNewCourse] = useState<CreateCourseData>({
    title: "",
    description: "",
    category: COURSE_CATEGORIES[0], // Use first category as default
    created_by: ADMIN_USER_ID,
  });

  const [newChapter, setNewChapter] = useState<
    Omit<CreateChapterData, "course_id">
  >({
    title: "",
    content: "",
    order: 0,
  });

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title.trim() || !newCourse.description.trim()) return;

    try {
      await createCourseMutation.mutateAsync(newCourse);
      setNewCourse({
        title: "",
        description: "",
        category: COURSE_CATEGORIES[0],
        created_by: ADMIN_USER_ID,
      });
      setIsCreatingCourse(false);
    } catch (error) {
      console.error("Failed to create course:", error);
    }
  };

  const handleCreateChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedCourse ||
      !newChapter.title.trim() ||
      !newChapter.content.trim()
    )
      return;

    try {
      await createChapterMutation.mutateAsync({
        ...newChapter,
        course_id: selectedCourse.id,
      });
      setNewChapter({ title: "", content: "", order: 0 });
      setIsCreatingChapter(false);
    } catch (error) {
      console.error("Failed to create chapter:", error);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this course? This will also delete all chapters."
      )
    )
      return;

    try {
      await deleteCourseMutation.mutateAsync(courseId);
      if (selectedCourse?.id === courseId) {
        setSelectedCourse(null);
      }
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const handleDeleteChapter = async (chapterId: string) => {
    if (!confirm("Are you sure you want to delete this chapter?")) return;

    try {
      await deleteChapterMutation.mutateAsync(chapterId);
    } catch (error) {
      console.error("Failed to delete chapter:", error);
    }
  };

  const toggleCourseExpansion = (courseId: string) => {
    setExpandedCourses((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  };

  if (coursesLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (coursesError) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-red-600">
            Error loading courses: {coursesError.message}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Course Management
          </h1>
          <button
            onClick={() => setIsCreatingCourse(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            New Course
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Courses List */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Courses</h2>
            </div>
            <div className="divide-y">
              {courses?.map((course) => (
                <div key={course.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleCourseExpansion(course.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {expandedCourses.has(course.id) ? (
                          <ChevronDown size={20} />
                        ) : (
                          <ChevronRight size={20} />
                        )}
                      </button>
                      <BookOpen size={20} className="text-blue-600" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {course.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="text-blue-600 hover:text-blue-700 p-1"
                        title="Edit course"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="text-red-600 hover:text-red-700 p-1"
                        title="Delete course"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {expandedCourses.has(course.id) && (
                    <div className="mt-4 ml-8">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Chapters</h4>
                        <button
                          onClick={() => {
                            setSelectedCourse(course);
                            setIsCreatingChapter(true);
                          }}
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <Plus size={14} />
                          Add Chapter
                        </button>
                      </div>
                      {chaptersLoading ? (
                        <div className="text-sm text-gray-500">
                          Loading chapters...
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {chapters?.map((chapter) => (
                            <div
                              key={chapter.id}
                              className="flex items-center justify-between p-2 bg-gray-50 rounded"
                            >
                              <span className="text-sm text-gray-700">
                                {chapter.title}
                              </span>
                              <button
                                onClick={() => handleDeleteChapter(chapter.id)}
                                className="text-red-600 hover:text-red-700 p-1"
                                title="Delete chapter"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                          {chapters?.length === 0 && (
                            <div className="text-sm text-gray-500">
                              No chapters yet
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {courses?.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  No courses yet. Create your first course to get started.
                </div>
              )}
            </div>
          </div>

          {/* Course/Chapter Editor */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">
                {isCreatingCourse
                  ? "Create Course"
                  : isCreatingChapter
                  ? "Create Chapter"
                  : selectedCourse
                  ? "Edit Course"
                  : "Select a Course"}
              </h2>
            </div>
            <div className="p-6">
              {isCreatingCourse ? (
                <form onSubmit={handleCreateCourse} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Title
                    </label>
                    <input
                      type="text"
                      value={newCourse.title}
                      onChange={(e) =>
                        setNewCourse((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter course title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={newCourse.description}
                      onChange={(e) =>
                        setNewCourse((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Enter course description"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={newCourse.category}
                      onChange={(e) =>
                        setNewCourse((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {COURSE_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={createCourseMutation.isPending}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                      {createCourseMutation.isPending
                        ? "Creating..."
                        : "Create Course"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCreatingCourse(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : isCreatingChapter ? (
                <form onSubmit={handleCreateChapter} className="space-y-4">
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content
                    </label>
                    <RichTextEditor
                      value={newChapter.content}
                      onChange={(content) =>
                        setNewChapter((prev) => ({ ...prev, content }))
                      }
                      placeholder="Enter chapter content..."
                      minHeight="300px"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={createChapterMutation.isPending}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                      {createChapterMutation.isPending
                        ? "Creating..."
                        : "Create Chapter"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCreatingChapter(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : selectedCourse ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {selectedCourse.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedCourse.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">
                      Chapters ({chapters?.length || 0})
                    </h4>
                    <div className="space-y-2">
                      {chapters?.map((chapter) => (
                        <div
                          key={chapter.id}
                          className="p-3 bg-gray-50 rounded border"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              {chapter.title}
                            </span>
                            <span className="text-sm text-gray-500">
                              Order: {chapter.order}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Select a course from the list to view details or create a new
                  course.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
