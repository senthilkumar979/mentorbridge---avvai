"use client";

import { Gallery } from "@/components/Gallery";
import Link from "next/link";
import { Footer } from "../../components";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  alt: string;
}

export default function GalleryPage() {
  const galleryImages: GalleryImage[] = [
    {
      id: "1",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/1.png",
      title: "Product Development Center",
      alt: "Students working in the development center",
    },
    {
      id: "2",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/2.png",
      title: "Team Collaboration",
      alt: "Students collaborating on projects",
    },
    {
      id: "3",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/3.png",
      title: "Modern Workspace",
      alt: "State-of-the-art development environment",
    },
    {
      id: "4",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/4.png",
      title: "Learning Environment",
      alt: "Students engaged in hands-on learning",
    },
    {
      id: "5",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/5.png",
      title: "Innovation Hub",
      alt: "Creative space for student projects",
    },
    {
      id: "6",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/1.png",
      title: "MentorBridge Training",
      alt: "Professional development training session",
    },
    {
      id: "7",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/2.png",
      title: "Student Success Stories",
      alt: "Celebrating student achievements",
    },
    {
      id: "8",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/3.png",
      title: "Industry Partnerships",
      alt: "Collaboration with industry leaders",
    },
    {
      id: "9",
      src: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/4.png",
      title: "Technology Focus",
      alt: "Cutting-edge technology implementation",
    },
  ];

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
        <Gallery images={galleryImages} />
      </div>
      <Footer />
    </div>
  );
}
