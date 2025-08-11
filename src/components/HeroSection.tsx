import React from "react";
import { SectionProps } from "@/types";

export const HeroSection: React.FC<SectionProps> = ({
  className = "",
  id = "home",
}) => {
  return (
    <section
      id={id}
      className={`pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 relative overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(220deg, #e53e8c -20%, #f5b5cd 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse animation-delay-2000"></div>

        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Not-For-Profit Community
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                <span className="block">
                  Mentor
                  <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                    Bridge
                  </span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
                Guiding Your Journey to Success
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
              <div className="absolute -top-3 left-6 text-3xl sm:text-4xl text-white/60">
                &ldquo;
              </div>
              <p className="text-base sm:text-lg text-white/90 italic leading-relaxed">
                Education is the passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </p>
              <footer className="text-sm text-white/70 mt-3">
                – Malcolm X
              </footer>
            </blockquote>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              MentorBridge is more than just a mentorship platform – it&apos;s a
              community of learners, leaders, and future innovators. By joining
              MentorBridge, you become part of a supportive network that
              encourages growth, learning, and connection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative bg-white text-[#d53f8c] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Hire our Students</span>
                <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Stats and Features */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  100+
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  Students Trained
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  3
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  Products Developed
                </div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  10+
                </div>
                <div className="text-sm sm:text-base text-white/80 font-medium">
                  Months of Training
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-white">
                    Industry-Ready Skills
                  </h2>
                  <p className="text-sm text-white/80">
                    Latest technologies and real-world projects
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-white">
                    Expert Mentorship
                  </h2>
                  <p className="text-sm text-white/80">
                    Guidance from experienced professionals
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-white">
                    No Cost Training
                  </h2>
                  <p className="text-sm text-white/80">
                    Training at no cost to all the students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
