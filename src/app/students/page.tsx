"use client";

import { useState, useMemo } from "react";
import { ProfilesList } from "../data/students-2025";
import { ProfileData } from "../../types/Profile.types";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Link from "next/link";

export default function StudentsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  // Get unique values for filters
  const uniqueRoles = useMemo(
    () => [...new Set(ProfilesList.map((profile) => profile.role))].sort(),
    []
  );

  const uniqueCompanies = useMemo(
    () =>
      [
        ...new Set(
          ProfilesList.map((profile) => profile.company).filter(Boolean)
        ),
      ].sort(),
    []
  );

  const uniqueBatches = useMemo(
    () => [...new Set(ProfilesList.map((profile) => profile.batch))].sort(),
    []
  );

  // Filter profiles based on search and filters
  const filteredProfiles = useMemo(() => {
    return ProfilesList.filter((profile) => {
      const matchesSearch = profile.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = !selectedRole || profile.role === selectedRole;
      const matchesCompany =
        !selectedCompany || profile.company === selectedCompany;
      const matchesBatch = !selectedBatch || profile.batch === selectedBatch;

      return matchesSearch && matchesRole && matchesCompany && matchesBatch;
    });
  }, [searchTerm, selectedRole, selectedCompany, selectedBatch]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRole("");
    setSelectedCompany("");
    setSelectedBatch("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pb-12">
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
              <span className="text-gray-600 font-medium">Our Students</span>
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
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Our Students
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Meet the talented students mentored by MentorBridge, building
              their careers in technology and innovation.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20 animate-slide-up">
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-1">
                <label
                  htmlFor="search"
                  className="block text-sm font-semibold text-slate-700 mb-3"
                >
                  Search by Name
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-400"
                />
              </div>

              {/* Role Filter */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-slate-700 mb-3"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm  text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-400"
                >
                  <option value="">All Roles</option>
                  {uniqueRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Filter */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-slate-700 mb-3"
                >
                  Company
                </label>
                <select
                  id="company"
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-400"
                >
                  <option value="">All Companies</option>
                  {uniqueCompanies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>

              {/* Batch Filter */}
              <div>
                <label
                  htmlFor="batch"
                  className="block text-sm font-semibold text-slate-700 mb-3"
                >
                  Batch
                </label>
                <select
                  id="batch"
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm  text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-800"
                >
                  <option value="">All Batches</option>
                  {uniqueBatches.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200 hover:shadow-md"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-slate-600 text-lg font-medium">
              Showing{" "}
              <span className="text-pink-500 font-bold">
                {filteredProfiles.length}
              </span>{" "}
              of{" "}
              <span className="text-slate-800 font-bold">
                {ProfilesList.length}
              </span>{" "}
              students
            </p>
          </div>

          {/* Students Grid */}
          {filteredProfiles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProfiles.map((profile, index) => (
                <div
                  key={profile.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <StudentCard
                    profile={profile}
                    onClick={() => router.push(`/student-detail/${profile.id}`)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-slate-300 text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                No students found
              </h3>
              <p className="text-slate-600 text-lg">
                Try adjusting your search criteria or filters to find more
                students.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface StudentCardProps {
  profile: ProfileData;
  onClick?: () => void;
}

function StudentCard({ profile, onClick }: StudentCardProps) {
  return (
    <div
      className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:scale-105 hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      {/* Profile Image */}
      <div className="h-52 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-500"></div>
        <Image
          width={100}
          height={100}
          src={profile.picture}
          alt={`Profile image of ${profile.name}`}
          className="relative z-10 w-28 h-28 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Profile Info */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center group-hover:text-pink-500 transition-colors duration-300">
          {profile.name}
        </h3>

        {/* Batch Tag */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center px-4 py-1 rounded-lg text-xs font-bold bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-md">
            {profile.batch}
          </span>
        </div>

        {/* Role and Company */}
        <div className="space-y-3 mb-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-pink-600 px-4 py-2 inline-block">
              {profile.role}
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-600 font-medium inline-flex items-center">
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
              {profile.company ?? "MentorBridge"}
            </p>
          </div>
        </div>

        {/* Social Links and Email - All in one line */}
        <div className="flex justify-center items-center space-x-3 mb-4">
          {profile.socialLinks.linkedIn && (
            <a
              href={profile.socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}

          {profile.socialLinks.gitHub && (
            <a
              href={profile.socialLinks.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-900 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}

          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Email Contact"
            >
              <svg
                className="w-5 h-5"
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
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
