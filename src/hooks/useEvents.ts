import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import {
  Event,
  CreateEventData,
  UpdateEventData,
} from "@/types/event.types";

const EVENTS_QUERY_KEY = "events";

export const useEvents = () => {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY],
    queryFn: async (): Promise<Event[]> => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch events: ${error.message}`);
      }

      // Transform snake_case to camelCase
      return (
        data?.map((event) => ({
          id: event.id,
          title: event.title,
          description: event.description,
          date: event.date,
          time: event.time,
          location: event.location,
          registrationLink: event.registration_link,
          imageUrl: event.image_url,
          isActive: event.is_active,
          created_at: event.created_at,
          updated_at: event.updated_at,
        })) || []
      );
    },
  });
};

export const useActiveEvents = () => {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY, "active"],
    queryFn: async (): Promise<Event[]> => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch active events: ${error.message}`);
      }

      // Transform snake_case to camelCase
      return (
        data?.map((event) => ({
          id: event.id,
          title: event.title,
          description: event.description,
          date: event.date,
          time: event.time,
          location: event.location,
          registrationLink: event.registration_link,
          imageUrl: event.image_url,
          isActive: event.is_active,
          created_at: event.created_at,
          updated_at: event.updated_at,
        })) || []
      );
    },
  });
};

export const useEvent = (eventId: string) => {
  return useQuery({
    queryKey: [EVENTS_QUERY_KEY, eventId],
    queryFn: async (): Promise<Event | null> => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          return null; // Event not found
        }
        throw new Error(`Failed to fetch event: ${error.message}`);
      }

      if (!data) return null;

      // Transform snake_case to camelCase
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        location: data.location,
        registrationLink: data.registration_link,
        imageUrl: data.image_url,
        isActive: data.is_active,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
    },
    enabled: !!eventId,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (eventData: CreateEventData): Promise<Event> => {
      const { data, error } = await supabase
        .from("events")
        .insert([
          {
            title: eventData.title,
            description: eventData.description,
            date: eventData.date,
            time: eventData.time,
            location: eventData.location,
            registration_link: eventData.registrationLink,
            image_url: eventData.imageUrl,
            is_active: eventData.isActive ?? true,
          },
        ])
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create event: ${error.message}`);
      }

      // Transform snake_case to camelCase
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        location: data.location,
        registrationLink: data.registration_link,
        imageUrl: data.image_url,
        isActive: data.is_active,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      eventData,
    }: {
      eventId: string;
      eventData: UpdateEventData;
    }): Promise<Event> => {
      const updateData: Record<string, unknown> = {};
      if (eventData.title !== undefined) updateData.title = eventData.title;
      if (eventData.description !== undefined)
        updateData.description = eventData.description;
      if (eventData.date !== undefined) updateData.date = eventData.date;
      if (eventData.time !== undefined) updateData.time = eventData.time;
      if (eventData.location !== undefined)
        updateData.location = eventData.location;
      if (eventData.registrationLink !== undefined)
        updateData.registration_link = eventData.registrationLink;
      if (eventData.imageUrl !== undefined)
        updateData.image_url = eventData.imageUrl;
      if (eventData.isActive !== undefined)
        updateData.is_active = eventData.isActive;

      const { data, error } = await supabase
        .from("events")
        .update(updateData)
        .eq("id", eventId)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to update event: ${error.message}`);
      }

      // Transform snake_case to camelCase
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        location: data.location,
        registrationLink: data.registration_link,
        imageUrl: data.image_url,
        isActive: data.is_active,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
    },
    onSuccess: (_, { eventId }) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [EVENTS_QUERY_KEY, eventId],
      });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (eventId: string): Promise<void> => {
      const { error } = await supabase
        .from("events")
        .delete()
        .eq("id", eventId);

      if (error) {
        throw new Error(`Failed to delete event: ${error.message}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
    },
  });
};

export const useToggleEventActive = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      eventId,
      isActive,
    }: {
      eventId: string;
      isActive: boolean;
    }): Promise<Event> => {
      const { data, error } = await supabase
        .from("events")
        .update({ is_active: isActive })
        .eq("id", eventId)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to toggle event status: ${error.message}`);
      }

      // Transform snake_case to camelCase
      return {
        id: data.id,
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
        location: data.location,
        registrationLink: data.registration_link,
        imageUrl: data.image_url,
        isActive: data.is_active,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
    },
    onSuccess: (_, { eventId }) => {
      queryClient.invalidateQueries({ queryKey: [EVENTS_QUERY_KEY] });
      queryClient.invalidateQueries({
        queryKey: [EVENTS_QUERY_KEY, eventId],
      });
    },
  });
};

