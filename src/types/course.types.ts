export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  chapters?: Chapter[];
}

export interface Chapter {
  id: string;
  course_id: string;
  title: string;
  content: string;
  order: number; // This maps to the "order" column in the database
  created_at: string;
  updated_at: string;
}

export interface CreateCourseData {
  title: string;
  description: string;
  category: string;
  created_by: string;
}

export interface UpdateCourseData {
  title?: string;
  description?: string;
  category?: string;
}

export interface CreateChapterData {
  course_id: string;
  title: string;
  content: string;
  order: number;
}

export interface UpdateChapterData {
  title?: string;
  content?: string;
  order?: number;
}

export interface CourseProgress {
  [courseId: string]: string[]; // Array of completed chapter IDs
}

export interface CourseWithProgress extends Course {
  progress?: CourseProgress;
  completedChapters?: number;
  totalChapters?: number;
}
