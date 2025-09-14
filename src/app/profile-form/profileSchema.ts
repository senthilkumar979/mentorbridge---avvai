import { z } from "zod";

export const profileSchema = z.object({
  id: z.string().min(1, "ID is required"),
  name: z.string().min(1, "Name is required"),
  picture: z.string().optional(), // Will be set after file upload
  pictureFile: z.any().optional(), // File input
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
  resumeFile: z.any().optional(), // File input
  batch: z.string().min(1, "Batch is required"),
});
