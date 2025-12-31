"use client";

import {
  useEvents,
  useCreateEvent,
  useUpdateEvent,
  useDeleteEvent,
  useToggleEventActive,
} from "@/hooks/useEvents";
import { Event, CreateEventData, UpdateEventData } from "@/types/event.types";
import { Plus, Edit, Trash2, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function EventManagementPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditingEvent, setIsEditingEvent] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: events,
    isLoading: eventsLoading,
    error: eventsError,
  } = useEvents();

  const createEventMutation = useCreateEvent();
  const updateEventMutation = useUpdateEvent();
  const deleteEventMutation = useDeleteEvent();
  const toggleEventActiveMutation = useToggleEventActive();

  const [newEvent, setNewEvent] = useState<CreateEventData>({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    registrationLink: "",
    imageUrl: null,
    isActive: true,
  });

  const [editEvent, setEditEvent] = useState<CreateEventData>({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    registrationLink: "",
    imageUrl: null,
    isActive: true,
  });

  // Filter events based on search
  const filteredEvents =
    events?.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    }) || [];

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !newEvent.title.trim() ||
      !newEvent.description.trim() ||
      !newEvent.date.trim() ||
      !newEvent.time.trim() ||
      !newEvent.location.trim() ||
      !newEvent.registrationLink.trim()
    )
      return;

    try {
      await createEventMutation.mutateAsync(newEvent);
      setNewEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        registrationLink: "",
        imageUrl: null,
        isActive: true,
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to create event:", error);
    }
  };

  const handleEditEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedEvent ||
      !editEvent.title.trim() ||
      !editEvent.description.trim() ||
      !editEvent.date.trim() ||
      !editEvent.time.trim() ||
      !editEvent.location.trim() ||
      !editEvent.registrationLink.trim()
    )
      return;

    try {
      await updateEventMutation.mutateAsync({
        eventId: selectedEvent.id,
        eventData: {
          title: editEvent.title,
          description: editEvent.description,
          date: editEvent.date,
          time: editEvent.time,
          location: editEvent.location,
          registrationLink: editEvent.registrationLink,
          imageUrl: editEvent.imageUrl,
          isActive: editEvent.isActive,
        },
      });
      setIsModalOpen(false);
      setIsEditingEvent(false);
      setSelectedEvent(null);
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  };

  const handleDeleteEvent = (event: Event) => {
    setEventToDelete(event);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteEvent = async () => {
    if (!eventToDelete) return;

    try {
      await deleteEventMutation.mutateAsync(eventToDelete.id);
      if (selectedEvent?.id === eventToDelete.id) {
        setSelectedEvent(null);
      }
      setIsDeleteModalOpen(false);
      setEventToDelete(null);
    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  const handleEditClick = (event: Event) => {
    setSelectedEvent(event);
    setEditEvent({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      registrationLink: event.registrationLink,
      imageUrl: event.imageUrl,
      isActive: event.isActive,
    });
    setIsEditingEvent(true);
    setIsModalOpen(true);
  };

  const handleToggleActive = async (event: Event) => {
    try {
      await toggleEventActiveMutation.mutateAsync({
        eventId: event.id,
        isActive: !event.isActive,
      });
    } catch (error) {
      console.error("Failed to toggle event status:", error);
    }
  };

  if (eventsLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (eventsError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg mb-4">Error loading events</div>
          <p className="text-gray-600">
            {eventsError instanceof Error
              ? eventsError.message
              : "Unknown error"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Event Management
              </h1>
              <p className="text-gray-600">
                Manage your events and registrations
              </p>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsEditingEvent(false);
                setSelectedEvent(null);
              }}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              New Event
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Events Table */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? "No events found" : "No events yet"}
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm
                ? "Try adjusting your search criteria."
                : "Create your first event to get started."}
            </p>
            {!searchTerm && (
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsEditingEvent(false);
                  setSelectedEvent(null);
                }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={20} />
                Create Event
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {event.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-1">
                          {event.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{event.date}</div>
                        <div className="text-sm text-gray-500">{event.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {event.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleActive(event)}
                          disabled={toggleEventActiveMutation.isPending}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            event.isActive
                              ? "bg-blue-600"
                              : "bg-gray-300"
                          } ${toggleEventActiveMutation.isPending ? "opacity-50" : ""}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              event.isActive ? "translate-x-6" : "translate-x-1"
                            }`}
                          />
                        </button>
                        <span className="ml-2 text-sm text-gray-600">
                          {event.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(event)}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="Edit event"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete event"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Event Modal */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsEditingEvent(false);
          setSelectedEvent(null);
        }}
        title={isEditingEvent ? "Edit Event" : "Create New Event"}
        eventData={isEditingEvent ? editEvent : newEvent}
        setEventData={isEditingEvent ? setEditEvent : setNewEvent}
        onSubmit={isEditingEvent ? handleEditEvent : handleCreateEvent}
        isSubmitting={
          isEditingEvent
            ? updateEventMutation.isPending
            : createEventMutation.isPending
        }
        isEditing={isEditingEvent}
      />

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setEventToDelete(null);
        }}
        onConfirm={confirmDeleteEvent}
        event={eventToDelete}
        isLoading={deleteEventMutation.isPending}
      />
    </div>
  );
}

// Event Modal Component
interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  eventData: CreateEventData;
  setEventData: React.Dispatch<React.SetStateAction<CreateEventData>>;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  isEditing: boolean;
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  title,
  eventData,
  setEventData,
  onSubmit,
  isSubmitting,
  isEditing,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
          <form onSubmit={onSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Title *
              </label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) =>
                  setEventData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter event title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={eventData.description}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Enter event description"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="text"
                  value={eventData.date}
                  onChange={(e) =>
                    setEventData((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., September 20, 2025"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time *
                </label>
                <input
                  type="text"
                  value={eventData.time}
                  onChange={(e) =>
                    setEventData((prev) => ({ ...prev, time: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 11:00 AM - 1:00 PM"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={eventData.location}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter event location"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Link *
              </label>
              <input
                type="url"
                value={eventData.registrationLink}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    registrationLink: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/register"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={eventData.imageUrl || ""}
                onChange={(e) =>
                  setEventData((prev) => ({
                    ...prev,
                    imageUrl: e.target.value || null,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.png"
              />
            </div>
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={eventData.isActive}
                  onChange={(e) =>
                    setEventData((prev) => ({
                      ...prev,
                      isActive: e.target.checked,
                    }))
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Active
                </span>
              </label>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting
                  ? isEditing
                    ? "Updating..."
                    : "Creating..."
                  : isEditing
                  ? "Update Event"
                  : "Create Event"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal Component
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  event: Event | null;
  isLoading: boolean;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  event,
  isLoading,
}) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Delete Event
                </h3>
                <p className="text-sm text-gray-500">
                  This action cannot be undone
                </p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">
                Are you sure you want to delete{" "}
                <strong>&ldquo;{event.title}&rdquo;</strong>?
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onConfirm}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
              >
                {isLoading ? "Deleting..." : "Delete Event"}
              </button>
              <button
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

