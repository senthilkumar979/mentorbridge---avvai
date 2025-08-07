import React from "react";
import { SectionProps } from "@/types";

export const AchievementsSection: React.FC<SectionProps> = ({
  className = "",
  id = "achievements",
}) => {
  const partners = [
    {
      name: "CodiFi",
      logo: "🏢",
      description: "Technology Solutions",
    },
    {
      name: "Frigate",
      logo: "🚢",
      description: "Digital Innovation",
    },
    {
      name: "TechJays",
      logo: "🦅",
      description: "Software Development",
    },
    {
      name: "Kylonix",
      logo: "⚡",
      description: "Tech Solutions",
    },
  ];

  const students = [
    {
      name: "Kiruthika",
      company: "TechJays",
      joiningDate: "22/05/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Subash",
      company: "Frigate",
      joiningDate: "05/05/2025",
      avatar: "👨‍💻",
    },
    {
      name: "Harini",
      company: "TechJays",
      joiningDate: "14/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Meena",
      company: "TechJays",
      joiningDate: "16/06/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Jeyashree",
      company: "Kylonix",
      joiningDate: "21/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Prasanna",
      company: "CodiFi",
      joiningDate: "18/07/2025",
      avatar: "👨‍💻",
    },
    {
      name: "Sivasankari",
      company: "CodiFi",
      joiningDate: "21/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Nagapriya",
      company: "Frigate",
      joiningDate: "05/05/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Kajalakshmi",
      company: "Kylonix",
      joiningDate: "21/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Devaki",
      company: "Kylonix",
      joiningDate: "21/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Jeyaraman",
      company: "Frigate",
      joiningDate: "05/05/2025",
      avatar: "👨‍💻",
    },
    {
      name: "Bavani",
      company: "TechJays",
      joiningDate: "07/07/2025",
      avatar: "👩‍💻",
    },
    {
      name: "Vijay Subramanian",
      company: "TechJays",
      joiningDate: "21/07/2025",
      avatar: "👨‍💻",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Students Trained",
      description: "Comprehensive training program",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "4+",
      label: "Partner Companies",
      description: "Industry collaborations",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "10+",
      label: "Months of Training",
      description: "Comprehensive training program",
      color: "from-indigo-500 to-blue-500",
    },
    {
      number: "3+",
      label: "Products Developed",
      description: "Innovative solutions for real-world problems",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const partnerCompanies = [
    {
      name: "CodiFi",
      logo: "https://cdn.prod.website-files.com/65db81f1b768e5a874a7f796/6823abc6adba15348385c94b_brand-logo.svg",
    },
    {
      name: "Frigate",
      logo: "https://frigate.ai/wp-content/uploads/2024/03/Frigate-Manufacturing-Services-Logo-scaled.webp",
    },
    {
      name: "TechJays",
      logo: "https://cdn.prod.website-files.com/65f2a5372687678051645610/674ff9bec4b490efb213e1b8_Black.png",
    },
    {
      name: "Kylonix",
      logo: "https://klyonix.com/wp-content/uploads/2025/03/KlyONIX-Logo-Trans.png",
    },
  ];

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
            students trained and lot of students successfully placed in leading
            companies.
            Here&apos;s our story of success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <div className="text-2xl text-white font-bold">
                  {stat.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Partner Companies
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to collaborate with leading companies that trust
              our trained students and provide them with excellent career
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-auto mx-auto object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d53f8c] transition-colors duration-300">
                  {company.name}
                </h4>
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
              Our students are already working in partner companies since May
              2025. Here are some of our successful placements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {student.avatar}
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
                      <span className="text-sm font-bold text-gray-900 ml-2">
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
