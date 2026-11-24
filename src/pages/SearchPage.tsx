import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchTextiles } from '../data';
import { SearchControls, SearchFilters } from '../components/search/SearchControls';
import { TextileCard } from '../components/shared/TextileCard';
import { Sparkles, RotateCcw } from 'lucide-react';
import { TextileBorderDivider } from '../components/motifs/TextileMotifs';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read current filters from URL search params
  const filters: SearchFilters = useMemo(() => {
    return {
      query: searchParams.get('q') || '',
      textile: searchParams.get('textile') || 'all',
      state: searchParams.get('state') || 'all',
      technique: searchParams.get('technique') || 'all',
      material: searchParams.get('material') || 'all',
    };
  }, [searchParams]);

  // Update filters in URL
  const handleFilterChange = (updated: Partial<SearchFilters>) => {
    const nextParams = new URLSearchParams(searchParams);

    const merged = { ...filters, ...updated };

    if (merged.query) nextParams.set('q', merged.query);
    else nextParams.delete('q');

    if (merged.textile && merged.textile !== 'all') nextParams.set('textile', merged.textile);
    else nextParams.delete('textile');

    if (merged.state && merged.state !== 'all') nextParams.set('state', merged.state);
    else nextParams.delete('state');

    if (merged.technique && merged.technique !== 'all') nextParams.set('technique', merged.technique);
    else nextParams.delete('technique');

    if (merged.material && merged.material !== 'all') nextParams.set('material', merged.material);
    else nextParams.delete('material');

    setSearchParams(nextParams);
  };

  const handleReset = () => {
    setSearchParams(new URLSearchParams());
  };

  // Perform case-insensitive search and multidimensional filter
  const matchingTextiles = useMemo(() => {
    return searchTextiles(filters.query, {
      textile: filters.textile !== 'all' ? filters.textile : undefined,
      state: filters.state !== 'all' ? filters.state : undefined,
      technique: filters.technique !== 'all' ? filters.technique : undefined,
      material: filters.material !== 'all' ? filters.material : undefined,
    });
  }, [filters]);

  const hasActiveFilters =
    Boolean(filters.query) ||
    filters.textile !== 'all' ||
    filters.state !== 'all' ||
    filters.technique !== 'all' ||
    filters.material !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-20">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/60 border border-beige text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-turmeric" />
          <span>Living Handloom Catalog</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo tracking-tight">
          Search the Textile Archive
        </h1>
        <p className="text-sm sm:text-base text-charcoal/70 max-w-2xl font-sans leading-relaxed">
          Query across India's textile heritage by name, state of origin, weaving technique, or natural material.
          All searches are case-insensitive and update dynamically.
        </p>
      </div>

      {/* Search Controls & Dimensional Filters */}
      <SearchControls
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-beige pb-4 pt-2">
        <div className="flex items-center gap-2">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-indigo">
            Archive Results
          </h2>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-beige text-charcoal">
            {matchingTextiles.length} {matchingTextiles.length === 1 ? 'textile' : 'textiles'}
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-madder hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Results Grid or Empty State */}
      {matchingTextiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingTextiles.map((textile) => (
            <TextileCard key={textile.slug} textile={textile} />
          ))}
        </div>
      ) : (
        /* Helpful Empty State */
        <div className="text-center py-16 px-4 bg-beige/20 rounded-2xl border border-beige space-y-4 max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-beige/60 border border-beige mx-auto flex items-center justify-center text-charcoal/60">
            <RotateCcw className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-indigo">
            No matching textiles found in the archive
          </h3>
          <p className="text-sm text-charcoal/70 leading-relaxed font-sans max-w-md mx-auto">
            We couldn't find any textile records matching your query or filter combination.
            Try adjusting your search terms or resetting the filter options.
          </p>
          <div className="pt-2">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-madder text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-madder/90 transition-all shadow-sm"
            >
              <span>Clear All Filters & Reset</span>
            </button>
          </div>
          <div className="pt-4 border-t border-beige/60 text-xs text-charcoal/60">
            <span>Or explore by geographic territory in the </span>
            <Link to="/explore" className="text-indigo font-semibold hover:underline">
              Explore Section →
            </Link>
          </div>
        </div>
      )}

      <TextileBorderDivider title="Threads of Heritage" />
    </div>
  );
};

export default SearchPage;
