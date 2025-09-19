import { EVENT_CONFIG } from "@/constants/eventConfig";
import { useEffect, useState } from "react";

interface EventData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink: string;
  imageUrl?: string;
  isActive: boolean;
}

export const useEventPopup = () => {
  const [eventData, setEventData] = useState<EventData>(EVENT_CONFIG);
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  useEffect(() => {
    const isEventActive = eventData.isActive;

    if (isEventActive) {
      setShouldShowPopup(true);
    }
  }, [eventData.isActive]);

  const dismissPopup = () => {
    setShouldShowPopup(false);
    localStorage.setItem("event-popup-dismissed", "true");
  };

  const updateEventData = (newEventData: Partial<EventData>) => {
    setEventData((prev) => ({ ...prev, ...newEventData }));
  };

  return {
    eventData,
    shouldShowPopup,
    dismissPopup,
    updateEventData,
  };
};
