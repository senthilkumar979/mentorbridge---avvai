"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-[#d53f8c]/20 to-[#b83280]/20 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#d53f8c]/30 to-[#b83280]/30 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#d53f8c]/40 to-[#b83280]/40 rounded-full animate-pulse animation-delay-2000"></div>
            </div>

            {/* Main 404 text */}
            <div className="relative z-10">
              <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-[#d53f8c] to-[#b83280] bg-clip-text text-transparent">
                404
              </h1>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the
            digital wilderness. Don&apos;t worry, we&apos;ll help you find your
            way back!
          </p>
        </div>

        {/* Helpful Suggestions */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Here are some things you can try:
          </h2>
          <div className="space-y-3 text-left max-w-md mx-auto">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#d53f8c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-sm text-gray-600">
                Check the URL for typos
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#d53f8c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-sm text-gray-600">
                Go back to the previous page
              </span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#d53f8c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-sm text-gray-600">Visit our homepage</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center bg-gray-100 text-gray-700 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">
            Or explore these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#products"
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/80 transition-all duration-300"
            >
              Products
            </Link>
            <Link
              href="/mentors"
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/80 transition-all duration-300"
            >
              Mentors
            </Link>
            <Link
              href="/students"
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/80 transition-all duration-300"
            >
              Students
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 text-sm font-medium rounded-lg border border-white/20 hover:bg-white/80 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Illustration */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-full p-4 border border-white/20">
            <div className="text-4xl">🔍</div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Lost in the digital maze?
          </p>
        </div>
      </div>
    </div>
  );
}
