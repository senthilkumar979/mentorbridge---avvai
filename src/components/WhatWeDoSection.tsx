import React from "react";
import { SectionProps } from "@/types";

export const WhatWeDoSection: React.FC<SectionProps> = ({
  className = "",
  id = "what-we-do",
}) => {
  const services = [
    {
      title: "Skill Development",
      description:
        "We offer hands-on training in the latest technologies and tools, ensuring students acquire skills that are directly applicable to current industry demands.",
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
      features: [
        "Latest & Trending technologies ",
        "Real-world project experience",
        "Industry-standard tools and practices",
        "Hands-on coding sessions daily",
      ],
    },
    {
      title: "Industry Readiness",
      description:
        "Our focus is on practical knowledge and real-world applications, preparing students to confidently step into professional roles upon graduation.",
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
      features: [
        "Agile methodology implementation",
        "Team collaboration and communication",
        "Code review and quality assurance",
        "Professional development workflow",
      ],
    },
    {
      title: "Holistic Growth",
      description:
        "Beyond technical expertise, we emphasize the development of soft skills such as effective communication and problem-solving abilities, which are crucial for long-term career success.",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      features: [
        "Communication skills enhancement",
        "Problem-solving methodologies",
        "Leadership and teamwork",
        "Professional networking",
      ],
    },
    {
      title: "Project-Based Learning",
      description:
        "Learners will engage in real-world projects, enhancing their practical experience and understanding of industry standards and best practices.",
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
      features: [
        "Enterprise-grade application development",
        "Full-stack development experience",
        "Deployment and DevOps practices",
        "Product lifecycle management",
      ],
    },
    {
      title: "Career Preparation",
      description:
        "Comprehensive preparation for final year engineering students to secure job opportunities in the IT industry.",
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
      features: [
        "Resume building and optimization",
        "Mock interview preparation",
        "Profile enhancement",
        "Job search strategies",
      ],
    },
    {
      title: "Technical Excellence",
      description:
        "Advanced technical training covering modern frameworks, cloud technologies, and industry best practices.",
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
      features: [
        "AWS cloud computing",
        "Docker containerization",
        "CI/CD pipeline implementation",
        "Code quality analysis with SonarQube",
      ],
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
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer hands-on training in the latest technologies and tools,
            ensuring students acquire skills that are directly applicable to
            current industry demands. Our focus is on practical knowledge and
            real-world applications, preparing students to confidently step into
            professional roles upon graduation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#d53f8c] transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#d53f8c] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Specialized for Engineering Students
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Our program is specifically designed to bridge the gap between
                academic learning and industry requirements, ensuring students
                are job-ready from day one.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl font-bold mb-2">100%</div>
                <div className="text-base sm:text-lg">Job Ready</div>
                <div className="text-xs sm:text-sm opacity-90 mt-2">
                  Industry-focused training with real-world projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
