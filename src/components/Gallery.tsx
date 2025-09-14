"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
  showTitle?: boolean;
  gridCols?: "1" | "2" | "3" | "4" | "5" | "6";
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  className = "",
  showTitle = true,
  gridCols = "4",
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image: GalleryImage) => {
    const index = images.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
    setImageLoading(true);
    setSelectedImage(image);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setImageLoading(false);
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setImageLoading(true);
    setSelectedImage(images[nextIndex]);
  }, [currentIndex, images]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setImageLoading(true);
    setSelectedImage(images[prevIndex]);
  }, [currentIndex, images]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "Escape") {
      closeModal();
    }
  }, [goToNext, goToPrevious, closeModal]);

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage, handleKeyDown]);

  const gridColsClass = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    "5": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    "6": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  return (
    <>
      <div className={`grid ${gridColsClass[gridCols]} gap-6 ${className}`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openModal(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            {showTitle && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg group-hover:text-xl transition-all duration-300">
                  {image.title}
                </h3>
              </div>
            )}

            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <svg
                  className="w-8 h-8 text-slate-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Container */}
            <div
              className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative flex-1 min-h-0 bg-gray-900 rounded-lg overflow-hidden">
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-xl">Loading...</div>
                  </div>
                )}
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  onError={() => {
                    console.error("Image failed to load:", selectedImage.src);
                    setImageLoading(false);
                  }}
                  onLoad={() => {
                    console.log(
                      "Image loaded successfully:",
                      selectedImage.src
                    );
                    setImageLoading(false);
                  }}
                />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white/80 text-sm font-medium">
                    {currentIndex + 1} of {images.length}
                  </div>
                  {images.length > 1 && (
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevious();
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNext();
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-200">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
