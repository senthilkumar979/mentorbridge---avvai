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

  const pictures = [
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/1.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/2.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/3.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/4.png",
    "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pictures.length]);

  return (
    <section id={id} className={`py-20 sm:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Development Center
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Where Innovation Meets Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Product Development Center at SSMIET represents the convergence
            of academic excellence and industry practice, where students
            transform theoretical knowledge into real-world solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Partnership with SSMIET
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in 2024, our collaboration with{" "}
                <Link
                  href="https://ssmiet.ac.in/"
                  className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-300"
                  target="_blank"
                >
                  SSM Institute of Engineering and Technology (SSMIET)
                </Link>{" "}
                has created a unique ecosystem where students receive
                comprehensive training in modern technologies at no cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through this partnership, students develop enterprise-grade
                applications using industry-standard tools and Agile
                methodologies, preparing them for immediate professional impact.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div>
                <div
                  key={currentIndex}
                  className="transition-transform duration-500 ease-in-out transform hover:scale-105 border border-gray-200 rounded-2xl overflow-hidden shadow-lg"
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

        {/* Key Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Corporate Environment
            </h3>
            <p className="text-gray-600">
              Professional workspace that mirrors industry standards
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Enterprise Applications
            </h3>
            <p className="text-gray-600">
              Real-world projects with practical business impact
            </p>
          </div>
        </div>

        {/* Training Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Training Program
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures students develop both technical
              expertise and professional competencies through hands-on project
              experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience Our Development Center
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our Product Development Center to witness how we transform
            students into industry-ready professionals through practical
            learning.
          </p>
          <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 inline-flex items-center">
            Schedule a Visit
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
