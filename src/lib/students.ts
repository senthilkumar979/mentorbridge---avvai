import { supabase } from "./supabase";
import { ProfileData } from "../types/Profile.types";

export interface StudentRecord {
  id: string;
  name: string;
  picture: string | null;
  role: string;
  company: string | null;
  summary: string;
  email: string;
  experience: unknown[];
  mentor_bridge_exp: unknown;
  skill_sets: string[];
  inspirations: string[];
  social_links: unknown;
  resume_link: string | null;
  batch: string;
  created_at?: string;
  updated_at?: string;
}

export const saveStudentProfile = async (
  profileData: ProfileData
): Promise<StudentRecord> => {
  try {
    const studentRecord: Omit<StudentRecord, "created_at" | "updated_at"> = {
      id: profileData.id,
      name: profileData.name,
      picture: profileData.picture || null,
      role: profileData.role,
      company: profileData.company || null,
      summary: profileData.summary,
      email: profileData.email,
      experience: profileData.experience,
      mentor_bridge_exp: profileData.mentorBridgeExp,
      skill_sets: profileData.skillSets,
      inspirations: profileData.inspirations,
      social_links: profileData.socialLinks,
      resume_link: profileData.resumeLink || null,
      batch: profileData.batch,
    };

    const { data, error } = await supabase
      .from("students")
      .insert([studentRecord])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to save student profile: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error saving student profile:", error);
    throw error;
  }
};

export const getStudentProfile = async (
  id: string
): Promise<StudentRecord | null> => {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null; // No rows found
      }
      throw new Error(`Failed to get student profile: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error getting student profile:", error);
    throw error;
  }
};

export const getAllStudents = async (): Promise<StudentRecord[]> => {
  try {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to get students: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error("Error getting students:", error);
    throw error;
  }
};
