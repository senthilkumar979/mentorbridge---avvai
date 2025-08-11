interface Experience {
  company: string;
  role: string;
  summary: string;
  website?: string;
}

interface MentorBridgeExp {
  company: string;
  role: string;
  summary: string;
  website?: string;
}

interface SocialLinks {
  linkedIn: string;
  gitHub: string;
  website?: string;
}

export interface ProfileData {
  id: string;
  name: string;
  picture: string;
  role: string;
  company?: string;
  summary: string;
  email: string;
  experience: Experience[];
  mentorBridgeExp: MentorBridgeExp;
  skillSets: string[];
  inspirations: string[];
  socialLinks: SocialLinks;
  resumeLink?: string;
  batch: string;
}
