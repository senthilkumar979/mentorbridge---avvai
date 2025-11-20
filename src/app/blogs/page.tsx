"use client";

import {
  BlogCard,
  BlogFilters,
  EmptyState,
  ErrorState,
  Footer,
  LoadingSkeleton,
  Pagination,
} from "@/components";
import { useBlogs } from "@/hooks/useBlogs";
import { supabase } from "@/lib/supabase";
import React from "react";
import { SubPageHeader } from "../../components/SubPageHeader";

export default function BlogsPage() {
  const [selectedAuthor, setSelectedAuthor] = React.useState<string>("all");

  const {
    blogs,
    isLoading,
    error,
    pagination,
    goToPage,
    nextPage,
    previousPage,
    refetch,
  } = useBlogs({
    authorFilter: selectedAuthor,
    pageSize: 30,
  });

  // Get unique authors from all blogs (we'll need to fetch this separately)
  const [allAuthors, setAllAuthors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const { data } = await supabase
          .from("blogs")
          .select("author_name")
          .order("author_name");

        if (data) {
          const uniqueAuthors = Array.from(
            new Set(data.map((blog) => blog.author_name))
          ).sort();
          setAllAuthors(uniqueAuthors);
        }
      } catch (err) {
        console.error("Error fetching authors:", err);
      }
    };

    fetchAuthors();
  }, []);

  const handleAuthorChange = (author: string) => {
    setSelectedAuthor(author);
  };

  const clearFilter = () => {
    setSelectedAuthor("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SubPageHeader title="Blogs" />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Blogs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-delay">
              Insights, stories, and knowledge from our community of mentors and
              students
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <BlogFilters
        selectedAuthor={selectedAuthor}
        onAuthorChange={handleAuthorChange}
        allAuthors={allAuthors}
        onClearFilter={clearFilter}
      />

      {/* Blogs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Counter */}
          {!isLoading && !error && blogs.length > 0 && (
            <div className="mb-8">
              <p className="text-gray-600">
                {selectedAuthor === "all" ? (
                  <>
                    Showing {blogs.length} of {pagination.totalCount} blog
                    {pagination.totalCount !== 1 ? "s" : ""}
                  </>
                ) : (
                  <>
                    Showing {blogs.length} of {pagination.totalCount} blog
                    {pagination.totalCount !== 1 ? "s" : ""} by {selectedAuthor}
                  </>
                )}
              </p>
            </div>
          )}
          {isLoading ? (
            <LoadingSkeleton />
          ) : error ? (
            <ErrorState error={error} onRetry={refetch} />
          ) : blogs.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                totalCount={pagination.totalCount}
                hasNextPage={pagination.hasNextPage}
                hasPreviousPage={pagination.hasPreviousPage}
                onPageChange={goToPage}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
                pageSize={30}
              />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
