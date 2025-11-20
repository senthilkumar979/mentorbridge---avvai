import Link from "next/link";

export const SubPageHeader = ({ title }: { title: string }) => {
  return (
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
            <span className="text-gray-600 font-medium">{title}</span>
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
  );
};
