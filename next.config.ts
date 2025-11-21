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
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "medium.com",
      },
      {
        protocol: "https",
        hostname: "*.medium.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
