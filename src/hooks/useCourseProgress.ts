import { useState, useEffect, useCallback } from "react";
import { CourseProgress } from "@/types/course.types";

const PROGRESS_STORAGE_KEY = "course_progress";

export const useCourseProgress = () => {
  const [progress, setProgress] = useState<CourseProgress>({});

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
    } catch (error) {
      console.error("Failed to load course progress from localStorage:", error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Failed to save course progress to localStorage:", error);
    }
  }, [progress]);

  const markChapterComplete = useCallback(
    (courseId: string, chapterId: string) => {
      setProgress((prev) => {
        const courseProgress = prev[courseId] || [];
        if (!courseProgress.includes(chapterId)) {
          return {
            ...prev,
            [courseId]: [...courseProgress, chapterId],
          };
        }
        return prev;
      });
    },
    []
  );

  const markChapterIncomplete = useCallback(
    (courseId: string, chapterId: string) => {
      setProgress((prev) => {
        const courseProgress = prev[courseId] || [];
        return {
          ...prev,
          [courseId]: courseProgress.filter((id) => id !== chapterId),
        };
      });
    },
    []
  );

  const isChapterComplete = useCallback(
    (courseId: string, chapterId: string): boolean => {
      return progress[courseId]?.includes(chapterId) || false;
    },
    [progress]
  );

  const getCourseProgress = useCallback(
    (courseId: string) => {
      return progress[courseId] || [];
    },
    [progress]
  );

  const getCompletedChaptersCount = useCallback(
    (courseId: string): number => {
      return progress[courseId]?.length || 0;
    },
    [progress]
  );

  const clearCourseProgress = useCallback((courseId: string) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[courseId];
      return newProgress;
    });
  }, []);

  const clearAllProgress = useCallback(() => {
    setProgress({});
  }, []);

  return {
    progress,
    markChapterComplete,
    markChapterIncomplete,
    isChapterComplete,
    getCourseProgress,
    getCompletedChaptersCount,
    clearCourseProgress,
    clearAllProgress,
  };
};
