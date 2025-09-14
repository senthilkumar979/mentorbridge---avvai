import React from "react";
import { SectionProps } from "@/types";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export const WhatWeDoSection: React.FC<SectionProps> = ({
  className = "",
  id = "what-we-do",
}) => {
  const services: Service[] = [
    {
      id: "technical-development",
      title: "Technical Development",
      description:
        "Comprehensive technical training in modern technologies, frameworks, and industry-standard development practices.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "Modern JavaScript & TypeScript",
        "React, Node.js & Full-Stack Development",
        "Cloud Computing & DevOps",
        "Database Design & Management",
      ],
    },
    {
      id: "professional-skills",
      title: "Professional Skills",
      description:
        "Essential workplace competencies including project management, team collaboration, and agile methodologies.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      features: [
        "Agile & Scrum Methodologies",
        "Project Management",
        "Code Review & Quality Assurance",
        "Team Leadership & Communication",
      ],
    },
    {
      id: "career-readiness",
      title: "Career Readiness",
      description:
        "Strategic career preparation including portfolio development, interview skills, and industry networking.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
      features: [
        "Portfolio Development",
        "Technical Interview Preparation",
        "Resume & LinkedIn Optimization",
        "Industry Networking",
      ],
    },
    {
      id: "practical-experience",
      title: "Practical Experience",
      description:
        "Real-world project development with enterprise-grade applications and deployment practices.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      features: [
        "Enterprise Application Development",
        "Production Deployment",
        "Performance Optimization",
        "Security Best Practices",
      ],
    },
    {
      id: "mentorship-support",
      title: "Mentorship & Support",
      description:
        "Personalized guidance from industry professionals with continuous learning and development support.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      features: [
        "One-on-One Mentoring",
        "Industry Expert Sessions",
        "Peer Learning Groups",
        "24/7 Community Support",
      ],
    },
    {
      id: "industry-integration",
      title: "Industry Integration",
      description:
        "Direct connections with hiring partners and exposure to real industry challenges and opportunities.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      features: [
        "Company Partnerships",
        "Live Project Opportunities",
        "Guest Expert Sessions",
        "Job Placement Assistance",
      ],
    },
  ];

  return (
    <section id={id} className={`py-20 sm:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Our Approach
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Comprehensive Professional Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end training that transforms students into
            industry-ready professionals through structured learning, practical
            experience, and strategic career development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Professional Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our comprehensive training program and transform your career
            prospects with industry-relevant skills and professional guidance.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-gray-100 inline-flex items-center"
          >
            Apply Now
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
