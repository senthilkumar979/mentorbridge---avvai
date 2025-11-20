"use client";

import { Footer } from "@/components";
import HallOfFameSection from "@/components/HallOfFameSection";
import Image from "next/image";
import { SubPageHeader } from "../../components/SubPageHeader";
import { hallOfFameStudents } from "../data/hallOfFameStudents";

const HallOfFamePage = () => {
  const criteria = [
    {
      number: "01",
      title: "Exceptional Career Achievement",
      description:
        "Students who have secured positions at top-tier companies and demonstrated outstanding performance in their roles. These individuals have not only landed their dream jobs but have also made significant contributions to their organizations.",
      icon: "🏆",
    },
    {
      number: "02",
      title: "Consistent Excellence",
      description:
        "Recognition is given to students who have maintained high standards throughout their journey with MentorBridge, showing consistent growth, dedication to learning, and commitment to their professional development.",
      icon: "⭐",
    },
    {
      number: "03",
      title: "Impact and Leadership",
      description:
        "Students who have gone beyond personal success to inspire others, contribute to the MentorBridge community, or demonstrate leadership qualities that set them apart as role models for future students.",
      icon: "👑",
    },
    {
      number: "04",
      title: "Mentorship Success Story",
      description:
        "Individuals whose success stories exemplify the power of mentorship and demonstrate how the guidance, resources, and support provided by MentorBridge have been instrumental in their career transformation.",
      icon: "💫",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SubPageHeader title="Hall of Fame" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-blue-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-6xl">🏅</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 bg-clip-text text-transparent mb-6 animate-fade-in">
              Hall of Fame
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-4">
              Celebrating exceptional students who have achieved remarkable
              success in their careers through dedication, hard work, and the
              guidance of MentorBridge.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-slate-600">
              <span className="text-sm font-medium">
                Scroll down to explore
              </span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">✨</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  A Legacy of Excellence
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-white/95 text-center leading-relaxed max-w-3xl mx-auto">
                The Hall of Fame represents the pinnacle of achievement for
                MentorBridge students. Each inductee has demonstrated
                exceptional dedication, skill, and professional growth. Their
                success stories inspire current and future students, proving
                that with the right mentorship and determination, extraordinary
                career achievements are within reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Induction Criteria Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              How Students Are Inducted
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our Hall of Fame recognizes students who exemplify excellence
              across multiple dimensions of achievement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-blue-100 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                        {criterion.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-pink-600 mb-2">
                        {criterion.number}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">
                        {criterion.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {criterion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Gallery Section */}
      <HallOfFameSection />

      {/* Hall of Fame Board Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Hall of Fame Board
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Recognizing our exceptional students and their achievements
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Batch
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hallOfFameStudents.map((student, index) => (
                    <tr
                      key={index}
                      className="hover:bg-pink-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-pink-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-base font-semibold text-slate-800 flex items-center gap-2">
                            <Image
                              src={student.photo.url}
                              alt={student.name}
                              width={20}
                              height={20}
                              className="w-10 h-10 rounded-full"
                            />
                            {student.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-base text-slate-700">
                          {student.company}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {student.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-pink-600 text-white">
                          {student.batch}
                        </span>
                      </td>
                      <td>
                        <a
                          href={student.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-blue-50/50" />
            <div className="relative z-10 text-center">
              <div className="inline-block mb-6">
                <span className="text-6xl">🚀</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Your Journey Starts Here
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Every Hall of Fame inductee started with a dream and the
                determination to achieve it. With MentorBridge&apos;s guidance,
                mentorship, and resources, you too can join this elite group of
                achievers. Your success story is waiting to be written.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/students"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Our Students
                </a>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-slate-500 text-sm sm:text-base">
                  <span className="font-semibold text-slate-700">
                    Remember:
                  </span>{" "}
                  Excellence is not a destination, it&apos;s a journey. Start
                  yours today with MentorBridge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HallOfFamePage;
