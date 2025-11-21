import posthog from "posthog-js";
import React from "react";
import { PaginationProps } from "@/types/pagination.types";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalCount,
  hasNextPage,
  hasPreviousPage,
  onPageChange,
  onNextPage,
  onPreviousPage,
  pageSize,
}) => {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, currentPage + 2);

      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push("...");
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
      {/* Results info */}
      <div className="text-sm text-gray-700">
        Showing {startItem} to {endItem} of {totalCount} results
      </div>

      {/* Pagination controls */}
      <div className="flex items-center space-x-2">
        {/* Previous button */}
        <button
          onClick={() => {
            posthog.capture("pagination_page_changed", {
              direction: "previous",
              currentPage: currentPage,
              targetPage: currentPage - 1,
              totalPages: totalPages,
            });
            onPreviousPage();
          }}
          disabled={!hasPreviousPage}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            hasPreviousPage
              ? "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              : "text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed"
          }`}
        >
          Previous
        </button>

        {/* Page numbers */}
        <div className="flex items-center space-x-1">
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-3 py-2 text-sm text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => {
                    posthog.capture("pagination_page_changed", {
                      direction: "specific",
                      currentPage: currentPage,
                      targetPage: page,
                      totalPages: totalPages,
                    });
                    onPageChange(page as number);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    page === currentPage
                      ? "text-white bg-primary border border-primary"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => {
            posthog.capture("pagination_page_changed", {
              direction: "next",
              currentPage: currentPage,
              targetPage: currentPage + 1,
              totalPages: totalPages,
            });
            onNextPage();
          }}
          disabled={!hasNextPage}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            hasNextPage
              ? "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
              : "text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
