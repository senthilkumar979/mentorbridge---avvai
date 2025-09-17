"use client";

import React from "react";
import Image from "next/image";
import { Footer, Pagination } from "@/components";
import { useBlogs } from "@/hooks/useBlogs";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Blog } from "@/types";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [imageError, setImageError] = React.useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBlogClick = () => {
    window.open(blog.link, "_blank", "noopener,noreferrer");
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article
      onClick={handleBlogClick}
      className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {blog.cover_image_url && !imageError ? (
          <Image
            src={blog.cover_image_url}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <div className="text-white text-center">
              <svg
                className="w-12 h-12 mx-auto mb-2 opacity-80"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm font-medium">No Image</p>
            </div>
          </div>
        )}

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
          {blog.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">{blog.author_name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{formatDate(blog.published_date)}</span>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-1 text-primary group-hover:text-primary-dark transition-colors duration-300">
            <span className="text-sm font-medium">Read More</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>
      </div>
    </article>
  );
};

const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="h-48 sm:h-56 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ErrorState: React.FC<{ error: string; onRetry: () => void }> = ({
  error,
  onRetry,
}) => (
  <div className="text-center py-12">
    <div className="max-w-md mx-auto">
      <svg
        className="w-16 h-16 mx-auto text-red-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
        />
      </svg>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Failed to load blogs
      </h3>
      <p className="text-gray-600 mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
      >
        Try Again
      </button>
    </div>
  </div>
);

const EmptyState: React.FC = () => (
  <div className="text-center py-12">
    <div className="max-w-md mx-auto">
      <svg
        className="w-16 h-16 mx-auto text-gray-400 mb-4"
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
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No blogs available
      </h3>
      <p className="text-gray-600">
        Check back later for new blog posts from our community.
      </p>
    </div>
  </div>
);

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
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#d53f8c] hover:text-[#b83280] transition-colors duration-300"
              >
                MentorBridge
              </Link>
              <span className="text-gray-400 hidden sm:block">|</span>
              <span className="text-gray-600 font-medium">Blogs</span>
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
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Filter by Author:
              </h2>
              <div className="relative w-full sm:w-auto">
                <select
                  value={selectedAuthor}
                  onChange={(e) => handleAuthorChange(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 w-full sm:min-w-[200px]"
                >
                  <option value="all">All Authors</option>
                  {allAuthors.map((author) => (
                    <option key={author} value={author}>
                      {author}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {selectedAuthor !== "all" && (
              <button
                onClick={clearFilter}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300 self-start sm:self-auto"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Clear Filter</span>
              </button>
            )}
          </div>
        </div>
      </section>

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
