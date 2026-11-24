import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStateBySlug, getTextileBySlug } from '../data';
import { TextileRecord } from '../types/archive';
import { TextileCard } from '../components/shared/TextileCard';
import {
  PatolaDiamondPattern,
  TextileBorderDivider,
} from '../components/motifs/TextileMotifs';
import {
  Sparkles,
  Clock,
  ArrowLeft,
  Compass,
  Building2,
  ShieldCheck,
} from 'lucide-react';

const StatePage: React.FC = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const state = getStateBySlug(stateSlug || '');

  if (!state) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-indigo">
          State or Territory Not Found
        </h1>
        <p className="text-sm text-charcoal/70">
          The requested administrative entity does not match our current archival records.
        </p>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-madder transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Interactive Map</span>
        </Link>
      </div>
    );
  }

  // ==========================================================
  // CASE 1: GUJARAT (isFullyDeveloped: true)
  // ==========================================================
  if (state.isFullyDeveloped || state.slug === 'gujarat') {
    const gujaratTextiles: TextileRecord[] = state.textileSlugs
      .map((slug) => getTextileBySlug(slug))
      .filter((t): t is TextileRecord => Boolean(t));

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* State Editorial Hero */}
        <div className="relative rounded-2xl bg-gradient-to-br from-ivory via-beige/50 to-ivory border border-beige p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-madder text-ivory shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                Complete State Archive
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-beige text-charcoal/80 border border-beige">
                Region: {state.regionName}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-beige text-charcoal/80 border border-beige">
                {gujaratTextiles.length} Documented Traditions
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo tracking-tight leading-tight">
              {state.heroHeading || 'Gujarat — A Legacy of Colour, Craft and Weaving'}
            </h1>

            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
              {state.heroSubtitle ||
                "From intricate double ikat weaving to resist-dyed fabrics and traditional embroidery, Gujarat's textile heritage reflects generations of craftsmanship and cultural expression."}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/textiles/patan-patola"
                className="inline-flex items-center gap-2 px-4 py-2 bg-madder hover:bg-madder/90 text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                <span>Explore Patan Patola Archive</span>
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-beige/60 hover:bg-beige text-charcoal rounded-lg text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-madder" />
                <span>Back to Map of India</span>
              </Link>
            </div>
          </div>

          {/* Decorative Motif Watermark */}
          <div className="absolute right-0 bottom-0 w-80 h-40 opacity-15 pointer-events-none select-none">
            <PatolaDiamondPattern className="w-full h-full" />
          </div>
        </div>

        {/* State Curatorial Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-ivory rounded-xl border border-beige p-6 sm:p-8 space-y-4 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-indigo">
              Cultural Heritage & Artisanal Geography
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal/85 leading-relaxed">
              {state.introduction && state.introduction.length > 0 ? (
                state.introduction.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>
                  Gujarat occupies a distinguished position in the history of world textiles. With a maritime trading
                  lineage stretching back millennia to the Harappan port of Lothal, Gujarati artisans transformed raw
                  cotton and imported silk into legendary export fabrics.
                </p>
              )}
            </div>
          </div>

          {/* Key Craft Centres Sidebar */}
          <div className="lg:col-span-4 bg-beige/30 rounded-xl border border-beige/80 p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-indigo flex items-center gap-2">
              <Building2 className="w-4 h-4 text-madder" />
              <span>Key Gujarat Craft Centres</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-lg bg-ivory border border-beige">
                <span className="font-serif font-bold text-indigo block">Patan</span>
                <span className="text-charcoal/70">Master Double Ikat Silk (Patan Patola)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-ivory border border-beige">
                <span className="font-serif font-bold text-indigo block">Jamnagar</span>
                <span className="text-charcoal/70">Fine Resist Bandhani & Tie-Dye</span>
              </div>
              <div className="p-2.5 rounded-lg bg-ivory border border-beige">
                <span className="font-serif font-bold text-indigo block">Kutch & Bhuj</span>
                <span className="text-charcoal/70">Ajrakh Block Print, Kutch Embroidery, Mashru</span>
              </div>
              <div className="p-2.5 rounded-lg bg-ivory border border-beige">
                <span className="font-serif font-bold text-indigo block">Surendranagar</span>
                <span className="text-charcoal/70">Tangaliya Danano Raised Dot Weaving</span>
              </div>
            </div>
          </div>
        </section>

        <TextileBorderDivider title="Living Textile Traditions" />

        {/* Gujarat Textile Collection Grid (7 Textiles) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-beige pb-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-madder">
                Documented Handloom Traditions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo mt-0.5">
                Living Textile Traditions of Gujarat
              </h2>
            </div>
            <p className="text-xs text-charcoal/70 max-w-md">
              Explore all 7 verified textile traditions of Gujarat, featuring the master Patan Patola archive alongside verified curatorial previews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gujaratTextiles.map((textile) => (
              <TextileCard key={textile.slug} textile={textile} />
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ==========================================================
  // CASE 2: ALL OTHER 35 STATES & UNION TERRITORIES (Honest Placeholder)
  // ==========================================================
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* State Header Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-ivory border border-beige shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-beige pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
              Regional Handloom Archive
            </span>
            <span className="text-charcoal/40">·</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-beige text-charcoal/80 border border-beige">
              {state.regionName} India
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-beige text-charcoal/80 border border-beige">
              {state.isUnionTerritory ? 'Union Territory' : 'State'}
            </span>
          </div>

          <span className="font-mono text-xs px-2 py-1 rounded bg-beige/70 text-charcoal/70 font-semibold">
            ISO Code: {state.code}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
            {state.name}
          </h1>
          <p className="text-xs sm:text-sm text-charcoal/75 font-sans max-w-2xl">
            Administrative entity within the <strong className="text-indigo font-semibold">{state.regionName} Region</strong> of India.
            Documentation of local weaving clusters, indigenous looms, and craft lineages is actively being curated.
          </p>
        </div>
      </div>

      {/* Honest Archival Placeholder Card */}
      <div className="p-8 sm:p-12 bg-beige/25 rounded-2xl border border-beige text-center space-y-4">
        <div className="w-12 h-12 mx-auto rounded-full bg-ivory border border-beige flex items-center justify-center shadow-sm">
          <Clock className="w-6 h-6 text-terracotta" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-indigo">
          Textile information is being added
        </h2>

        <p className="text-xs sm:text-sm text-charcoal/75 max-w-xl mx-auto leading-relaxed">
          Our curators, textile historians, and field researchers are actively compiling field-verified records,
          botanical dye profiles, and loom traditions for {state.name}. In accordance with archival integrity standards,
          only verified documentation is published.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo hover:bg-madder text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Return to Interactive Map</span>
          </Link>
          <Link
            to="/states/gujarat"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-ivory hover:bg-beige text-charcoal border border-beige rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-madder" />
            <span>Explore Complete Gujarat Archive</span>
          </Link>
        </div>
      </div>

      {/* Verified Geographic & Administrative Card */}
      <div className="p-6 bg-ivory rounded-xl border border-beige grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-3 rounded-lg bg-beige/30 border border-beige/60">
          <span className="text-[10px] uppercase tracking-wider text-charcoal/60 block mb-1">
            Geographical Zone
          </span>
          <span className="font-serif font-bold text-sm text-indigo">
            {state.regionName} India
          </span>
        </div>
        <div className="p-3 rounded-lg bg-beige/30 border border-beige/60">
          <span className="text-[10px] uppercase tracking-wider text-charcoal/60 block mb-1">
            Classification Status
          </span>
          <span className="font-serif font-bold text-sm text-terracotta flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Under Archival Review</span>
          </span>
        </div>
        <div className="p-3 rounded-lg bg-beige/30 border border-beige/60">
          <span className="text-[10px] uppercase tracking-wider text-charcoal/60 block mb-1">
            Integrity Standard
          </span>
          <span className="font-serif font-bold text-sm text-forest flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Unverified Claims</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatePage;
