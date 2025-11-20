import { placedStudents } from "@/app/data/placedStudents";
import { SectionProps } from "@/types";
import Image from "next/image";
import React from "react";
import { PartnerCompaniesList } from "./PartnerCompaniesList";
import HallOfFameSection from "./HallOfFameSection";

export const AchievementsSection: React.FC<SectionProps> = ({
  className = "",
  id = "achievements",
}) => {
  return (
    <section id={id} className={`py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Our Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our success is measured by the achievements of our students and the
            trust of leading companies who recognize the quality of our training
            program.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Partner Companies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leading organizations that trust our graduates and provide
              excellent career opportunities.
            </p>
          </div>
          <div className="w-full h-full">
            <PartnerCompaniesList />
            {/* {partnerCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:bg-gray-100 transition-all duration-300"
              >
                <div className="mb-4">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={48}
                    className="h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {company.name}
                </h3>
              </div>
            ))} */}
          </div>
          <HallOfFameSection />
        </div>

        {/* Student Placements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Successful Placements
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our graduates are making their mark in the industry with
              successful placements across leading companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {placedStudents.map((student, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src={student.avatar}
                      alt={`${student.name}'s avatar`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {student.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">Company:</span>
                      <span className="text-sm font-medium text-gray-900 ml-2">
                        {student.company}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">Joined:</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-200 text-xs font-medium text-gray-700 ml-2">
                        {student.joiningDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-lg text-gray-300">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-lg text-gray-300">Partner Companies</div>
            </div>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 inline-flex items-center"
          >
            Join Our Success Story
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
