export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink: string;
  imageUrl: string | null;
  isActive: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateEventData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink: string;
  imageUrl: string | null;
  isActive: boolean;
}

export interface UpdateEventData {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  location?: string;
  registrationLink?: string;
  imageUrl?: string | null;
  isActive?: boolean;
}

