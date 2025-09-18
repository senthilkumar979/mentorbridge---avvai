import { z } from "zod";

// File validation schema
const imageFileSchema = z
  .any()
  .refine(
    (file) => !file || (file instanceof File && file.size <= 2 * 1024 * 1024),
    "Image size must be less than 2MB"
  )
  .refine(
    (file) =>
      !file ||
      (file instanceof File &&
        [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/gif",
          "image/webp",
        ].includes(file.type)),
    "Only JPEG, PNG, GIF, and WebP images are allowed"
  )
  .optional();

const documentFileSchema = z
  .any()
  .refine(
    (file) => !file || (file instanceof File && file.size <= 2 * 1024 * 1024),
    "Document size must be less than 2MB"
  )
  .refine(
    (file) =>
      !file ||
      (file instanceof File &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type)),
    "Only PDF, DOC, and DOCX files are allowed"
  )
  .optional();

export const profileSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  picture: z.string().optional(), // Will be set after file upload
  pictureFile: imageFileSchema, // File input with validation
  role: z.string().min(1, "Role is required"),
  company: z.string().optional(),
  summary: z.string().min(1, "Summary is required"),
  email: z.string().email("Please enter a valid email"),
  experience: z
    .array(
      z.object({
        company: z.string().min(1, "Company name is required"),
        role: z.string().min(1, "Role is required"),
        summary: z.string().min(1, "Summary is required"),
        website: z
          .string()
          .url("Please enter a valid URL")
          .optional()
          .or(z.literal("")),
      })
    )
    .min(1, "At least one experience is required"),
  mentorBridgeExp: z.object({
    company: z.string().min(1, "Company name is required"),
    role: z.string().min(1, "Role is required"),
    summary: z.string().min(1, "Summary is required"),
    website: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
  }),
  skillSets: z.array(z.string()).min(1, "At least one skill is required"),
  inspirations: z
    .array(z.string())
    .min(1, "At least one inspiration is required"),
  socialLinks: z.object({
    linkedIn: z.string().url("Please enter a valid LinkedIn URL"),
    gitHub: z.string().url("Please enter a valid GitHub URL"),
    website: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
  }),
  resumeLink: z.string().optional(), // Will be set after file upload
  resumeFile: documentFileSchema, // File input with validation
  batch: z.string().min(1, "Batch is required"),
});
