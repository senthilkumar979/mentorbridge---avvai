"use client";

import { Footer } from "@/components";
import Link from "next/link";
import { useState } from "react";

export default function MentorsPage() {
  const [activeMentorIndex, setActiveMentorIndex] = useState(0);

  const mentors = [
    {
      name: "Senthil Kumar Thangavel",
      title: "Chief Coordinator of MentorBridge",
      avatar: "👨‍💻",
      about:
        "Steering the helm at LTIMindTree as a Senior Specialist in Software Engineering, crafting high-performance web applications that drive business success. With a solid foundation in the MERN stack and JAVA Spring Boot over a decade of experience, specialized in developing scalable solutions that enhance user experience and operational efficiency.",
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
          period: "Jan 2025 - Present",
          location: "Brussels, Belgium",
          type: "On-site",
        },
        {
          role: "Senior Specialist - Software Engineering",
          company: "LTIMindTree",
          period: "Oct 2024 - Present",
          location: "Coimbatore, Tamil Nadu, India",
          type: "Hybrid",
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
      quote: "Trust the process, respect the process & follow the process",
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
      title: "Coordinator of MentorBridge",
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
          role: "Senior Java Developer",
          company: "LTIMindtree",
          period: "Aug 2024 - Present",
          location: "Coimbatore, Tamil Nadu, India",
          type: "Hybrid",
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

  const activeMentor = mentors[activeMentorIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-2xl font-bold text-[#d53f8c] hover:text-[#b83280] transition-colors duration-300"
              >
                MentorBridge
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600 font-medium">Our Mentors</span>
            </div>
            <Link
              href="/"
              className="text-[#d53f8c] hover:text-[#b83280] font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Meet Our Mentors
          </h1>

          {/* Story Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Journey Begins
              </h3>
              <p className="text-gray-600 leading-relaxed">
                After spending almost half a decade in Europe and more than a
                decade in IT industry, Senthil Kumar, software engineer by
                profession, has noticed that there was no proper guidance for
                students especially from rural areas to get into the IT
                industry.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Senthil Kumar volunteered for various college events to guide
                students mentored them and helped them to prepare for their
                career. Along with his like-minded friend, Dhileepan Dhanapal,
                they decided to give back to the society through Education.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">MentorBridge</h3>
            <p className="text-lg leading-relaxed">
              We started MentorBridge in 2024 as a Not-For-Profit community to
              train students from rural areas in the latest technologies and
              prepare them for the real world.
            </p>
          </div>
        </div>

        {/* Mentor Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {mentors.map((mentor, index) => (
              <button
                key={index}
                onClick={() => setActiveMentorIndex(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeMentorIndex === index
                    ? "bg-[#d53f8c] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#d53f8c] hover:bg-gray-50"
                }`}
              >
                {mentor.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Mentor Profile */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Mentor Header */}
          <div
            className={`bg-gradient-to-r ${activeMentor.color} p-8 sm:p-12 text-white`}
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="text-6xl mb-4">{activeMentor.avatar}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {activeMentor.name}
                </h3>
                <p className="text-lg opacity-90">{activeMentor.title}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed">{activeMentor.about}</p>
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    About
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {activeMentor.personalStory}
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Education
                  </h4>
                  <div className="space-y-4">
                    {activeMentor.education.map((edu, eduIndex) => (
                      <div key={eduIndex} className="bg-gray-50 rounded-xl p-4">
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Experience
                  </h4>
                  <div className="space-y-4">
                    {activeMentor.experience.map((exp, expIndex) => (
                      <div key={expIndex} className="bg-gray-50 rounded-xl p-4">
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-3 flex-col">
                    {activeMentor.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white text-sm rounded-full w-fit"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeMentor.interests.map((interest, interestIndex) => (
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Favorite Quote
                  </h4>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    <b>&ldquo;{activeMentor.quote}&rdquo;</b>
                  </blockquote>
                </div>

                {/* Inspirations */}
                {activeMentor.inspirations.length > 0 && (
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Inspirations
                    </h4>
                    <div className="flex flex-wrap flex-col gap-4">
                      {activeMentor.inspirations.map(
                        (inspiration, inspIndex) => (
                          <span
                            key={inspIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full w-fit"
                          >
                            {inspiration}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Mentored?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our program and learn directly from senior professionals with
            extensive experience in leading companies worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-[#d53f8c] to-[#b83280] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply for Mentorship
            </Link>
            <Link
              href="/"
              className="border-2 border-[#d53f8c] text-[#d53f8c] hover:bg-[#d53f8c] hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
