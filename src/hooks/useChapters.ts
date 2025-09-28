import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
  Chapter,
  CreateChapterData,
  UpdateChapterData,
} from "@/types/course.types";

const CHAPTERS_QUERY_KEY = "chapters";

export const useChapters = (courseId: string) => {
  return useQuery({
    queryKey: [CHAPTERS_QUERY_KEY, courseId],
    queryFn: async (): Promise<Chapter[]> => {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .eq("course_id", courseId)
        .order('"order"', { ascending: true });

      if (error) {
        throw new Error(`Failed to fetch chapters: ${error.message}`);
      }

      return data || [];
    },
    enabled: !!courseId,
  });
};

export const useChapter = (chapterId: string) => {
  return useQuery({
    queryKey: [CHAPTERS_QUERY_KEY, chapterId],
    queryFn: async (): Promise<Chapter | null> => {
      const { data, error } = await supabase
        .from("chapters")
        .select("*")
        .eq("id", chapterId)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          return null; // Chapter not found
        }
        throw new Error(`Failed to fetch chapter: ${error.message}`);
      }

      return data;
    },
    enabled: !!chapterId,
  });
};

export const useCreateChapter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chapterData: CreateChapterData): Promise<Chapter> => {
      const { data, error } = await supabase
        .from("chapters")
        .insert([chapterData])
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create chapter: ${error.message}`);
      }

      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [CHAPTERS_QUERY_KEY, variables.course_id],
      });
      queryClient.invalidateQueries({
        queryKey: ["courses", variables.course_id],
      });
    },
  });
};

export const useUpdateChapter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      chapterId,
      chapterData,
    }: {
      chapterId: string;
      chapterData: UpdateChapterData;
    }): Promise<Chapter> => {
      const { data, error } = await supabase
        .from("chapters")
        .update(chapterData)
        .eq("id", chapterId)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to update chapter: ${error.message}`);
      }

      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [CHAPTERS_QUERY_KEY, data.course_id],
      });
      queryClient.invalidateQueries({ queryKey: ["courses", data.course_id] });
      queryClient.invalidateQueries({
        queryKey: [CHAPTERS_QUERY_KEY, data.id],
      });
    },
  });
};

export const useDeleteChapter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chapterId: string): Promise<{ course_id: string }> => {
      // First get the course_id before deleting
      const { data: chapter, error: fetchError } = await supabase
        .from("chapters")
        .select("course_id")
        .eq("id", chapterId)
        .single();

      if (fetchError) {
        throw new Error(`Failed to fetch chapter: ${fetchError.message}`);
      }

      const { error } = await supabase
        .from("chapters")
        .delete()
        .eq("id", chapterId);

      if (error) {
        throw new Error(`Failed to delete chapter: ${error.message}`);
      }

      return { course_id: chapter.course_id };
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [CHAPTERS_QUERY_KEY, data.course_id],
      });
      queryClient.invalidateQueries({ queryKey: ["courses", data.course_id] });
    },
  });
};
