import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Blog } from "@/types";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("published_date", { ascending: false });

      if (error) {
        throw error;
      }

      setBlogs(data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    isLoading,
    error,
    refetch: fetchBlogs,
  };
};
