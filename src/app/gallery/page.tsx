"use client";

import { Gallery } from "@/components/Gallery";
import { useGetPics } from "@/hooks/useGetPics";
import Link from "next/link";
import { Footer } from "../../components";

export default function GalleryPage() {
  const { images, isLoading, error, refetch, loadingProgress } = useGetPics({
    // folders will use the default from constants
    maxResults: 50,
    transformation: "f_auto,q_auto",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
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
              <span className="text-gray-600 font-medium">Gallery</span>
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
      <div className="bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
              Gallery
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our development center, student achievements, and the
              vibrant learning environment that shapes tomorrow&apos;s
              innovators.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d53f8c] mx-auto mb-4"></div>
              <p className="text-lg text-slate-600 mb-2">
                Loading gallery images...
              </p>
              {loadingProgress.currentFolder && (
                <div className="space-y-2">
                  {/* <p className="text-sm text-slate-500">
                    Loading from:{" "}
                    <span className="font-medium">
                      {loadingProgress.currentFolder}
                    </span>
                  </p> */}
                  <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
                    <div
                      className="bg-[#d53f8c] h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (loadingProgress.completedFolders.length /
                            loadingProgress.totalFolders) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  {/* <p className="text-xs text-slate-400">
                    {loadingProgress.completedFolders.length} of{" "}
                    {loadingProgress.totalFolders} folders loaded
                  </p> */}
                  {/* {loadingProgress.completedFolders.length > 0 && (
                    <p className="text-xs text-slate-400">
                      Completed: {loadingProgress.completedFolders.join(", ")}
                    </p>
                  )} */}
                </div>
              )}
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md">
                <div className="text-red-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Failed to Load Images
                </h3>
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={refetch}
                  className="bg-[#d53f8c] hover:bg-[#b83280] text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        ) : images.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="text-slate-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                No Images Found
              </h3>
              <p className="text-slate-500 mb-4">
                No images were found in the gallery folder.
              </p>
              <button
                onClick={refetch}
                className="bg-[#d53f8c] hover:bg-[#b83280] text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Refresh
              </button>
            </div>
          </div>
        ) : (
          <Gallery images={images} />
        )}
      </div>
      <Footer />
    </div>
  );
}
