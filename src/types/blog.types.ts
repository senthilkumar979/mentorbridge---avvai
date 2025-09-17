/**
 * Blog related types
 */

export interface Blog {
  id: string;
  title: string;
  author_name: string;
  published_date: string;
  cover_image_url?: string;
  link: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface BlogCardProps {
  blog: Blog;
}

export interface AddBlogRequest {
  url: string;
}

export interface AddBlogResponse {
  success: boolean;
  message: string;
  data?: Blog;
  error?: string;
}

export interface AddAllBlogsResponseData {
  added: number;
  skipped: number;
  errors: string[];
  total: number;
}

export interface AddAllBlogsResponse {
  success: boolean;
  message: string;
  data: AddAllBlogsResponseData;
}

export interface UseBlogsOptions {
  authorFilter?: string;
  pageSize?: number;
}

export interface UseBlogsReturn {
  blogs: Blog[];
  isLoading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  refetch: () => void;
}
