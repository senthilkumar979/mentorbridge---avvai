"use client";

import { Calendar, Clock, MapPin, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EventPopupProps {
  event: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    registrationLink: string;
    imageUrl?: string;
  };
  onDismiss: () => void;
}

export const EventPopup = ({ event, onDismiss }: EventPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };

  const handleRegister = () => {
    window.open(event.registrationLink, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        {/* Event image */}
        {event.imageUrl && (
          <div className="h-96 w-full overflow-hidden relative">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Event content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {event.title}
          </h2>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left column - Main content */}
            <div className="space-y-4">
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Many <em>students and young professionals</em> are ready to
                  invest but don&apos;t know where to start. That&apos;s why
                  Mentor Bridge is hosting this live webinar:
                </p>

                <p className="font-medium text-blue-800">
                  Stop guessing and start building a smart financial plan.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Event details */}
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-3 text-blue-500" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-3 text-blue-500" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-3 text-blue-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleRegister}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Register for Webinar
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
