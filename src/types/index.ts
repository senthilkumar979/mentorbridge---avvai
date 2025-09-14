export interface BaseComponentProps {
  className?: string;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface StatCardProps extends BaseComponentProps {
  value: string | number;
  label: string;
  description?: string;
}

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
