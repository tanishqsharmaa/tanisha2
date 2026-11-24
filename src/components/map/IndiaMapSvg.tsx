import React, { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegionId } from '../../types/archive';
import { STATES_AND_UTS, getStateBySlug } from '../../data';
import { INDIA_MAP_PATHS, StateMapPath } from './indiaMapPaths';
import { Sparkles, RotateCcw, MapPin, ChevronRight } from 'lucide-react';

export interface IndiaMapSvgProps {
  selectedRegion?: RegionId | null;
  selectedState?: string | null;
  onSelectRegion?: (region: RegionId | null) => void;
  onSelectState?: (slug: string) => void;
  className?: string;
}

export const IndiaMapSvg: React.FC<IndiaMapSvgProps> = ({
  selectedRegion = null,
  selectedState = null,
  onSelectRegion,
  onSelectState,
  className = '',
}) => {
  const navigate = useNavigate();
  const rawId = useId();
  const filterId = `gujarat-glow-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const activeSlug = hoveredSlug || selectedState;
  const activeEntity = activeSlug ? getStateBySlug(activeSlug) : undefined;

  const handleStateClick = (slug: string) => {
    if (onSelectState) {
      onSelectState(slug);
    } else {
      navigate(`/states/${slug}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleStateClick(slug);
    }
  };

  const handleReset = () => {
    if (onSelectRegion) onSelectRegion(null);
    if (onSelectState) onSelectState('');
    setHoveredSlug(null);
  };

  const getRegionColor = (regionId: RegionId, isHovered: boolean, isSelected: boolean) => {
    if (isSelected) return '#A63D35'; // Madder
    if (isHovered) return '#D6A642'; // Turmeric

    switch (regionId) {
      case 'north':
        return '#E2D5C3';
      case 'south':
        return '#DFD1BD';
      case 'east':
        return '#DDD3C4';
      case 'west':
        return '#E5D6C1';
      case 'northeast':
        return '#D9CEBB';
      default:
        return '#E9DCC8';
    }
  };

  return (
    <div className={`relative flex flex-col bg-ivory rounded-2xl border border-beige p-4 sm:p-6 shadow-sm ${className}`}>
      {/* Map Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-2 border-b border-beige">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-madder flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-madder" />
            Cartographic Archive · 28 States & 8 Union Territories
          </span>
          <p className="text-xs text-charcoal/70 mt-0.5">
            Select a state to explore its textile heritage.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {selectedRegion && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-charcoal/80 bg-beige/60 hover:bg-beige rounded-md transition-colors"
              aria-label="Reset / Back to All Regions"
            >
              <RotateCcw className="w-3 h-3 text-madder" />
              Reset / Back to All Regions
            </button>
          )}
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full aspect-[1/1] sm:aspect-[1.05/1] max-h-[640px] flex items-center justify-center overflow-hidden rounded-xl bg-beige/20 border border-beige/60">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full object-contain select-none"
          role="img"
          aria-label="Interactive Map of India covering all 28 states and 8 union territories"
        >
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#A63D35" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Background decorative ocean grid */}
          <g opacity="0.12" stroke="#263B59" strokeWidth="0.5" strokeDasharray="3 6">
            <line x1="100" y1="200" x2="900" y2="200" />
            <line x1="100" y1="400" x2="900" y2="400" />
            <line x1="100" y1="600" x2="900" y2="600" />
            <line x1="100" y1="800" x2="900" y2="800" />
            <line x1="300" y1="50" x2="300" y2="950" />
            <line x1="500" y1="50" x2="500" y2="950" />
            <line x1="700" y1="50" x2="700" y2="950" />
          </g>

          {/* Watermark geographic labels */}
          <text x="180" y="700" fill="#263B59" opacity="0.12" fontSize="16" fontFamily="serif" fontStyle="italic">
            Arabian Sea
          </text>
          <text x="660" y="660" fill="#263B59" opacity="0.12" fontSize="16" fontFamily="serif" fontStyle="italic">
            Bay of Bengal
          </text>
          <text x="440" y="965" fill="#263B59" opacity="0.12" fontSize="16" fontFamily="serif" fontStyle="italic">
            Indian Ocean
          </text>

          {/* 36 Geographical State / UT Paths */}
          <g className="states-group">
            {INDIA_MAP_PATHS.map((item: StateMapPath) => {
              const isHovered = hoveredSlug === item.slug;
              const isSelected = selectedState === item.slug;
              const isRegionDimmed = selectedRegion && item.regionId !== selectedRegion;
              const isGujarat = item.slug === 'gujarat';

              const fillColor = isGujarat && !isSelected && !isHovered
                ? '#F2E5D0'
                : getRegionColor(item.regionId, isHovered, isSelected);

              const strokeColor = isSelected
                ? '#263B59'
                : isGujarat
                ? '#A63D35'
                : isHovered
                ? '#263B59'
                : '#7E7267';

              const strokeWidth = isSelected ? 2.5 : isGujarat ? 2.2 : isHovered ? 2 : 1;

              return (
                <path
                  key={item.slug}
                  d={item.path}
                  data-state-slug={item.slug}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.name} (${item.isUnionTerritory ? 'Union Territory' : 'State'})`}
                  filter={isGujarat ? `url(#${filterId})` : undefined}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  opacity={isRegionDimmed ? 0.35 : 1}
                  className="cursor-pointer transition-all duration-200 outline-none focus:stroke-indigo focus:stroke-[3px]"
                  onMouseEnter={(e) => {
                    setHoveredSlug(item.slug);
                    const rect = e.currentTarget.ownerSVGElement?.getBoundingClientRect();
                    if (rect) {
                      setTooltipPos({
                        x: (item.center[0] / 1000) * rect.width,
                        y: (item.center[1] / 1000) * rect.height,
                      });
                    }
                  }}
                  onMouseLeave={() => setHoveredSlug(null)}
                  onClick={() => handleStateClick(item.slug)}
                  onKeyDown={(e) => handleKeyDown(e, item.slug)}
                />
              );
            })}
          </g>

          {/* Callouts and Labels for Small Entities & Union Territories */}
          <g className="callouts-group">
            {INDIA_MAP_PATHS.filter((item) => item.callout).map((item) => {
              const callout = item.callout!;
              const isHovered = hoveredSlug === item.slug;
              const isSelected = selectedState === item.slug;
              const isRegionDimmed = selectedRegion && item.regionId !== selectedRegion;

              return (
                <g
                  key={`callout-${item.slug}`}
                  data-state-slug={item.slug}
                  data-testid={`callout-${item.slug}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.name} Callout`}
                  className="cursor-pointer outline-none"
                  opacity={isRegionDimmed ? 0.3 : 1}
                  onMouseEnter={() => setHoveredSlug(item.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  onClick={() => handleStateClick(item.slug)}
                  onKeyDown={(e) => handleKeyDown(e, item.slug)}
                >
                  {/* Connector Line */}
                  <line
                    x1={callout.lineStart[0]}
                    y1={callout.lineStart[1]}
                    x2={callout.lineEnd[0]}
                    y2={callout.lineEnd[1]}
                    stroke={isHovered || isSelected ? '#A63D35' : '#7E7267'}
                    strokeWidth={isHovered || isSelected ? 1.5 : 1}
                    strokeDasharray={item.isUnionTerritory ? '3 3' : undefined}
                  />

                  {/* Pin Dot */}
                  <circle
                    cx={callout.lineStart[0]}
                    cy={callout.lineStart[1]}
                    r={isHovered || isSelected ? 4 : 3}
                    fill={isHovered || isSelected ? '#A63D35' : '#263B59'}
                  />

                  {/* Callout Badge */}
                  <rect
                    x={callout.x - 4}
                    y={callout.y - 12}
                    width={item.name.length * 7.5 + 14}
                    height={20}
                    rx={4}
                    fill={isSelected ? '#A63D35' : isHovered ? '#D6A642' : '#F7F1E7'}
                    stroke={isHovered || isSelected ? '#263B59' : '#C4B59D'}
                    strokeWidth={1}
                  />
                  <text
                    x={callout.x + 3}
                    y={callout.y + 2}
                    fontSize="10"
                    fontWeight="600"
                    fill={isSelected ? '#F7F1E7' : '#263B59'}
                    fontFamily="sans-serif"
                  >
                    {item.name}
                  </text>
                </g>
              );
            })}
          </g>

          {/* Special Visual Badge on Map for Gujarat */}
          <g transform="translate(205, 425)" className="pointer-events-none select-none">
            <circle cx="10" cy="10" r="14" fill="#A63D35" fillOpacity="0.15" />
            <circle cx="10" cy="10" r="6" fill="#A63D35" />
            <circle cx="10" cy="10" r="2.5" fill="#D6A642" />
          </g>
        </svg>

        {/* Floating Tooltip */}
        {activeEntity && tooltipPos && (
          <div
            className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3.5 py-2 bg-indigo/95 backdrop-blur-sm text-ivory rounded-lg shadow-xl border border-terracotta/40 text-xs min-w-[190px] transition-all"
            style={{
              left: `${Math.min(Math.max(tooltipPos.x, 100), 450)}px`,
              top: `${Math.max(tooltipPos.y - 15, 60)}px`,
            }}
          >
            <div className="flex items-center justify-between gap-2 border-b border-ivory/20 pb-1 mb-1">
              <span className="font-serif font-bold text-sm tracking-wide text-ivory">
                {activeEntity.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 bg-beige/20 rounded text-turmeric font-semibold">
                {activeEntity.regionName}
              </span>
            </div>

            {activeEntity.isFullyDeveloped ? (
              <div className="flex items-center gap-1.5 text-turmeric font-medium text-[11px] mt-1">
                <Sparkles className="w-3.5 h-3.5 text-turmeric shrink-0" />
                <span>Complete Archive Available</span>
              </div>
            ) : (
              <p className="text-[11px] text-ivory/80 italic">
                Textile information is being added
              </p>
            )}

            <div className="mt-1 text-[10px] text-ivory/60 flex items-center justify-between">
              <span>{activeEntity.isUnionTerritory ? 'Union Territory' : 'State'}</span>
              <span className="text-terracotta">Click to view →</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend & Summary Card */}
      <div className="mt-4 pt-3 border-t border-beige flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-charcoal/80">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-sm bg-madder border border-indigo inline-block" />
            <span className="text-[11px]">Selected State</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-sm bg-[#F2E5D0] border-2 border-madder inline-block" />
            <span className="text-[11px] font-semibold text-madder">
              Gujarat (Complete Archive)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-sm bg-beige border border-charcoal/40 inline-block" />
            <span className="text-[11px]">States & UTs in Progress</span>
          </div>
        </div>

        <div className="text-[11px] text-charcoal/70">
          Showing <strong className="text-indigo font-bold">36</strong> administrative entities (28 States + 8 UTs)
        </div>
      </div>

      {/* Accessible & Mobile-Friendly State Selector Alternative */}
      <div className="mt-4 pt-3 border-t border-beige/60">
        <label htmlFor="mobile-state-select" className="block text-xs font-semibold text-charcoal/90 mb-1.5">
          Fast State Directory (Accessible Alternative):
        </label>
        <div className="flex items-center gap-2">
          <select
            id="mobile-state-select"
            value={selectedState || ''}
            onChange={(e) => {
              if (e.target.value) handleStateClick(e.target.value);
            }}
            className="w-full text-xs bg-beige/40 border border-beige hover:border-terracotta focus:ring-1 focus:ring-madder rounded-lg px-3 py-2 text-charcoal outline-none transition-colors"
          >
            <option value="">-- Choose any State or Union Territory --</option>
            {STATES_AND_UTS.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} ({s.regionName}) {s.isFullyDeveloped ? '★ Complete Archive' : ''}
              </option>
            ))}
          </select>
          {selectedState && (
            <button
              onClick={() => handleStateClick(selectedState)}
              className="px-3 py-2 bg-indigo hover:bg-madder text-ivory rounded-lg text-xs font-medium tracking-wide transition-colors shrink-0 flex items-center gap-1"
            >
              <span>View</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
