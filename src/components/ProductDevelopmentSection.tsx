import React from "react";
import { SectionProps } from "@/types";

export const ProductDevelopmentSection: React.FC<SectionProps> = ({
  className = "",
  id = "product-development",
}) => {
  const phases = [
    {
      title: "Technical Training",
      description:
        "Comprehensive hands-on training in modern technologies and development practices.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      highlights: [
        "Full-stack development (React, Node.js, Spring Boot)",
        "Cloud computing and DevOps practices",
        "Database design and management",
        "API development and integration",
        "Version control and collaboration",
        "Testing methodologies and quality assurance",
      ],
      color: "from-blue-500 to-cyan-500",
      duration: "4 Months",
    },
    {
      title: "Product Development",
      description:
        "Real-world project development using Agile methodology and industry best practices.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      highlights: [
        "Agile methodology implementation",
        "Team collaboration and project management",
        "Enterprise-grade application development",
        "Code review and quality assurance",
        "Deployment and DevOps practices",
        "Product lifecycle management",
      ],
      color: "from-green-500 to-emerald-500",
      duration: "4 Months",
    },
    {
      title: "Job Preparation",
      description:
        "Comprehensive preparation for securing job opportunities in the IT industry.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
      highlights: [
        "Resume building and optimization",
        "Mock interview preparation",
        "LinkedIn profile enhancement",
        "Job search strategies",
        "Salary negotiation skills",
        "Professional networking",
      ],
      color: "from-purple-500 to-pink-500",
      duration: "2 Months",
    },
  ];

  const achievements = [
    {
      number: "100+",
      label: "Students Trained",
      description: "Completely free of cost",
      icon: "👥",
    },
    {
      number: "3",
      label: "Enterprise Applications",
      description: "Developed using modern tools",
      icon: "💻",
    },
    {
      number: "10+",
      label: "Months Training",
      description: "Intensive daily sessions",
      icon: "📚",
    },
    {
      number: "100%",
      label: "Agile Methodology",
      description: "Industry-standard practices",
      icon: "⚡",
    },
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
                With the support of the SSM Institute of Engineering and
                Technology (SSMIET) placement team, dedicated faculties, and the
                visionary leadership of the Principal, MentorBridge has trained
                32 students in cutting-edge technologies—completely free of
                cost.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These 32 students have successfully developed enterprise-grade
                applications using modern tools by following Agile methodology.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold mb-1">Free Training</div>
                <div className="text-sm opacity-90">No cost to students</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white text-center">
                <div className="text-2xl font-bold mb-1">Enterprise Apps</div>
                <div className="text-sm opacity-90">Real-world projects</div>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-[#d53f8c] mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Phases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Training Program Phases
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive training program was divided into 3 phases, each
              designed to build upon the previous one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                {/* Phase Number */}
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{phase.icon}</div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                      {phase.title}
                    </h4>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                      {phase.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-bold mb-4 text-gray-600 leading-relaxed group-hover:text-[#d53f8c] transition-colors duration-300">
                  {phase.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {phase.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
