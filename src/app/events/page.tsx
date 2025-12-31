"use client";

import { Footer, SubPageHeader } from "@/components";
import { useActiveEvents } from "@/hooks/useEvents";
import { Event } from "@/types/event.types";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  const { data: events, isLoading, error } = useActiveEvents();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SubPageHeader title="Events" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-300 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SubPageHeader title="Events" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-red-600 text-lg mb-4">Error loading events</div>
            <p className="text-gray-600">
              {error instanceof Error ? error.message : "Unknown error"}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const now = new Date();
  const upcomingEvents: Event[] = [];
  const recentEvents: Event[] = [];

  events?.forEach((event) => {
    // Parse event date (assuming format like "September 20, 2025")
    const eventDate = new Date(event.date);
    if (eventDate >= now) {
      upcomingEvents.push(event);
    } else {
      recentEvents.push(event);
    }
  });

  // Sort upcoming events by date (ascending)
  upcomingEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Sort recent events by date (descending)
  recentEvents.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SubPageHeader title="Events" />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Events
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-delay">
              Join us for exciting webinars, workshops, and networking
              opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Events Section */}
      {recentEvents.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Recent Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {(!events || events.length === 0) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No events available
              </h3>
              <p className="text-gray-600">
                Check back soon for upcoming events and workshops.
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow overflow-hidden">
      {event.imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} className="text-gray-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} className="text-gray-400" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-gray-400" />
            <span>{event.location}</span>
          </div>
        </div>
        <Link
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>Register Now</span>
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
};

