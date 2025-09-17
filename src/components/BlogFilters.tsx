interface BlogFiltersProps {
  selectedAuthor: string;
  onAuthorChange: (author: string) => void;
  allAuthors: string[];
  onClearFilter: () => void;
}

export function BlogFilters({
  selectedAuthor,
  onAuthorChange,
  allAuthors,
  onClearFilter,
}: BlogFiltersProps) {
  return (
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
                onChange={(e) => onAuthorChange(e.target.value)}
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
              onClick={onClearFilter}
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
  );
}
