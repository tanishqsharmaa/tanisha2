import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, RotateCcw } from 'lucide-react';
import { searchTextiles } from '../../data';
import { TextileCard } from '../shared/TextileCard';

export const FindYourTextileSection: React.FC = () => {
  const navigate = useNavigate();

  const [textileQuery, setTextileQuery] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedTechnique, setSelectedTechnique] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [hasSearched, setHasSearched] = useState(false);

  // Compute matching results dynamically
  const matchingResults = useMemo(() => {
    return searchTextiles(textileQuery, {
      state: selectedState !== 'all' ? selectedState : undefined,
      technique: selectedTechnique !== 'all' ? selectedTechnique : undefined,
      material: selectedMaterial !== 'all' ? selectedMaterial : undefined,
    });
  }, [textileQuery, selectedState, selectedTechnique, selectedMaterial]);

  const handleSearchClick = () => {
    setHasSearched(true);
  };

  const handleNavigateToSearch = () => {
    const params = new URLSearchParams();
    if (textileQuery) params.set('q', textileQuery);
    if (selectedState !== 'all') params.set('state', selectedState);
    if (selectedTechnique !== 'all') params.set('technique', selectedTechnique);
    if (selectedMaterial !== 'all') params.set('material', selectedMaterial);
    navigate(`/search?${params.toString()}`);
  };

  const handleReset = () => {
    setTextileQuery('');
    setSelectedState('all');
    setSelectedTechnique('all');
    setSelectedMaterial('all');
    setHasSearched(false);
  };

  const isFiltered =
    textileQuery.trim() !== '' ||
    selectedState !== 'all' ||
    selectedTechnique !== 'all' ||
    selectedMaterial !== 'all';

  return (
    <section className="bg-ivory rounded-2xl border border-beige p-6 sm:p-10 shadow-sm space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-beige/60 border border-beige text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-turmeric" />
          <span>Interactive Discovery</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
          Find Your Textile
        </h2>
        <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
          Search the archival repository across four distinct discovery paths: by textile name, geographic state of origin,
          artisan technique, or indigenous material.
        </p>
      </div>

      {/* 4-Way Method Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-beige/30 p-6 rounded-xl border border-beige/80">
        {/* Method 1: Search by Textile */}
        <div className="space-y-2">
          <label htmlFor="home-search-textile" className="block text-xs font-bold uppercase tracking-wider text-indigo">
            1. Search by Textile
          </label>
          <input
            id="home-search-textile"
            type="text"
            value={textileQuery}
            onChange={(e) => setTextileQuery(e.target.value)}
            placeholder="e.g. Patan Patola, Bandhani"
            className="w-full px-3 py-2.5 text-xs bg-ivory border border-beige rounded-md text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo"
          />
          <div className="flex flex-wrap gap-1 pt-1">
            {['Patan Patola', 'Bandhani', 'Ajrakh'].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => setTextileQuery(sample)}
                className="text-[10px] px-2 py-0.5 bg-ivory/80 hover:bg-beige text-charcoal/70 rounded border border-beige transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Method 2: Search by State */}
        <div className="space-y-2">
          <label htmlFor="home-search-state" className="block text-xs font-bold uppercase tracking-wider text-indigo">
            2. Search by State
          </label>
          <select
            id="home-search-state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-3 py-2.5 text-xs bg-ivory border border-beige rounded-md text-charcoal focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo"
          >
            <option value="all">All States</option>
            <option value="gujarat">Gujarat</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="telangana">Telangana</option>
            <option value="odisha">Odisha</option>
            <option value="assam">Assam</option>
            <option value="tamil-nadu">Tamil Nadu</option>
          </select>
          <p className="text-[11px] text-charcoal/60">Explore regional weaving clusters</p>
        </div>

        {/* Method 3: Search by Technique */}
        <div className="space-y-2">
          <label htmlFor="home-search-technique" className="block text-xs font-bold uppercase tracking-wider text-indigo">
            3. Search by Technique
          </label>
          <select
            id="home-search-technique"
            value={selectedTechnique}
            onChange={(e) => setSelectedTechnique(e.target.value)}
            className="w-full px-3 py-2.5 text-xs bg-ivory border border-beige rounded-md text-charcoal focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo"
          >
            <option value="all">All Techniques</option>
            <option value="Double Ikat">Double Ikat</option>
            <option value="Tie-Dye">Tie-Dye (Resist Dyeing)</option>
            <option value="Block Print">Block Printing</option>
            <option value="Embroidery">Surface Embroidery</option>
            <option value="Satin Weave">Mixed Satin Weave</option>
            <option value="Bead Knotting">Bead Knotting (Daana)</option>
            <option value="Zari Grid">Zari Grid Weave</option>
          </select>
          <p className="text-[11px] text-charcoal/60">Discover looms & dye methods</p>
        </div>

        {/* Method 4: Search by Material */}
        <div className="space-y-2">
          <label htmlFor="home-search-material" className="block text-xs font-bold uppercase tracking-wider text-indigo">
            4. Search by Material
          </label>
          <select
            id="home-search-material"
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full px-3 py-2.5 text-xs bg-ivory border border-beige rounded-md text-charcoal focus:outline-none focus:ring-1 focus:ring-indigo focus:border-indigo"
          >
            <option value="all">All Materials</option>
            <option value="Silk">Mulberry & Wild Silk</option>
            <option value="Cotton">Indigenous Cotton</option>
            <option value="Wool">Desi Wool & Pashmina</option>
            <option value="Zari">Gold / Silver Zari</option>
            <option value="Natural Dyes">Botanical & Mineral Dyes</option>
          </select>
          <p className="text-[11px] text-charcoal/60">Identify natural raw fibers</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSearchClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo text-ivory text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-indigo/90 shadow-sm transition-all"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>

          {isFiltered && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-beige/50 text-charcoal/80 text-xs font-medium uppercase tracking-wider rounded-md hover:bg-beige transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={handleNavigateToSearch}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-madder hover:text-madder/80 transition-colors"
        >
          <span>Open Full Search Archive Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Inline Matching Results (when filtered or searched) */}
      {(hasSearched || isFiltered) && (
        <div className="space-y-4 pt-4 border-t border-beige/60 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-indigo">
              Matching Textiles ({matchingResults.length})
            </h3>
            <span className="text-xs text-charcoal/60">
              Showing archive entries matching selected filters
            </span>
          </div>

          {matchingResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingResults.map((textile) => (
                <TextileCard key={textile.slug} textile={textile} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-beige/30 rounded-xl border border-beige space-y-2">
              <p className="font-serif text-base text-charcoal/80">No matching textiles found for your criteria</p>
              <p className="text-xs text-charcoal/60">
                Try searching for "Patan Patola", choosing "Gujarat", or resetting your filters.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-2 text-xs font-semibold text-madder uppercase tracking-wider hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
