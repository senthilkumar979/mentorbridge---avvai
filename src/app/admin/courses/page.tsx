"use client";

import {
  COURSE_CATEGORIES,
  getCategoryColor,
} from "@/constants/courseCategories";
import { useChapters, useDeleteChapter } from "@/hooks/useChapters";
import {
  useCourses,
  useCreateCourse,
  useUpdateCourse,
  useDeleteCourse,
} from "@/hooks/useCourses";
import { Course, CreateCourseData } from "@/types/course.types";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Edit,
  Plus,
  Trash2,
  X,
  Calendar,
  User,
} from "lucide-react";
import { useState } from "react";

const ADMIN_USER_ID = "admin"; // In a real app, this would come from authentication

export default function AdminCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditingCourse, setIsEditingCourse] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(
    new Set()
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const {
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useCourses();
  const { data: chapters, isLoading: chaptersLoading } = useChapters(
    selectedCourse?.id || ""
  );

  const createCourseMutation = useCreateCourse();
  const updateCourseMutation = useUpdateCourse();
  const deleteCourseMutation = useDeleteCourse();
  const deleteChapterMutation = useDeleteChapter();

  const [newCourse, setNewCourse] = useState<CreateCourseData>({
    title: "",
    description: "",
    category: COURSE_CATEGORIES[0], // Use first category as default
    created_by: ADMIN_USER_ID,
  });

  const [editCourse, setEditCourse] = useState<CreateCourseData>({
    title: "",
    description: "",
    category: COURSE_CATEGORIES[0],
    created_by: ADMIN_USER_ID,
  });

  // Filter courses based on search and category
  const filteredCourses =
    courses?.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }) || [];

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
      setIsDrawerOpen(false);
    } catch (error) {
      console.error("Failed to create course:", error);
    }
  };

  const handleEditCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedCourse ||
      !editCourse.title.trim() ||
      !editCourse.description.trim()
    )
      return;

    try {
      await updateCourseMutation.mutateAsync({
        courseId: selectedCourse.id,
        courseData: {
          title: editCourse.title,
          description: editCourse.description,
          category: editCourse.category,
        },
      });
      setIsDrawerOpen(false);
      setIsEditingCourse(false);
      setSelectedCourse(null);
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };

  const handleDeleteCourse = (course: Course) => {
    setCourseToDelete(course);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteCourse = async () => {
    if (!courseToDelete) return;

    try {
      await deleteCourseMutation.mutateAsync(courseToDelete.id);
      if (selectedCourse?.id === courseToDelete.id) {
        setSelectedCourse(null);
      }
      setIsDeleteModalOpen(false);
      setCourseToDelete(null);
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const handleEditClick = (course: Course) => {
    setSelectedCourse(course);
    setEditCourse({
      title: course.title,
      description: course.description,
      category: course.category,
      created_by: course.created_by,
    });
    setIsEditingCourse(true);
    setIsDrawerOpen(true);
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
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (coursesError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg mb-4">Error loading courses</div>
          <p className="text-gray-600">{coursesError.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Course Management
              </h1>
              <p className="text-gray-600">
                Manage your e-learning courses and chapters
              </p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              New Course
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            {COURSE_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || selectedCategory !== "All"
                ? "No courses found"
                : "No courses yet"}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== "All"
                ? "Try adjusting your search or filter criteria."
                : "Create your first course to get started."}
            </p>
            {!searchTerm && selectedCategory === "All" && (
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Create Course
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEdit={() => handleEditClick(course)}
                onDelete={() => handleDeleteCourse(course)}
                onToggleExpand={() => toggleCourseExpansion(course.id)}
                isExpanded={expandedCourses.has(course.id)}
                chapters={chapters}
                chaptersLoading={chaptersLoading}
                onAddChapter={() => {
                  // Navigate to add chapter page
                  window.location.href = `/admin/courses/${course.id}/chapters/new`;
                }}
                onDeleteChapter={handleDeleteChapter}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setIsEditingCourse(false);
          setSelectedCourse(null);
        }}
        title={isEditingCourse ? "Edit Course" : "Create New Course"}
      >
        <form
          onSubmit={isEditingCourse ? handleEditCourse : handleCreateCourse}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              value={isEditingCourse ? editCourse.title : newCourse.title}
              onChange={(e) => {
                if (isEditingCourse) {
                  setEditCourse((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                } else {
                  setNewCourse((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }
              }}
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
              value={
                isEditingCourse ? editCourse.description : newCourse.description
              }
              onChange={(e) => {
                if (isEditingCourse) {
                  setEditCourse((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                } else {
                  setNewCourse((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }
              }}
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
              value={isEditingCourse ? editCourse.category : newCourse.category}
              onChange={(e) => {
                if (isEditingCourse) {
                  setEditCourse((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }));
                } else {
                  setNewCourse((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }));
                }
              }}
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
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={
                isEditingCourse
                  ? updateCourseMutation.isPending
                  : createCourseMutation.isPending
              }
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isEditingCourse
                ? updateCourseMutation.isPending
                  ? "Updating..."
                  : "Update Course"
                : createCourseMutation.isPending
                ? "Creating..."
                : "Create Course"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsDrawerOpen(false);
                setIsEditingCourse(false);
                setSelectedCourse(null);
              }}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </Drawer>

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setCourseToDelete(null);
        }}
        onConfirm={confirmDeleteCourse}
        course={courseToDelete}
        isLoading={deleteCourseMutation.isPending}
      />
    </div>
  );
}

// Course Card Component
interface CourseCardProps {
  course: Course;
  onEdit: () => void;
  onDelete: () => void;
  onToggleExpand: () => void;
  isExpanded: boolean;
  chapters?: Array<{
    id: string;
    title: string;
    content: string;
    order: number;
    course_id: string;
    created_at: string;
    updated_at: string;
  }>;
  chaptersLoading: boolean;
  onAddChapter: () => void;
  onDeleteChapter: (chapterId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEdit,
  onDelete,
  onToggleExpand,
  isExpanded,
  chapters,
  chaptersLoading,
  onAddChapter,
  onDeleteChapter,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={onToggleExpand}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              {isExpanded ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 truncate">
                  {course.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    course.category as any
                  )}`}
                >
                  {course.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {course.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(course.created_at).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {course.created_by}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              title="Edit course"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              title="Delete course"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-700">Chapters</h4>
              <button
                onClick={onAddChapter}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Plus size={14} />
                Add Chapter
              </button>
            </div>
            {chaptersLoading ? (
              <div className="text-sm text-gray-500">Loading chapters...</div>
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
                      onClick={() => onDeleteChapter(chapter.id)}
                      className="text-red-600 hover:text-red-700 p-1"
                      title="Delete chapter"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                {chapters?.length === 0 && (
                  <div className="text-sm text-gray-500">No chapters yet</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Drawer Component
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal Component
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  course: Course | null;
  isLoading: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  course,
  isLoading,
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Delete Course
                </h3>
                <p className="text-sm text-gray-500">
                  This action cannot be undone
                </p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">
                Are you sure you want to delete{" "}
                <strong>&ldquo;{course.title}&rdquo;</strong>? This will also
                delete all chapters associated with this course.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onConfirm}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
              >
                {isLoading ? "Deleting..." : "Delete Course"}
              </button>
              <button
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
