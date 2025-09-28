"use client";

import {
  COURSE_CATEGORIES,
  getCategoryColor,
} from "@/constants/courseCategories";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useCourses } from "@/hooks/useCourses";
import { CourseWithProgress } from "@/types/course.types";
import { BookOpen, ChevronRight, Clock, Filter, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const { data: courses, isLoading, error } = useCourses();
  const { getCompletedChaptersCount } = useCourseProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-red-600 text-lg mb-4">
              Error loading courses
            </div>
            <p className="text-gray-600">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  const coursesWithProgress: CourseWithProgress[] =
    courses?.map((course) => ({
      ...course,
      completedChapters: getCompletedChaptersCount(course.id),
      totalChapters: 0, // This would be populated from the chapters data
    })) || [];

  const filteredCourses =
    selectedCategory === "All"
      ? coursesWithProgress
      : coursesWithProgress.filter(
          (course) => course.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              E-Learning Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of courses designed to
              enhance your skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-4 mb-6">
          <Filter size={20} className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            Filter by category:
          </span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No courses available
            </h3>
            <p className="text-gray-600">Check back later for new courses.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface CourseCardProps {
  course: CourseWithProgress;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const progressPercentage =
    course.totalChapters > 0
      ? Math.round(
          ((course.completedChapters || 0) / course.totalChapters) * 100
        )
      : 0;

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen size={24} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    course.category
                  )}`}
                >
                  {course.category}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Created {new Date(course.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <ChevronRight
            size={20}
            className="text-gray-400 group-hover:text-blue-600 transition-colors"
          />
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Progress Bar */}
        {course.totalChapters > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>
                {course.completedChapters || 0} / {course.totalChapters}{" "}
                chapters
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {progressPercentage}% complete
            </div>
          </div>
        )}

        {/* Course Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>Self-paced</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{course.totalChapters || 0} chapters</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
