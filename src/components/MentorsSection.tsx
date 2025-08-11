import React from "react";
import { SectionProps } from "@/types";

export const MentorsSection: React.FC<SectionProps> = ({
  className = "",
  id = "mentors",
}) => {
  const mentors = [
    {
      name: "Senthil Kumar Thangavel",
      title: "Senior Specialist - Software Engineering | Education Mentor",
      avatar: "👨‍💻",
      about:
        "Steering the helm at BNP Paribas Fortis as a Senior Developer II, crafting high-performance web applications that drive business success. With a solid foundation in the MERN stack and JAVA Spring Boot over a decade of experience, specialized in developing scalable solutions that enhance user experience and operational efficiency.",
      personalStory:
        "My inspirations, the books I've read, and the wisdom from my grandfathers have taught me a valuable lesson: what we give to the world with sincerity and dedication, returns to us in double measure. This understanding led me to mentorship, a support I lacked during my college years. I aspire to be the mentor I once needed, fostering collective growth in a world where material wealth often overshadows human values.",
      education: [
        {
          degree: "Master of Business Administration (MBA)",
          institution: "SRM Institute of Science and Technology (SRMIST)",
          specialization: "Business Analytics",
          period: "Jul 2024 - Apr 2026",
        },
        {
          degree: "Bachelor of Engineering (BE)",
          institution: "M.KUMARASAMY COLLEGE OF ENGINEERING, KARUR",
          specialization: "Electrical and Electronics Engineering",
          period: "2009 - 2013",
        },
      ],
      experience: [
        {
          role: "Senior Developer II",
          company: "BNP Paribas Fortis",
          period: "Jul 2025 - Present",
          location: "Brussels, Belgium",
          type: "On-site",
        },
        {
          role: "Senior Specialist - Software Engineering",
          company: "LTIMindTree",
          period: "Oct 2024 - Jun 2025",
          location: "Coimbatore, Tamil Nadu, India",
          type: "Remote",
        },
        {
          role: "Senior Fullstack Engineer",
          company: "OroCommerce",
          period: "Nov 2023 - Sep 2024",
          location: "United States",
          type: "Remote",
        },
        {
          role: "Senior Technical System Analyst",
          company: "Tata Consultancy Services",
          period: "Feb 2014 - Nov 2023",
          location: "Brussels Area, Belgium",
          type: "On-site",
        },
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Spring Boot",
        "MongoDB",
        "Micro Frontend",
        "Technical Leadership",
        "Mentorship",
        "Strategic Planning",
        "Training & Development",
      ],
      interests: ["Reading Books", "Mentoring", "Writing Blogs"],
      quote: "Be the change that you wish to see in the world",
      inspirations: [
        "Methagu Vellupillai Prabhakaran",
        "King Maker Kamaraj",
        "Lee Kuan Yew",
        "Selvi J. Jayalalitha",
        "Adolf Hitler",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dhileepan Dhanapal",
      title: "Senior Specialist - Cloud | Mentor",
      avatar: "👨‍💼",
      about:
        "A seasoned software engineer with over a decade of experience in enterprise application development. Specialized in Java, Spring, and cloud technologies with extensive experience in both European and Indian markets.",
      personalStory:
        "Dhileepan has built a successful career spanning multiple countries and industries, working with leading organizations in both Europe and India. His expertise in Java, Spring, and cloud technologies, combined with his experience in mentoring, makes him an invaluable guide for students entering the IT industry.",
      education: [
        {
          degree: "Master of Business Administration (MBA)",
          institution: "SRM Institute of Science and Technology (SRMIST)",
          specialization: "Business Analytics",
          period: "Jul 2024 - Apr 2026",
        },
        {
          degree: "Bachelor of Technology (B.Tech)",
          institution: "Shri Angalamman College of Engineering and Technology",
          specialization: "Information Technology",
          period: "2006 - 2010",
        },
      ],
      experience: [
        {
          role: "Associate Technical Architect",
          company: "Expleo",
          period: "May 2025 - Present",
          location: "Brussels, Belgium",
          type: "On-site",
        },
        {
          role: "Senior Java Developer",
          company: "LTIMindtree",
          period: "Aug 2024 - May 2025",
          location: "Coimbatore, Tamil Nadu, India",
          type: "Remote",
        },
        {
          role: "Senior Software Engineer",
          company: "PureSoftware Ltd",
          period: "Jan 2024 - Aug 2024",
          location: "Delhi, India",
          type: "Remote",
        },
        {
          role: "Dev Engineer",
          company: "BNP Paribas Fortis",
          period: "Sep 2019 - Aug 2024",
          location: "Brussels, Belgium",
          type: "On-site",
        },
        {
          role: "IT Analyst",
          company: "Tata Consultancy Services",
          period: "Dec 2016 - Sep 2019",
          location: "Brussels Region, Belgium",
          type: "On-site",
        },
        {
          role: "Senior Software Engineer",
          company: "Newgen Software Technologies Limited",
          period: "Oct 2012 - Nov 2016",
          location: "Chennai, India",
          type: "On-site",
        },
      ],
      skills: [
        "Java",
        "Spring Framework",
        "Spring Boot",
        "Spring Security",
        "Microservices",
        "AWS",
        "Kafka",
        "ActiveMQ",
        "ELK Stack",
        "Cloud Computing",
        "Linux",
        "Enterprise Applications",
        "Business Process Management",
        "Business Analytics",
      ],
      interests: [
        "Cloud Computing",
        "Enterprise Applications",
        "Mentoring",
        "Business Analytics",
      ],
      quote:
        "The best way to learn is to teach. By mentoring others, we not only help them grow but also reinforce our own knowledge.",
      inspirations: [],
      color: "from-green-500 to-emerald-500",
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
            Meet Our Mentors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Visionaries Behind MentorBridge
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the experienced professionals who dedicate their time and
            expertise to guide students from rural areas towards successful
            careers in the IT industry.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="space-y-16">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              {/* Mentor Header */}
              <div
                className={`bg-gradient-to-r ${mentor.color} p-8 sm:p-12 text-white`}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-6xl mb-4">{mentor.avatar}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-lg opacity-90">{mentor.title}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-lg leading-relaxed">{mentor.about}</p>
                  </div>
                </div>
              </div>

              {/* Mentor Content */}
              <div className="p-8 sm:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Personal Story */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        About
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {mentor.personalStory}
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Education
                      </h3>
                      <div className="space-y-4">
                        {mentor.education.map((edu, eduIndex) => (
                          <div
                            key={eduIndex}
                            className="bg-gray-50 rounded-xl p-4"
                          >
                            <div className="font-semibold text-gray-900">
                              {edu.degree}
                            </div>
                            <div className="text-sm text-gray-600">
                              {edu.institution}
                            </div>
                            <div className="text-sm text-gray-600">
                              {edu.specialization}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {edu.period}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Experience
                      </h3>
                      <div className="space-y-4">
                        {mentor.experience.map((exp, expIndex) => (
                          <div
                            key={expIndex}
                            className="bg-gray-50 rounded-xl p-4"
                          >
                            <div className="font-semibold text-gray-900">
                              {exp.role}
                            </div>
                            <div className="text-sm text-gray-600">
                              {exp.company}
                            </div>
                            <div className="text-sm text-gray-600">
                              {exp.period}
                            </div>
                            <div className="text-xs text-gray-500">
                              {exp.location} · {exp.type}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Skills */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {mentor.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interests */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Interests
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {mentor.interests.map((interest, interestIndex) => (
                          <span
                            key={interestIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Quote */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Favorite Quote
                      </h3>
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        &ldquo;{mentor.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Inspirations */}
                    {mentor.inspirations.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Inspirations
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {mentor.inspirations.map((inspiration, inspIndex) => (
                            <span
                              key={inspIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                            >
                              {inspiration}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Get Mentored by Industry Experts
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our program and learn directly from senior professionals with
            extensive experience in leading companies worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply for Mentorship
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-[#d53f8c] text-[#d53f8c] hover:bg-[#d53f8c] hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
