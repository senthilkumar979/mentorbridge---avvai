import { SectionProps } from "@/types";
import React from "react";

export const HeroSection: React.FC<SectionProps> = ({
  className = "",
  id = "home",
}) => {
  return (
    <section
      id={id}
      className={`pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 relative overflow-hidden bg-gradient-to-br from-stone-100 via-from-[#d53f8c] to-slate-900 ${className}`}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Industry-Focused Training Program
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white tracking-tight">
                <span className="block">Transform Your</span>
              </h6>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight">
                <span className="block bg-gradient-to-r from-[#d53f8c] to-[#b83280] bg-clip-text text-transparent">
                  Career Path
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto lg:mx-0">
                Professional training that bridges the gap between education and
                industry success
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-white/90 leading-relaxed">
                Join{" "}
                <span className="font-semibold text-emerald-400">
                  100+ graduates
                </span>{" "}
                who have successfully transitioned from students to industry
                professionals through our comprehensive training program.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/70">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No Cost Training
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Industry Mentors
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-emerald-400 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Student to Professional
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-blue-600 inline-flex items-center"
              >
                <span>Start Your Journey</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
              <button
                onClick={() => {
                  const whatWeDoSection = document.getElementById("what-we-do");
                  if (whatWeDoSection) {
                    whatWeDoSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/30"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Professional Stats & Social Proof */}
          <div className="space-y-8">
            {/* Professional Benefits */}
            <div className="space-y-4">
              <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-emerald-400"
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
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Industry-Ready Skills
                  </h3>
                  <p className="text-sm text-white/70">
                    Master modern technologies and real-world development
                    practices
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
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
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Expert Mentorship
                  </h3>
                  <p className="text-sm text-white/70">
                    Learn from experienced professionals and industry leaders
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-400"
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
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Career Placement
                  </h3>
                  <p className="text-sm text-white/70">
                    Direct connections to hiring partners and job opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white/20"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white/20"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white/20"></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white/20"></div>
                </div>
              </div>
              <p className="text-center text-sm text-white/70">
                <span className="font-semibold text-white">
                  Join 100+ students
                </span>{" "}
                already transforming their careers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
