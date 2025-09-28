export const COURSE_CATEGORIES = [
  "Programming",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Database Management",
  "UI/UX Design",
  "Project Management",
  "Soft Skills",
  "Interview Preparation",
  "Finance",
  "General",
] as const;

export type CourseCategory = (typeof COURSE_CATEGORIES)[number];

export const getCategoryColor = (category: CourseCategory): string => {
  const colors: Record<CourseCategory, string> = {
    Programming: "bg-blue-100 text-blue-800",
    "Web Development": "bg-green-100 text-green-800",
    "Mobile Development": "bg-purple-100 text-purple-800",
    "Data Science": "bg-orange-100 text-orange-800",
    "Machine Learning": "bg-pink-100 text-pink-800",
    "Artificial Intelligence": "bg-indigo-100 text-indigo-800",
    "Cloud Computing": "bg-cyan-100 text-cyan-800",
    DevOps: "bg-yellow-100 text-yellow-800",
    Cybersecurity: "bg-red-100 text-red-800",
    "Database Management": "bg-teal-100 text-teal-800",
    "UI/UX Design": "bg-rose-100 text-rose-800",
    "Project Management": "bg-amber-100 text-amber-800",
    "Soft Skills": "bg-emerald-100 text-emerald-800",
    "Interview Preparation": "bg-violet-100 text-violet-800",
    Finance: "bg-lime-100 text-lime-800",
    General: "bg-gray-100 text-gray-800",
  };

  return colors[category] || colors.General;
};
