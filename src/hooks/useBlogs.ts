import { supabase } from "@/lib/supabase";
import { Blog, PaginationInfo, UseBlogsOptions } from "@/types/blog.types";
import { useCallback, useEffect, useState } from "react";

export const useBlogs = (options: UseBlogsOptions = {}) => {
  const { authorFilter, pageSize = 30 } = options;
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 0,
    totalCount: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const fetchBlogs = useCallback(
    async (page: number = 1) => {
      try {
        setIsLoading(true);
        setError(null);

        const from = (page - 1) * pageSize;
        const to = from + pageSize - 1;

        // First, get the total count for pagination
        let countQuery = supabase
          .from("blogs")
          .select("*", { count: "exact", head: true });

        if (authorFilter && authorFilter !== "all") {
          countQuery = countQuery.eq("author_name", authorFilter);
        }

        const { count } = await countQuery;

        // Then fetch the actual data
        let dataQuery = supabase
          .from("blogs")
          .select("*")
          .order("published_date", { ascending: false })
          .range(from, to);

        if (authorFilter && authorFilter !== "all") {
          dataQuery = dataQuery.eq("author_name", authorFilter);
        }

        const { data, error } = await dataQuery;

        if (error) {
          throw error;
        }

        const totalCount = count || 0;
        const totalPages = Math.ceil(totalCount / pageSize);

        setBlogs(data || []);
        setPagination({
          currentPage: page,
          totalPages,
          totalCount,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        });
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch blogs");
      } finally {
        setIsLoading(false);
      }
    },
    [authorFilter, pageSize]
  );

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= pagination.totalPages) {
        fetchBlogs(page);
      }
    },
    [fetchBlogs, pagination.totalPages]
  );

  const nextPage = useCallback(() => {
    if (pagination.hasNextPage) {
      goToPage(pagination.currentPage + 1);
    }
  }, [goToPage, pagination.hasNextPage, pagination.currentPage]);

  const previousPage = useCallback(() => {
    if (pagination.hasPreviousPage) {
      goToPage(pagination.currentPage - 1);
    }
  }, [goToPage, pagination.hasPreviousPage, pagination.currentPage]);

  const refetch = useCallback(() => {
    fetchBlogs(pagination.currentPage);
  }, [fetchBlogs, pagination.currentPage]);

  // Reset to page 1 when author filter changes
  useEffect(() => {
    fetchBlogs(1);
  }, [authorFilter, fetchBlogs]);

  return {
    blogs,
    isLoading,
    error,
    pagination,
    goToPage,
    nextPage,
    previousPage,
    refetch,
  };
};
