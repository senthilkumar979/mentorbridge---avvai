interface StudentsFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
  selectedBatch: string;
  setSelectedBatch: (batch: string) => void;
  uniqueRoles: string[];
  uniqueCompanies: string[];
  uniqueBatches: string[];
  onClearFilters: () => void;
}

export function StudentsFilters({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  selectedCompany,
  setSelectedCompany,
  selectedBatch,
  setSelectedBatch,
  uniqueRoles,
  uniqueCompanies,
  uniqueBatches,
  onClearFilters,
}: StudentsFiltersProps) {
  return (
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
            className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-400"
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
            className="w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-slate-300 placeholder:text-slate-800"
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
          onClick={onClearFilters}
          className="px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-xl hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200 hover:shadow-md"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
