"use client";

import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { ProfilesList } from "../../data/students-2025";
import Image from "next/image";

export default function StudentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id as string;

  const student = useMemo(() => {
    return ProfilesList.find((profile) => profile.id === studentId);
  }, [studentId]);

  const downloadResume = () => {
    if (student) {
      if (student.resumeLink) {
        window.open(student.resumeLink, "_blank");
      }
    }
  };

  if (!student) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-slate-300 text-8xl mb-6">❌</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Student Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The student you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push("/students")}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Back to Students
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/students")}
            className="inline-flex items-center px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Students
          </button>
        </div>

        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/20 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <Image
                width={100}
                height={100}
                src={student.picture}
                alt={`Profile image of ${student.name}`}
                className="relative z-10 w-28 h-28 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-between">
                  {student.name}
                </h1>
                <a
                  onClick={downloadResume}
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 2H10v4H6v12h12V6h-4V2zM8 10h8m-8 4h8"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                <span className="text-sm font-semibold text-pink-600 px-4 py-2 inline-block">
                  {student.role}
                </span>
                <span className="text-sm text-slate-600 font-medium inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  {student.company ?? "MentorBridge"}
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                  {student.email && (
                    <a
                      href={`mailto:${student.email}`}
                      className="text-sm font-semibold text-pink-600 px-4 py-2 flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {student.email}
                    </a>
                  )}

                  {student.socialLinks.linkedIn && (
                    <a
                      href={student.socialLinks.linkedIn}
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
                  )}

                  {student.socialLinks.gitHub && (
                    <a
                      href={student.socialLinks.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {student.socialLinks.website && (
                    <a
                      href={student.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="inline-flex items-center px-4 py-1 rounded-lg text-xs font-bold border border-pink-300 text-pink-600 shadow-md">
                  {student.batch}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
          {/* Left Column - Summary and Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                About
              </h2>
              <div
                className="prose prose-slate max-w-none text-black leading-loose"
                dangerouslySetInnerHTML={{ __html: student.summary }}
              />
            </div>

            {/* Experience Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>
                Professional Experience
              </h2>
              <div className="space-y-6">
                {student.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-pink-500 pl-6 py-4"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-pink-600 font-medium mb-3">
                      {exp.company}
                    </p>
                    <div
                      className="prose prose-slate max-w-none text-sm text-black leading-loose"
                      dangerouslySetInnerHTML={{ __html: exp.summary }}
                    />
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-pink-600 hover:text-pink-700 mt-3 text-sm font-medium"
                      >
                        Visit Website
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* MentorBridge Experience Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-pink-500"
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
                MentorBridge Experience
              </h2>
              <div className="border-l-4 border-pink-500 pl-6 py-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {student.mentorBridgeExp.role}
                </h3>
                <p className="text-pink-600 font-medium mb-3">
                  {student.mentorBridgeExp.company}
                </p>
                <div
                  className="prose prose-slate max-w-none text-sm mb-4 text-black leading-loose"
                  dangerouslySetInnerHTML={{
                    __html: student.mentorBridgeExp.summary,
                  }}
                />
                {student.mentorBridgeExp.website && (
                  <a
                    href={student.mentorBridgeExp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 text-sm font-medium"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Skills and Inspirations */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-pink-500"
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
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {student.skillSets.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-xl text-sm font-medium border border-pink-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Inspirations Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-pink-500"
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
                Inspirations
              </h2>
              <div className="space-y-3">
                {student.inspirations.map((inspiration, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-pink-50 rounded-xl border border-pink-200"
                  >
                    <svg
                      className="w-5 h-5 text-pink-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span className="text-slate-700 font-medium">
                      {inspiration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
  
  .animate-slide-up {
    animation: slide-up 0.8s ease-out;
  }
`;

if (typeof document !== "undefined") {
  document.head.appendChild(style);
}
