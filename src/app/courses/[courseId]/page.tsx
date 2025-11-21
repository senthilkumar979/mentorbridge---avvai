"use client";

import posthog from 'posthog-js';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCourse } from "@/hooks/useCourses";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { Chapter } from "@/types/course.types";
import {
  BookOpen,
  CheckCircle,
  Circle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Play,
} from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    null
  );

  const { data: course, isLoading, error } = useCourse(courseId);
  const {
    isChapterComplete,
    markChapterComplete,
    markChapterIncomplete,
    getCompletedChaptersCount,
  } = useCourseProgress();

  // Set the first chapter as selected when course loads
  useEffect(() => {
    if (course?.chapters && course.chapters.length > 0 && !selectedChapterId) {
      setSelectedChapterId(course.chapters[0].id);
    }
  }, [course, selectedChapterId]);

  const selectedChapter = course?.chapters?.find(
    (ch) => ch.id === selectedChapterId
  );

  const handleChapterClick = (chapterId: string) => {
    posthog.capture('chapter_selected', {
        course_id: courseId,
        chapter_id: chapterId,
    });
    setSelectedChapterId(chapterId);
  };

  const handleChapterComplete = (chapterId: string) => {
    const wasCompleted = isChapterComplete(courseId, chapterId);
    posthog.capture('chapter_completion_toggled', {
        course_id: courseId,
        chapter_id: chapterId,
        completed: !wasCompleted,
    });
    if (wasCompleted) {
      markChapterIncomplete(courseId, chapterId);
    } else {
      markChapterComplete(courseId, chapterId);
    }
  };

  const getNextChapter = () => {
    if (!course?.chapters) return null;
    const currentIndex = course.chapters.findIndex(
      (ch) => ch.id === selectedChapterId
    );
    return currentIndex < course.chapters.length - 1
      ? course.chapters[currentIndex + 1]
      : null;
  };

  const getPreviousChapter = () => {
    if (!course?.chapters) return null;
    const currentIndex = course.chapters.findIndex(
      (ch) => ch.id === selectedChapterId
    );
    return currentIndex > 0 ? course.chapters[currentIndex - 1] : null;
  };

  const completedChapters = getCompletedChaptersCount(courseId);
  const totalChapters = course?.chapters?.length || 0;
  const progressPercentage =
    totalChapters > 0
      ? Math.round((completedChapters / totalChapters) * 100)
      : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="h-64 bg-gray-300 rounded"></div>
              </div>
              <div className="lg:col-span-3">
                <div className="h-96 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="text-red-600 text-lg mb-4">
              Error loading course
            </div>
            <p className="text-gray-600 mb-4">{error.message}</p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="text-gray-600 text-lg mb-4">Course not found</div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/courses"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h1>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Course Progress</span>
              <span>
                {completedChapters} / {totalChapters} chapters completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {progressPercentage}% complete
            </div>
          </div>

          {/* Course Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>Self-paced</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{totalChapters} chapters</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chapters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-8">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Chapters</h3>
              </div>
              <div className="divide-y">
                {course.chapters?.map((chapter, index) => (
                  <ChapterItem
                    key={chapter.id}
                    chapter={chapter}
                    index={index + 1}
                    isSelected={selectedChapterId === chapter.id}
                    isComplete={isChapterComplete(courseId, chapter.id)}
                    onClick={() => handleChapterClick(chapter.id)}
                    onToggleComplete={() => handleChapterComplete(chapter.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="lg:col-span-3">
            {selectedChapter ? (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedChapter.title}
                    </h2>
                    <button
                      onClick={() => handleChapterComplete(selectedChapter.id)}
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        isChapterComplete(courseId, selectedChapter.id)
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {isChapterComplete(courseId, selectedChapter.id) ? (
                        <CheckCircle size={16} />
                      ) : (
                        <Circle size={16} />
                      )}
                      {isChapterComplete(courseId, selectedChapter.id)
                        ? "Completed"
                        : "Mark Complete"}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: selectedChapter.content,
                    }}
                  />
                </div>

                {/* Navigation */}
                <div className="p-6 border-t bg-gray-50">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        const prev = getPreviousChapter();
                        if (prev) setSelectedChapterId(prev.id);
                      }}
                      disabled={!getPreviousChapter()}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={16} />
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        const next = getNextChapter();
                        if (next) setSelectedChapterId(next.id);
                      }}
                      disabled={!getNextChapter()}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                <Play size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Chapter
                </h3>
                <p className="text-gray-600">
                  Choose a chapter from the sidebar to start learning.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ChapterItemProps {
  chapter: Chapter;
  index: number;
  isSelected: boolean;
  isComplete: boolean;
  onClick: () => void;
  onToggleComplete: () => void;
}

const ChapterItem: React.FC<ChapterItemProps> = ({
  chapter,
  index,
  isSelected,
  isComplete,
  onClick,
  onToggleComplete,
}) => {
  return (
    <div
      className={`p-4 cursor-pointer transition-colors ${
        isSelected
          ? "bg-blue-50 border-r-2 border-blue-600"
          : "hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          {isComplete ? (
            <CheckCircle size={20} className="text-green-600" />
          ) : (
            <Circle size={20} className="text-gray-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">#{index}</span>
            <h4
              className={`text-sm font-medium truncate ${
                isSelected ? "text-blue-900" : "text-gray-900"
              }`}
            >
              {chapter.title}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
