import React from 'react';
import { Search, X, Filter, RotateCcw } from 'lucide-react';

export interface SearchFilters {
  query: string;
  textile: string;
  state: string;
  technique: string;
  material: string;
}

interface SearchControlsProps {
  filters: SearchFilters;
  onChange: (updated: Partial<SearchFilters>) => void;
  onReset: () => void;
  textileOptions?: string[];
  stateOptions?: string[];
  techniqueOptions?: string[];
  materialOptions?: string[];
}

export const SUGGESTION_CHIPS = [
  { label: 'Patan Patola', field: 'query', value: 'Patan Patola' },
  { label: 'Bandhani', field: 'query', value: 'Bandhani' },
  { label: 'Ajrakh', field: 'query', value: 'Ajrakh' },
  { label: 'Gujarat', field: 'state', value: 'gujarat' },
  { label: 'Double Ikat', field: 'technique', value: 'Double Ikat' },
  { label: 'Silk', field: 'material', value: 'Silk' },
];

export const SearchControls: React.FC<SearchControlsProps> = ({
  filters,
  onChange,
  onReset,
  textileOptions = [
    'Patan Patola',
    'Bandhani',
    'Mashru',
    'Tangaliya',
    'Kutch Embroidery',
    'Ajrakh',
    'Gharchola',
    'Pochampally Ikat',
    'Odisha Ikat',
  ],
  stateOptions = ['Gujarat', 'Telangana', 'Odisha'],
  techniqueOptions = [
    'Double Ikat',
    'Tie-Dye',
    'Block Print',
    'Embroidery',
    'Satin Weave',
    'Bead Knotting',
    'Zari Grid Weave',
  ],
  materialOptions = ['Silk', 'Cotton', 'Wool', 'Zari', 'Natural Dyes'],
}) => {
  const activeFilterCount =
    (filters.textile && filters.textile !== 'all' ? 1 : 0) +
    (filters.state && filters.state !== 'all' ? 1 : 0) +
    (filters.technique && filters.technique !== 'all' ? 1 : 0) +
    (filters.material && filters.material !== 'all' ? 1 : 0) +
    (filters.query ? 1 : 0);

  return (
    <div className="bg-ivory rounded-xl border border-beige p-6 space-y-6 shadow-sm">
      {/* Primary Search Bar */}
      <div className="relative">
        <label htmlFor="search-input" className="sr-only">
          Search the Textile Archive
        </label>
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
        <input
          id="search-input"
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ query: e.target.value })}
          placeholder="Search by textile name, technique, state, or material (e.g., Patan Patola, Ikat)..."
          className="w-full pl-12 pr-10 py-3.5 rounded-lg border border-beige bg-beige/30 text-charcoal placeholder-charcoal/50 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo/20 focus:border-indigo transition-all shadow-inner"
        />
        {filters.query && (
          <button
            onClick={() => onChange({ query: '' })}
            aria-label="Clear query"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-madder transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggestion Chips */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-charcoal/70">
          <span className="font-semibold uppercase tracking-wider text-[11px] text-charcoal/60">
            Suggested Searches:
          </span>
          {activeFilterCount > 0 && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-madder hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Filters ({activeFilterCount})</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {SUGGESTION_CHIPS.map((chip) => {
            const isSelected =
              chip.field === 'query'
                ? filters.query.toLowerCase() === chip.value.toLowerCase()
                : (filters[chip.field as keyof SearchFilters] || '').toLowerCase() === chip.value.toLowerCase();

            return (
              <button
                key={chip.label}
                onClick={() => {
                  if (isSelected) {
                    onChange({ [chip.field]: chip.field === 'query' ? '' : 'all' });
                  } else {
                    onChange({ [chip.field]: chip.value });
                  }
                }}
                className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 ${
                  isSelected
                    ? 'bg-madder text-ivory border-madder shadow-sm font-medium'
                    : 'bg-beige/40 text-charcoal/80 border-beige hover:border-terracotta/40 hover:bg-beige/70'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-Way Dimensional Filter Controls */}
      <div className="pt-4 border-t border-beige/60">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-charcoal/70">
          <Filter className="w-3.5 h-3.5 text-indigo" />
          <span>Filter by Dimension</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. Filter by Textile */}
          <div className="space-y-1">
            <label htmlFor="filter-textile" className="block text-xs font-medium text-charcoal/70">
              Textile
            </label>
            <select
              id="filter-textile"
              value={filters.textile || 'all'}
              onChange={(e) => onChange({ textile: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-beige/20 border border-beige rounded-md text-charcoal focus:outline-none focus:border-indigo"
            >
              <option value="all">All Textiles</option>
              {textileOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Filter by State */}
          <div className="space-y-1">
            <label htmlFor="filter-state" className="block text-xs font-medium text-charcoal/70">
              State / Region
            </label>
            <select
              id="filter-state"
              value={filters.state || 'all'}
              onChange={(e) => onChange({ state: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-beige/20 border border-beige rounded-md text-charcoal focus:outline-none focus:border-indigo"
            >
              <option value="all">All States</option>
              {stateOptions.map((opt) => (
                <option key={opt} value={opt.toLowerCase()}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Filter by Technique */}
          <div className="space-y-1">
            <label htmlFor="filter-technique" className="block text-xs font-medium text-charcoal/70">
              Technique
            </label>
            <select
              id="filter-technique"
              value={filters.technique || 'all'}
              onChange={(e) => onChange({ technique: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-beige/20 border border-beige rounded-md text-charcoal focus:outline-none focus:border-indigo"
            >
              <option value="all">All Techniques</option>
              {techniqueOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Filter by Material */}
          <div className="space-y-1">
            <label htmlFor="filter-material" className="block text-xs font-medium text-charcoal/70">
              Material
            </label>
            <select
              id="filter-material"
              value={filters.material || 'all'}
              onChange={(e) => onChange({ material: e.target.value })}
              className="w-full py-2 px-3 text-xs bg-beige/20 border border-beige rounded-md text-charcoal focus:outline-none focus:border-indigo"
            >
              <option value="all">All Materials</option>
              {materialOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
