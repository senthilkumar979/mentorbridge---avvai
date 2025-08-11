"use client";

import { SectionProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProductDevelopmentSection: React.FC<SectionProps> = ({
  className = "",
  id = "product-development",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pictures = [
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/1.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/2.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/3.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/4.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/5.png",
  ];

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Product Development Center
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Ideas Transform Into Innovations
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In the founded year 2024, MentorBridge took a significant step
            towards preparing students for the real world by launching Product
            Development Center at SSMIET. This initiative is more than just a
            training program; it&apos;s a community where learners become
            leaders.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Journey at SSMIET
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With the support of the{" "}
                <Link
                  href="https://ssmiet.ac.in/"
                  className="text-primary"
                  target="_blank"
                >
                  <b>SSM Institute of Engineering and Technology (SSMIET)</b>
                </Link>{" "}
                placement team, dedicated faculties, and the visionary
                leadership of the Principal, MentorBridge has trained students
                in cutting-edge technologies—completely free of cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These students have successfully developed enterprise-grade
                applications using modern tools by following Agile methodology.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div>
                <div
                  key={currentIndex}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-110 border-2 border-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src={pictures[currentIndex]}
                    alt={`Product Development ${currentIndex + 1}`}
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-xl p-4 text-white text-center">
            <div className="text-2xl font-bold mb-1">Development Center</div>
            <div className="text-sm opacity-90">Corporate Work Environment</div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white text-center">
            <div className="text-2xl font-bold mb-1">Enterprise Apps</div>
            <div className="text-sm opacity-90">Real-world projects</div>
          </div>
        </div>

        {/* Training Phases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Training Program Phases
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the phases of our training program through this
              interactive carousel.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Visit Our Product Development Center
          </h3>
          <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Visit our Product Development Center where learners become leaders,
            and ideas transform into innovations. Witness the power of
            collaboration and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#d53f8c] font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Visit us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
