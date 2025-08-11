import React from "react";
import Image from "next/image";
import { BaseComponentProps } from "@/types";

export const Footer: React.FC<BaseComponentProps> = ({ className = "" }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/mentor-bridge-india/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:bg-blue-600",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/mentorbridgein",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "hover:bg-black",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@mentor-bridge-india",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className={`bg-gray-900 text-white py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright and Logo */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image
              src="https://91qunajyvl11yxyb.public.blob.vercel-storage.com/logo"
              alt="MentorBridge"
              width={150}
              height={50}
              className="h-12 w-auto mr-3"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2025 MentorBridge. All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm font-medium">
              Follow us:
            </span>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Empowering rural students through free mentorship and training
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="/terms-conditions"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
