# Event Popup Component

This component displays a popup with event information when users visit the website. The popup appears on page load and can be dismissed by the user.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dismissible**: Users can close the popup and it won't show again (stored in localStorage)
- **Registration Link**: Direct link to event registration
- **Event Details**: Shows date, time, location, and description
- **Configurable**: Easy to update event information

## Configuration

To update event details, edit the `src/constants/eventConfig.ts` file:

```typescript
export const EVENT_CONFIG = {
  title: "Your Event Title",
  description: "Event description...",
  date: "March 15, 2024",
  time: "9:00 AM - 5:00 PM",
  location: "Event Location",
  registrationLink: "https://your-registration-link.com",
  imageUrl: "https://your-image-url.com/image.jpg", // Optional
  isActive: true, // Set to false to disable the popup
} as const;
```

## How it Works

1. **EventPopupProvider**: Client-side component that manages popup state
2. **useEventPopup**: Custom hook that handles event data and popup logic
3. **EventPopup**: The actual popup component with UI
4. **localStorage**: Remembers if user dismissed the popup

## Usage

The popup is automatically included in the main layout (`src/app/layout.tsx`) and will appear on all pages when:

- The event is active (`isActive: true`)
- The user hasn't previously dismissed the popup
- The page loads (with a 1-second delay for better UX)

## Customization

### Styling

The popup uses Tailwind CSS classes. You can customize the appearance by modifying the classes in `src/components/EventPopup.tsx`.

### Behavior

- Change the delay before showing the popup in `EventPopup.tsx` (currently 1000ms)
- Modify the localStorage key in `useEventPopup.ts` if needed
- Add additional event details by extending the `EventData` interface

### Disabling the Popup

Set `isActive: false` in `eventConfig.ts` to disable the popup without removing the code.

## Files Created/Modified

- `src/components/EventPopup.tsx` - Main popup component
- `src/components/EventPopupProvider.tsx` - Provider wrapper
- `src/hooks/useEventPopup.ts` - Custom hook for popup logic
- `src/constants/eventConfig.ts` - Event configuration
- `src/components/index.ts` - Export declarations
- `src/app/layout.tsx` - Integration into main layout
