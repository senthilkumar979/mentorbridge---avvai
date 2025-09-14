import React from "react";
import { SectionProps } from "@/types";

interface TrainingArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
}

export const KeyFeaturesSection: React.FC<SectionProps> = ({
  className = "",
  id = "key-features",
}) => {
  const trainingAreas: TrainingArea[] = [
    {
      id: "technical-training",
      title: "Technical Excellence",
      description:
        "Master modern technologies and development practices through hands-on project-based learning.",
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
      highlights: [
        "Full-Stack Development (React, Node.js, Spring Boot)",
        "Cloud Computing & DevOps (AWS, Docker, Kubernetes)",
        "Database Management (SQL, NoSQL, Redis)",
        "API Development (REST, GraphQL, Microservices)",
        "Testing & Quality Assurance",
        "Security Best Practices",
      ],
    },
    {
      id: "communication-skills",
      title: "Professional Communication",
      description:
        "Develop exceptional verbal and written communication skills essential for workplace success.",
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      highlights: [
        "Public Speaking & Presentation Skills",
        "Business Communication & Email Etiquette",
        "Team Collaboration & Conflict Resolution",
        "Technical Documentation Writing",
        "Client & Stakeholder Management",
        "Remote Communication Best Practices",
      ],
    },
    {
      id: "professional-etiquette",
      title: "Professional Etiquette",
      description:
        "Learn workplace culture, professional behavior, and corporate etiquette for career advancement.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      highlights: [
        "Corporate Culture & Hierarchy Understanding",
        "Professional Dress Code & Appearance",
        "Meeting Etiquette & Time Management",
        "Interview Skills & Professional Conduct",
        "Networking & Relationship Building",
        "Digital Presence & Online Professionalism",
      ],
    },
    {
      id: "financial-literacy",
      title: "Financial Intelligence",
      description:
        "Build essential financial management skills for personal wealth and professional growth.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      highlights: [
        "Personal Budgeting & Expense Management",
        "Investment Basics & Financial Planning",
        "Salary Negotiation Strategies",
        "Credit Management & Debt Planning",
        "Retirement & Long-term Goal Setting",
        "Insurance & Risk Management",
      ],
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship & Innovation",
      description:
        "Develop entrepreneurial mindset and innovation skills for future business opportunities.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      highlights: [
        "Business Model Development",
        "Market Research & Competitive Analysis",
        "Pitch Presentation & Investor Relations",
        "Product Development Lifecycle",
        "Customer Discovery & Validation",
        "Startup Ecosystem Navigation",
      ],
    },
    {
      id: "personal-development",
      title: "Leadership & Personal Growth",
      description:
        "Build character, leadership capabilities, and personal effectiveness for long-term success.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      highlights: [
        "Leadership Development & Team Management",
        "Emotional Intelligence & Self-Awareness",
        "Goal Setting & Productivity Systems",
        "Stress Management & Resilience Building",
        "Decision Making & Critical Thinking",
        "Personal Branding & Professional Image",
      ],
    },
  ];

  return (
    <section id={id} className={`py-20 sm:py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            Training Curriculum
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Comprehensive Skill Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our holistic training approach develops technical expertise,
            professional skills, and personal growth to create well-rounded
            industry-ready professionals.
          </p>
        </div>

        {/* Training Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {trainingAreas.map((area) => (
            <div key={area.id} className="group relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {area.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-3">
                  {area.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Industry-Relevant Skills
            </h3>
            <p className="text-gray-600 text-sm">
              Learn technologies and practices currently used by leading
              companies
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
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
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Professional Readiness
            </h3>
            <p className="text-gray-600 text-sm">
              Develop workplace skills and professional behavior for immediate
              impact
            </p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl border border-gray-200">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Personal Growth
            </h3>
            <p className="text-gray-600 text-sm">
              Build character, leadership, and life skills for long-term success
            </p>
          </div>
        </div>

        {/* Holistic Development CTA */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Complete Professional Transformation
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our comprehensive curriculum develops technical skills, professional
            competencies, and personal growth to prepare you for leadership
            roles in the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              6 Core Training Areas
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              360° Development Approach
            </div>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 text-green-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Industry Expert Guidance
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
            Explore Our Curriculum
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
