import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegionId } from '../types/archive';
import { TEXTILE_CATEGORIES, getTextilesByCategory } from '../data';
import { IndiaMapSvg } from '../components/map/IndiaMapSvg';
import { RegionExplorer } from '../components/map/RegionExplorer';
import {
  PatolaDiamondPattern,
  IkatChevronPattern,
  BandhaniDotPattern,
  BlockPrintFloral,
  TextileBorderDivider,
} from '../components/motifs/TextileMotifs';
import { Layers, Compass, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const renderCategoryMotif = (motifType: string) => {
    switch (motifType) {
      case 'patola':
        return <PatolaDiamondPattern className="w-full h-5 opacity-70" />;
      case 'ikat':
        return <IkatChevronPattern className="w-full h-5 opacity-70" />;
      case 'bandhani':
        return <BandhaniDotPattern className="w-full h-5 opacity-70" />;
      case 'blockprint':
        return <BlockPrintFloral className="w-5 h-5 text-madder" />;
      default:
        return <IkatChevronPattern className="w-full h-5 opacity-40" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Editorial Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-beige/60 text-charcoal border border-beige">
          <BookOpen className="w-3.5 h-3.5 text-madder" />
          Interactive Curatorial Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo tracking-tight">
          Explore India's Textile Heritage
        </h1>
        <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
          Discover the rich handloom geography of India through two complementary archival frameworks:
          journey geographically across <strong className="text-indigo font-semibold">5 cultural regions and 36 states and union territories</strong>,
          or investigate technique and material through <strong className="text-indigo font-semibold">15 master textile classifications</strong>.
        </p>

        {/* Archival Metrics Bar */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-center">
          <div className="p-3 bg-ivory rounded-xl border border-beige shadow-sm">
            <span className="font-serif text-2xl font-bold text-madder">5</span>
            <p className="text-[11px] uppercase tracking-wider text-charcoal/70 mt-0.5">Regions</p>
          </div>
          <div className="p-3 bg-ivory rounded-xl border border-beige shadow-sm">
            <span className="font-serif text-2xl font-bold text-indigo">36</span>
            <p className="text-[11px] uppercase tracking-wider text-charcoal/70 mt-0.5">States & UTs</p>
          </div>
          <div className="p-3 bg-ivory rounded-xl border border-beige shadow-sm">
            <span className="font-serif text-2xl font-bold text-turmeric">15</span>
            <p className="text-[11px] uppercase tracking-wider text-charcoal/70 mt-0.5">Classifications</p>
          </div>
          <div className="p-3 bg-ivory rounded-xl border border-beige shadow-sm">
            <span className="font-serif text-2xl font-bold text-forest">100%</span>
            <p className="text-[11px] uppercase tracking-wider text-charcoal/70 mt-0.5">Authentic Archive</p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION A: EXPLORE BY REGION (Cartographic & Directory)  */}
      {/* ======================================================== */}
      <section id="explore-by-region" className="space-y-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-beige pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-madder mb-1">
              <Compass className="w-4 h-4 text-madder" />
              <span>Section A · Geographical Atlas</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
              Explore by Region
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-2xl">
              An interactive geographical projection of India's textile ecology. Hover or click any of the 36 states or union territories
              on the map, or browse by cultural zone.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/states/gujarat"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-madder text-ivory shadow-sm hover:bg-madder/90 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-turmeric" />
              <span>Featured: Gujarat Complete Archive</span>
            </Link>
          </div>
        </div>

        {/* Dual Geographical Panel: Map & Region Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive SVG Map (Col 1-7) */}
          <div className="lg:col-span-7">
            <IndiaMapSvg
              selectedRegion={selectedRegion}
              selectedState={selectedState}
              onSelectRegion={(reg) => setSelectedRegion(reg)}
              onSelectState={(st) => setSelectedState(st)}
            />
          </div>

          {/* Region Explorer Directory (Col 8-12) */}
          <div className="lg:col-span-5">
            <RegionExplorer
              activeRegion={selectedRegion}
              onSelectRegion={(reg) => setSelectedRegion(reg)}
            />
          </div>
        </div>
      </section>

      <TextileBorderDivider title="Curatorial Classification" />

      {/* ======================================================== */}
      {/* SECTION B: TEXTILE CLASSIFICATION (15 Archival Classes)  */}
      {/* ======================================================== */}
      <section id="textile-classification" className="space-y-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-beige pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-madder mb-1">
              <Layers className="w-4 h-4 text-madder" />
              <span>Section B · Taxonomy of Craft</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
              Textile Classification
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-2xl">
              All 15 master categories classifying the handwoven, resist-dyed, embroidered, and painted textiles of India.
            </p>
          </div>

          <div className="text-xs font-serif italic text-charcoal/70">
            15 Curated Categories · Structural & Decorative Typology
          </div>
        </div>

        {/* 15 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEXTILE_CATEGORIES.map((category) => {
            const categoryTextiles = getTextilesByCategory(category.slug);
            const hasPatanPatola = category.textileSlugs.includes('patan-patola');

            return (
              <div
                key={category.slug}
                data-testid={`category-card-${category.slug}`}
                className={`flex flex-col justify-between bg-ivory rounded-xl border p-5 transition-all duration-300 ${
                  hasPatanPatola
                    ? 'border-madder/60 shadow-md hover:border-madder'
                    : 'border-beige hover:border-terracotta/50 shadow-sm hover:shadow'
                }`}
              >
                <div>
                  {/* Category Top Banner & Number */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-madder px-2 py-0.5 rounded bg-beige/60">
                      {String(category.number).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-charcoal/60 font-semibold">
                      {categoryTextiles.length} {categoryTextiles.length === 1 ? 'Tradition' : 'Traditions'}
                    </span>
                  </div>

                  {/* Motif Pattern Preview */}
                  <div className="mb-3 py-1 px-2 bg-beige/25 rounded border border-beige/40 overflow-hidden flex items-center justify-center">
                    {renderCategoryMotif(category.motifType)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg font-bold text-indigo mb-2 line-clamp-1">
                    {category.title}
                  </h3>
                  <p className="text-xs text-charcoal/75 leading-relaxed line-clamp-3 mb-4">
                    {category.shortDescription}
                  </p>

                  {/* Featured Textile Cards under this Category */}
                  {categoryTextiles.length > 0 ? (
                    <div className="space-y-3 mb-4 pt-3 border-t border-beige/60">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal/60 block">
                        Featured Traditions:
                      </span>
                      <div className="grid grid-cols-1 gap-2.5">
                        {categoryTextiles.slice(0, 2).map((textile) => (
                          <div
                            key={textile.slug}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-beige/30 border border-beige/70 text-xs"
                          >
                            <div className="min-w-0 pr-2">
                              <Link
                                to={`/textiles/${textile.slug}`}
                                className="font-serif font-bold text-indigo hover:text-madder block truncate transition-colors"
                              >
                                {textile.name}
                              </Link>
                              <span className="text-[10px] text-charcoal/60 truncate block">
                                {textile.stateName} · {textile.technique}
                              </span>
                            </div>
                            <Link
                              to={`/textiles/${textile.slug}`}
                              className={`shrink-0 px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                                textile.isFullyDeveloped
                                  ? 'bg-madder text-ivory hover:bg-madder/90'
                                  : 'bg-beige/80 text-charcoal hover:bg-beige'
                              }`}
                            >
                              {textile.isFullyDeveloped ? 'Full Archive' : 'Preview'}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-beige/20 rounded-lg border border-beige/50 text-[11px] text-charcoal/60 italic mb-4">
                      Archival field documentation in progress · Detailed records coming soon.
                    </div>
                  )}
                </div>

                {/* Footer Action Link */}
                <div className="pt-3 border-t border-beige/70">
                  <Link
                    to={`/classification/${category.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-indigo hover:text-madder transition-colors"
                  >
                    <span>Explore Category Archive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
