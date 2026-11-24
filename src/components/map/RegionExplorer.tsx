import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegionId } from '../../types/archive';
import { REGIONS, getStatesByRegion } from '../../data';
import { Compass, Sparkles, ArrowRight, Clock } from 'lucide-react';

export interface RegionExplorerProps {
  activeRegion?: RegionId | null;
  onSelectRegion?: (regionId: RegionId | null) => void;
  className?: string;
}

export const RegionExplorer: React.FC<RegionExplorerProps> = ({
  activeRegion = null,
  onSelectRegion,
  className = '',
}) => {
  const navigate = useNavigate();
  const [internalActiveRegion, setInternalActiveRegion] = useState<RegionId>('west');

  const currentRegionId = activeRegion || internalActiveRegion;
  const currentRegion = REGIONS.find((r) => r.id === currentRegionId) || REGIONS[0];
  const statesInRegion = getStatesByRegion(currentRegion.id);

  const handleRegionClick = (regionId: RegionId) => {
    setInternalActiveRegion(regionId);
    if (onSelectRegion) {
      onSelectRegion(regionId === activeRegion ? null : regionId);
    }
  };

  const handleStateClick = (slug: string) => {
    navigate(`/states/${slug}`);
  };

  return (
    <div className={`flex flex-col bg-ivory rounded-2xl border border-beige p-5 sm:p-6 shadow-sm space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-beige pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-madder flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-madder" />
            Explore by Region · 5 Cultural Geographies
          </span>
          <h2 className="font-serif text-2xl font-bold text-indigo mt-0.5">
            Regional Handloom Traditions
          </h2>
        </div>
        <div className="text-xs text-charcoal/70">
          Select a region to reveal its states and weaving centres
        </div>
      </div>

      {/* Region Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2" role="tablist" aria-label="India Regions">
        {REGIONS.map((region) => {
          const isSelected = currentRegionId === region.id;
          const stateCount = region.states.length;

          return (
            <button
              key={region.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleRegionClick(region.id)}
              className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-indigo text-ivory border-indigo shadow-md scale-[1.02]'
                  : 'bg-beige/40 text-charcoal border-beige hover:border-terracotta/40 hover:bg-beige/70'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`font-serif text-base font-bold ${isSelected ? 'text-ivory' : 'text-indigo'}`}>
                  {region.name}
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isSelected ? 'bg-turmeric text-charcoal' : 'bg-beige text-charcoal/80'
                  }`}
                >
                  {stateCount} {stateCount === 1 ? 'Entity' : 'Entities'}
                </span>
              </div>
              <span className={`text-[11px] line-clamp-1 mt-1 ${isSelected ? 'text-ivory/80' : 'text-charcoal/70'}`}>
                {region.tagline}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Region Overview Card */}
      <div className="p-4 rounded-xl bg-beige/30 border border-beige/80 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h3 className="font-serif text-lg font-bold text-indigo flex items-center gap-2">
            <span>{currentRegion.name} India</span>
            <span className="text-xs font-sans font-normal text-charcoal/60">
              ({statesInRegion.length} States & Union Territories)
            </span>
          </h3>
          <span className="text-xs font-serif italic text-madder font-medium">
            {currentRegion.tagline}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
          {currentRegion.description}
        </p>
      </div>

      {/* State & Union Territory Grid for Selected Region */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-3 flex items-center justify-between">
          <span>States & Union Territories in {currentRegion.name} India:</span>
          <span className="text-[11px] font-normal lowercase">click to open state archive</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {statesInRegion.map((state) => {
            const isGujarat = state.slug === 'gujarat';

            return (
              <button
                key={state.slug}
                data-state-slug={state.slug}
                onClick={() => handleStateClick(state.slug)}
                className={`group relative flex flex-col justify-between p-3.5 rounded-xl border text-left transition-all ${
                  isGujarat
                    ? 'bg-gradient-to-br from-ivory via-beige/40 to-ivory border-madder/70 shadow-sm hover:shadow-md hover:border-madder'
                    : 'bg-ivory border-beige hover:border-terracotta/50 hover:bg-beige/20 shadow-none'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <span className="font-serif text-sm font-bold text-indigo group-hover:text-madder transition-colors">
                      {state.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-beige/60 text-charcoal/70 shrink-0">
                      {state.code}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-charcoal/60">
                      {state.isUnionTerritory ? 'Union Territory' : 'State'}
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="pt-2 border-t border-beige/60 flex items-center justify-between text-[11px]">
                  {state.isFullyDeveloped ? (
                    <span className="inline-flex items-center gap-1 text-madder font-semibold">
                      <Sparkles className="w-3 h-3 text-turmeric shrink-0" />
                      <span>Complete Archive</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-charcoal/60">
                      <Clock className="w-3 h-3 text-charcoal/40 shrink-0" />
                      <span>In Progress</span>
                    </span>
                  )}
                  <ArrowRight className="w-3 h-3 text-charcoal/40 group-hover:text-madder group-hover:translate-x-0.5 transition-all" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
