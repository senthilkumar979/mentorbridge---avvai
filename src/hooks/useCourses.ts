import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
  Course,
  CreateCourseData,
  UpdateCourseData,
} from "@/types/course.types";

const COURSES_QUERY_KEY = "courses";

export const useCourses = () => {
  return useQuery({
    queryKey: [COURSES_QUERY_KEY],
    queryFn: async (): Promise<Course[]> => {
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch courses: ${error.message}`);
      }

      return data || [];
    },
  });
};

export const useCourse = (courseId: string) => {
  return useQuery({
    queryKey: [COURSES_QUERY_KEY, courseId],
    queryFn: async (): Promise<Course | null> => {
      const { data, error } = await supabase
        .from("courses")
        .select(
          `
          *,
          chapters (
            id,
            title,
            content,
            order,
            created_at,
            updated_at
          )
        `
        )
        .eq("id", courseId)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          return null; // Course not found
        }
        throw new Error(`Failed to fetch course: ${error.message}`);
      }

      return data;
    },
    enabled: !!courseId,
  });
};

export const useCreateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (courseData: CreateCourseData): Promise<Course> => {
      const { data, error } = await supabase
        .from("courses")
        .insert([courseData])
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create course: ${error.message}`);
      }

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COURSES_QUERY_KEY] });
    },
  });
};

export const useUpdateCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      courseId,
      courseData,
    }: {
      courseId: string;
      courseData: UpdateCourseData;
    }): Promise<Course> => {
      const { data, error } = await supabase
        .from("courses")
        .update(courseData)
        .eq("id", courseId)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to update course: ${error.message}`);
      }

      return data;
    },
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: [COURSES_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [COURSES_QUERY_KEY, courseId],
      });
    },
  });
};

export const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (courseId: string): Promise<void> => {
      const { error } = await supabase
        .from("courses")
        .delete()
        .eq("id", courseId);

      if (error) {
        throw new Error(`Failed to delete course: ${error.message}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [COURSES_QUERY_KEY] });
    },
  });
};
