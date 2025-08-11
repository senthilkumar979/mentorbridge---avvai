import { partnerCompanies } from "@/app/data/partnerCompanies";
import { placedStudents } from "@/app/data/placedStudents";
import { SectionProps } from "@/types";
import Image from "next/image";
import React from "react";

export const AchievementsSection: React.FC<SectionProps> = ({
  className = "",
  id = "achievements",
}) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 bg-gradient-to-br from-white to-gray-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Our Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Have Done So Far
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our journey has been marked by significant milestones, with 100+
            students trained and we&apos;re proud to collaborate with leading
            companies that trust our trained students and provide them with
            excellent career opportunities.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={48}
                    className="h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Student Placements */}
        <div className="mb-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Student Placements
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our students are already working in partner companies. Here are
              some of our successful placements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {placedStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 overflow-hidden transition-transform duration-300">
                    <Image
                      src={student.avatar}
                      alt={`${student.name}'s avatar`}
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                    {student.name}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        Company:
                      </span>
                      <span className="text-sm font-bold text-[#d53f8c] ml-2">
                        {student.company}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        Joined:
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-bold text-gray-900 ml-2">
                        {student.joiningDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
