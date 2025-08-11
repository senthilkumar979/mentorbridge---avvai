import React from "react";
import { SectionProps } from "@/types";

export const KeyFeaturesSection: React.FC<SectionProps> = ({
  className = "",
  id = "key-features",
}) => {
  const features = [
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
        "Full-stack development (React, Node.js, Spring Boot, MongoDB)",
        "Cloud computing and DevOps practices (AWS, Docker, Jenkins)",
        "Database design and management (SQL, NoSQL, Redis)",
        "API development and integration (REST, GraphQL, Swagger)",
        "Version control and collaboration (Git, GitHub, GitLab)",
        "Testing methodologies (Unit, Integration, E2E testing)",
        "Security best practices and OWASP guidelines",
        "Performance optimization and monitoring tools",
        "Mobile app development (React Native, Flutter)",
        "Microservices architecture and containerization",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Communication Training",
      description:
        "Enhancing verbal and written communication skills for professional success.",
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      highlights: [
        "Public speaking and presentation skills with confidence building",
        "Professional email writing and business correspondence",
        "Team collaboration and conflict resolution strategies",
        "Client communication and stakeholder management",
        "Technical documentation and user guide creation",
        "Code review feedback and constructive criticism",
        "Agile ceremonies facilitation (standups, retrospectives)",
        "Cross-functional team communication",
        "Remote communication tools and best practices",
        "Non-verbal communication and body language awareness",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Etiquette Training",
      description:
        "Professional workplace etiquette and corporate culture understanding.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      highlights: [
        "Professional dress code and appearance guidelines",
        "Meeting etiquette and time management skills",
        "Cross-cultural communication and diversity awareness",
        "Corporate social responsibility and ethical practices",
        "Networking skills and relationship building",
        "Interview etiquette and professional conduct",
        "Workplace conflict resolution and mediation",
        "Corporate hierarchy and reporting structures",
        "Business lunch etiquette and professional dining",
        "Digital etiquette and online professional presence",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Financial Literacy",
      description:
        "Essential financial management skills for personal and professional growth.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      highlights: [
        "Personal budgeting and expense management strategies",
        "Investment basics and financial planning fundamentals",
        "Salary negotiation and compensation understanding",
        "Retirement planning and long-term financial goals",
        "Credit management and debt avoidance strategies",
        "Emergency fund creation and financial security",
        "Insurance planning (health, life, professional liability)",
        "Stock market basics and investment diversification",
        "Financial goal setting and wealth building strategies",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Startup Ideation Workshop",
      description:
        "Fostering innovation and entrepreneurial mindset for future opportunities.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      highlights: [
        "Business model canvas and lean startup methodology",
        "Market research and competitive analysis techniques",
        "Pitch deck creation and presentation skills",
        "Innovation thinking and creative problem-solving",
        "Product development lifecycle and MVP creation",
        "Customer discovery and validation strategies",
        "Funding options and investor relations",
        "Intellectual property and patent awareness",
        "Business plan development and financial projections",
        "Startup ecosystem understanding and networking",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Personal Growth",
      description:
        "Building character, leadership skills, and personal growth for long-term success.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      highlights: [
        "Leadership development and team management skills",
        "Emotional intelligence and self-awareness training",
        "Goal setting and personal productivity strategies",
        "Stress management and resilience building",
        "Time management and prioritization techniques",
        "Continuous learning and skill development mindset",
        "Mentorship and coaching skills development",
        "Decision-making and critical thinking abilities",
        "Adaptability and change management skills",
        "Personal branding and professional image building",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section
      id={id}
      className={`py-20 bg-gradient-to-br from-white to-gray-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            Training Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Features of Our Training
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We focus not only on technical skills, but we equip students in all
            aspects, making them better citizens for society. Our holistic
            approach ensures comprehensive development beyond just professional
            skills.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                <div
                  className={`bg-gradient-to-r ${feature.color} rounded-2xl h-full w-full`}
                ></div>
              </div>

              <div className="relative z-10 bg-white rounded-2xl p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                      {feature.title}
                    </h2>
                  </div>
                </div>
                <p
                  className={`text-sm font-bold mb-4 text-gray-600 leading-relaxed group-hover:text-[#d53f8c] transition-colors duration-300`}
                >
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Holistic Approach Section */}
        <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Beyond Technical Skills
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Our comprehensive training program goes beyond technical
                expertise to create well-rounded individuals who contribute
                positively to society. We believe in developing not just skilled
                professionals, but responsible citizens.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold mb-2">360°</div>
                <div className="text-lg">Holistic Development</div>
                <div className="text-sm opacity-90 mt-2">
                  Technical + Soft Skills + Life Skills
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              value: "6",
              label: "Core Training Areas",
              color: "text-blue-500",
            },
            {
              value: "100%",
              label: "Holistic Approach",
              color: "text-green-500",
            },
            { value: "24/7", label: "Mentor Support", color: "text-red-500" },
            { value: "∞", label: "Growth Potential", color: "text-purple-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-md"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
