"use client";

import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Footer, StudentCard, StudentsFilters } from "../../components";
import { SubPageHeader } from "../../components/SubPageHeader";
import { useStudents } from "../../hooks/useStudents";
import { ProfileData } from "../../types/Profile.types";

export default function StudentsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");

  // Fire a PostHog event on initial page load
  useEffect(() => {
    // Only run client-side and if PostHog is loaded
    if (typeof window !== "undefined" && posthog && posthog.capture) {
      posthog.capture("students_page_viewed");
    }
  }, []);

  // Fetch students data from Supabase
  const { students, loading, error, refetch } = useStudents();

  // Get unique values for filters
  const uniqueRoles = useMemo(
    () => [...new Set(students.map((profile) => profile.role))].sort(),
    [students]
  );

  const uniqueCompanies = useMemo(
    () =>
      [
        ...new Set(
          students
            .map((profile) => profile.company)
            .filter((company): company is string => Boolean(company))
        ),
      ].sort(),
    [students]
  );

  const uniqueBatches = useMemo(() => {
    const batches = [
      ...new Set(students.map((profile) => profile.batch)),
    ].sort();
    console.log("Available batches:", batches);
    return batches;
  }, [students]);

  // Filter profiles based on search and filters
  const filteredProfiles = useMemo(() => {
    return students.filter((profile) => {
      const matchesSearch = profile.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = !selectedRole || profile.role === selectedRole;
      const matchesCompany =
        !selectedCompany || profile.company === selectedCompany;

      // Robust batch matching with proper string comparison
      const profileBatch = String(profile.batch || "").trim();
      const selectedBatchTrimmed = String(selectedBatch || "").trim();
      const matchesBatch =
        !selectedBatch || profileBatch === selectedBatchTrimmed;

      return matchesSearch && matchesRole && matchesCompany && matchesBatch;
    });
  }, [students, searchTerm, selectedRole, selectedCompany, selectedBatch]);

  // -- PostHog helpers for tracking events --
  // Track filter changes
  useEffect(() => {
    // Skip initial mount if everything is blank
    if (
      searchTerm === "" &&
      selectedRole === "" &&
      selectedCompany === "" &&
      selectedBatch === ""
    ) {
      return;
    }

    if (typeof window !== "undefined" && posthog && posthog.capture) {
      posthog.capture("students_filters_updated", {
        searchTerm,
        selectedRole,
        selectedCompany,
        selectedBatch,
      });
    }
  }, [searchTerm, selectedRole, selectedCompany, selectedBatch]);

  // Track clicking "Try Again"
  const handleRefetchClick = useCallback(() => {
    if (typeof window !== "undefined" && posthog && posthog.capture) {
      posthog.capture("students_try_again_clicked");
    }
    refetch();
  }, [refetch]);

  // Track clicking a student (card click)
  const handleStudentCardClick = useCallback(
    (profile: ProfileData) => {
      if (typeof window !== "undefined" && posthog && posthog.capture) {
        posthog.capture("students_student_selected", {
          student_id: profile.id,
          name: profile.name,
          role: profile.role,
          company: profile.company,
          batch: profile.batch,
        });
      }
      router.push(`/student-detail/${profile.id}`);
    },
    [router]
  );

  // Track filters cleared
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRole("");
    setSelectedCompany("");
    setSelectedBatch("");
    if (typeof window !== "undefined" && posthog && posthog.capture) {
      posthog.capture("students_filters_cleared");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SubPageHeader title="Our Students" />
      <div className="mt-20 pb-12">
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
          {!loading && !error && (
            <StudentsFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              selectedCompany={selectedCompany}
              setSelectedCompany={setSelectedCompany}
              selectedBatch={selectedBatch}
              setSelectedBatch={setSelectedBatch}
              uniqueRoles={uniqueRoles}
              uniqueCompanies={uniqueCompanies}
              uniqueBatches={uniqueBatches}
              onClearFilters={clearFilters}
            />
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-slate-300 text-8xl mb-6">⏳</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Loading students...
              </h3>
              <p className="text-slate-600 text-lg">
                Please wait while we fetch the latest student data.
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-red-300 text-8xl mb-6">❌</div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                Error loading students
              </h3>
              <p className="text-slate-600 text-lg mb-6">{error}</p>
              <button
                onClick={handleRefetchClick}
                className="px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors duration-200 font-semibold"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Results Count */}
          {!loading && !error && (
            <div className="mb-8 text-center">
              <p className="text-slate-600 text-lg font-medium">
                Showing{" "}
                <span className="text-pink-500 font-bold">
                  {filteredProfiles.length}
                </span>{" "}
                of{" "}
                <span className="text-slate-800 font-bold">
                  {students.length}
                </span>{" "}
                students
              </p>
            </div>
          )}

          {/* Students Grid */}
          {!loading && !error && (
            <>
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
                        onClick={() => handleStudentCardClick(profile)}
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
            </>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
