"use client";

import { Footer } from "@/components/Footer";
import { useAddBlog } from "@/hooks/useAddBlog";
import Link from "next/link";
import { useState } from "react";

export default function AddBlogPage() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const { addBlog, isLoading, error, clearError } = useAddBlog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setMessage(null);

    if (!url.trim()) {
      setMessage({ type: "error", text: "Please enter a Medium URL" });
      return;
    }

    const result = await addBlog(url.trim());

    if (result.success) {
      setMessage({ type: "success", text: "Blog added successfully!" });
      setUrl("");
    } else {
      setMessage({
        type: "error",
        text: result.message || "Failed to add blog",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#d53f8c] hover:text-[#b83280] transition-colors duration-300"
              >
                MentorBridge
              </Link>
              <span className="text-gray-400 hidden sm:block">|</span>
              <span className="text-gray-600 font-medium">Add Blog</span>
            </div>
            <Link
              href="/"
              className="text-[#d53f8c] hover:text-[#b83280] font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Add Medium Blog
              </h1>
              <p className="text-gray-600">
                Enter a Medium blog URL to add it to our curated collection
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Medium Blog URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://medium.com/@username/article-title"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  disabled={isLoading}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Supports both user profiles (@username) and publication URLs
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Adding Blog...
                  </div>
                ) : (
                  "Add Blog"
                )}
              </button>
            </form>

            {/* Message Display */}
            {message && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {message.type === "success" ? (
                      <svg
                        className="h-5 w-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{message.text}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Display */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <Link
                  href="/blogs"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  View All Blogs
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
