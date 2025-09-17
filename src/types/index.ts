// Re-export all types from domain-specific files
export * from "./gallery.types";
export * from "./pagination.types";
export * from "./student.types";
export * from "./blog.types";

// Common component types
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
