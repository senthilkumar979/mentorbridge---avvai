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
