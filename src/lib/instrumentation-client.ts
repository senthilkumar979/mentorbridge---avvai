// instrumentation-client.js
import posthog from "posthog-js";
import clarity from "@microsoft/clarity";

// Initialize PostHog
if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2025-05-24",
  });
}

// Initialize Microsoft Clarity
const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "yourProjectId";

if (projectId && projectId !== "yourProjectId") {
  clarity.init(projectId);
}
