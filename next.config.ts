import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frigate.ai",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "klyonix.com",
      },
      {
        protocol: "https",
        hostname: "wfkq0nguanh0273r.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
