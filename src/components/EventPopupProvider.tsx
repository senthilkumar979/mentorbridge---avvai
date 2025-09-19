"use client";

import { EventPopup } from "./EventPopup";
import { useEventPopup } from "@/hooks/useEventPopup";

export const EventPopupProvider = () => {
  const { eventData, shouldShowPopup, dismissPopup } = useEventPopup();

  if (!shouldShowPopup) return null;

  return <EventPopup event={eventData} onDismiss={dismissPopup} />;
};
