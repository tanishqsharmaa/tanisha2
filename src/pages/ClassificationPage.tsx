import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  TEXTILE_CATEGORIES,
  getCategoryBySlug,
  getTextilesByCategory,
} from '../data';
import { TextileCard } from '../components/shared/TextileCard';
import {
  PatolaDiamondPattern,
  IkatChevronPattern,
  BandhaniDotPattern,
  TextileBorderDivider,
} from '../components/motifs/TextileMotifs';
import {
  Sparkles,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';

const ClassificationPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  // Handle normalization for alias (e.g. ikat-tie-dye-block-printed -> ikat-tie-dye-and-block-printed-textiles)
  const normalizedSlug =
    categorySlug === 'ikat-tie-dye-block-printed'
      ? 'ikat-tie-dye-and-block-printed-textiles'
      : (categorySlug || 'ikat-tie-dye-and-block-printed-textiles');

  const currentCategory =
    getCategoryBySlug(normalizedSlug) ||
    TEXTILE_CATEGORIES.find((c) => c.slug === normalizedSlug) ||
    TEXTILE_CATEGORIES[3]; // Default to Category 4: Ikat, Tie-Dye & Block-Printed

  const textiles = getTextilesByCategory(currentCategory.slug);

  const renderPatternBanner = (motifType: string) => {
    switch (motifType) {
      case 'ikat':
        return <IkatChevronPattern className="w-full h-8 opacity-70" />;
      case 'bandhani':
        return <BandhaniDotPattern className="w-full h-6 opacity-70" />;
      case 'patola':
        return <PatolaDiamondPattern className="w-full h-7 opacity-70" />;
      default:
        return <PatolaDiamondPattern className="w-full h-7 opacity-50" />;
    }
  };

  return (
    <div className="min-h-screen bg-ivory pb-20 space-y-10">
      {/* Editorial Decorative Ribbon */}
      <div className="bg-beige/40 border-b border-beige/60 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-charcoal/70">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-madder" />
            <span className="font-semibold uppercase tracking-wider">
              Archival Taxonomy · 15 Major Categories
            </span>
          </div>
          <span className="font-mono text-charcoal/50">
            Category {currentCategory.number} of 15
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Heading & Breadcrumb Header */}
        <div className="space-y-3 border-b border-beige/80 pb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rotate-45 bg-madder" />
            <span className="text-xs font-semibold uppercase tracking-widest text-madder">
              Taxonomic Framework
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo">
            Textile Classification
          </h1>
          <p className="font-serif text-base sm:text-lg text-charcoal/80 italic max-w-3xl">
            A comprehensive structural categorization of Indian textiles by weave technique, fiber origin, surface ornamentation, and ceremonial function.
          </p>
        </div>

        {/* Category Switcher: All 15 Categories */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal/70">
              Browse Categories (1–15)
            </span>
            <span className="text-xs text-charcoal/50 italic">
              Click to inspect classification
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {TEXTILE_CATEGORIES.map((cat) => {
              const isSelected = cat.slug === currentCategory.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => navigate(`/classification/${cat.slug}`)}
                  className={`text-left p-2.5 rounded-lg border text-xs transition-all flex flex-col justify-between min-h-[72px] ${
                    isSelected
                      ? 'bg-indigo text-ivory border-indigo shadow-md ring-1 ring-indigo'
                      : 'bg-ivory hover:bg-beige/40 text-charcoal border-beige/80 hover:border-terracotta/40'
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isSelected ? 'text-turmeric' : 'text-charcoal/50'
                    }`}
                  >
                    CAT {String(cat.number).padStart(2, '0')}
                  </span>
                  <span className="font-serif font-semibold line-clamp-2 leading-tight mt-1">
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Feature Plate */}
        <div className="bg-ivory rounded-2xl border border-beige/90 overflow-hidden shadow-sm">
          {/* Representative Motif Banner */}
          <div className="bg-beige/30 p-3 border-b border-beige/70">
            {renderPatternBanner(currentCategory.motifType)}
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-beige/60 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-madder/10 text-madder">
                  <Sparkles className="w-3.5 h-3.5" />
                  Category {currentCategory.number}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo mt-1">
                  {currentCategory.title}
                </h2>
              </div>

              <div className="text-xs text-charcoal/70 bg-beige/30 px-3 py-1.5 rounded-lg border border-beige self-start sm:self-auto font-mono">
                {textiles.length} {textiles.length === 1 ? 'Textile Record' : 'Textile Records'} Catalogued
              </div>
            </div>

            <p className="text-base sm:text-lg text-charcoal/85 font-serif leading-relaxed max-w-4xl">
              {currentCategory.shortDescription}
            </p>

            {/* Special Highlight for Category 4: Patan Patola */}
            {currentCategory.slug === 'ikat-tie-dye-and-block-printed-textiles' && (
              <div className="p-5 bg-beige/30 rounded-xl border border-beige/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-madder">
                    <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                    <span>Featured Anchor Textile</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-indigo">
                    Patan Patola — The Double Ikat Silk Tradition
                  </h3>
                  <p className="text-xs text-charcoal/80 max-w-2xl font-sans">
                    The supreme expression of double-ikat resist dyeing in India, featuring identical razor-sharp geometric motifs on both sides of pure mulberry silk.
                  </p>
                </div>

                <Link
                  to="/textiles/patan-patola"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-madder text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-indigo transition-colors shadow-sm flex-shrink-0"
                >
                  <span>Explore Patan Patola</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>

        <TextileBorderDivider title={`Catalogued Textiles (${textiles.length})`} />

        {/* Textiles Collection Grid */}
        {textiles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {textiles.map((t) => (
              <TextileCard key={t.slug} textile={t} />
            ))}
          </div>
        ) : (
          /* Honest Empty State for In-Progress Categories */
          <div className="p-12 bg-beige/20 rounded-2xl border-2 border-dashed border-beige text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-beige/50 mx-auto flex items-center justify-center text-charcoal/50">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-indigo">
                Textile records are being catalogued
              </h3>
              <p className="text-sm text-charcoal/70 max-w-md mx-auto font-sans">
                Our curatorial team is compiling verified primary source entries, GI documentation, and high-resolution plates for {currentCategory.title}.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/classification/ikat-tie-dye-and-block-printed-textiles"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-madder transition-colors"
              >
                <span>View Ikat, Tie-Dye & Block-Printed Textiles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassificationPage;
