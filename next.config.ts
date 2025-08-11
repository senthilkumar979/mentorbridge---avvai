import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Suppress hydration warnings in development
  reactStrictMode: true,

  // Optimize for better hydration
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },

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
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "91qunajyvl11yxyb.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "www.mentorbridge.in",
      },
    ],
  },
};

export default nextConfig;
