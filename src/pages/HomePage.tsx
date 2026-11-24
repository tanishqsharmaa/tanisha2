import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Search, ArrowRight, ShieldCheck, Award, Layers, Sparkles, HeartHandshake } from 'lucide-react';
import { TEXTILES } from '../data';
import { TextileCard } from '../components/shared/TextileCard';
import { TextileImage } from '../components/shared/TextileImage';
import { TextileBorderDivider, PatolaDiamondPattern, IkatChevronPattern } from '../components/motifs/TextileMotifs';
import { FindYourTextileSection } from '../components/search/FindYourTextileSection';

export const HomePage: React.FC = () => {
  // All 7 Gujarat featured textiles in exact canonical order
  const featuredGujaratSlugs = [
    'patan-patola',
    'bandhani',
    'mashru',
    'tangaliya',
    'kutch-embroidery',
    'ajrakh',
    'gharchola',
  ];

  const featuredTextiles = featuredGujaratSlugs
    .map((slug) => TEXTILES.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const significanceCards = [
    {
      title: 'Cultural Identity',
      description: 'Textiles reflect regional identities, ritual ceremonies, community affiliations, and sacred customs.',
      icon: ShieldCheck,
      accent: 'text-madder bg-madder/10',
    },
    {
      title: 'Traditional Craftsmanship',
      description: 'Complex mathematical and botanical skills passed down without mechanization across generations.',
      icon: Award,
      accent: 'text-turmeric bg-turmeric/10',
    },
    {
      title: 'Regional Diversity',
      description: 'Every region across India features distinctive fiber crops, natural mineral mordants, and unique loom styles.',
      icon: Layers,
      accent: 'text-indigo bg-indigo/10',
    },
    {
      title: 'Living Heritage',
      description: 'Ancient textile traditions continue to evolve while remaining rooted in ancestral memory and sustainability.',
      icon: HeartHandshake,
      accent: 'text-forest bg-forest/10',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-beige/40 via-ivory to-ivory border-b border-beige pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <PatolaDiamondPattern className="absolute top-0 left-0 w-full h-3 opacity-30 pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-beige/70 border border-beige text-xs uppercase tracking-widest text-charcoal/80 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                <span>Academic Information Architecture Archive</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo tracking-tight leading-[1.15]">
                The Art of Indian Textiles
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
                Discover the stories, techniques and traditions woven into India's textile heritage.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-madder text-ivory font-medium text-sm hover:bg-madder/90 transition-all shadow-sm hover:shadow"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Textiles</span>
                </Link>
                <Link
                  to="/explore#regions"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-ivory border border-beige text-indigo font-medium text-sm hover:bg-beige/40 transition-all shadow-sm"
                >
                  <Search className="w-4 h-4" />
                  <span>Discover by Region</span>
                </Link>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-charcoal/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  <span>5 Geographic Regions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-turmeric" />
                  <span>36 States & Union Territories</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-madder" />
                  <span>15 Classifications</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-turmeric/20 to-madder/20 blur-xl opacity-50" />
                <Link
                  to="/textiles/patan-patola"
                  aria-label="Explore Patan Patola Double Ikat"
                  className="group block relative rounded-2xl border border-beige bg-ivory overflow-hidden shadow-lg p-3 hover:border-terracotta/40 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-beige/40">
                    <TextileImage
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Patola_weaving_Patan_Gujarat.jpg/1280px-Patola_weaving_Patan_Gujarat.jpg"
                      alt="Patan Patola Double Ikat Weaving"
                      motifType="patola"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-madder font-bold block">
                        Featured Masterwork · Patan, Gujarat
                      </span>
                      <span className="text-[10px] text-indigo font-semibold group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-indigo group-hover:text-madder transition-colors">
                      Patan Patola Double Ikat
                    </h3>
                    <p className="text-xs text-charcoal/70 line-clamp-2 mt-0.5">
                      Both warp and weft silk threads resist-dyed prior to weaving with mathematical precision.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section (Two-Column Editorial Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory rounded-2xl border border-beige p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column 1: Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-madder font-bold">
                  Curatorial Introduction
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-indigo leading-tight">
                  A Heritage Woven Through Generations
                </h2>
              </div>

              <div className="space-y-4 text-sm text-charcoal/85 leading-relaxed font-sans">
                <p>
                  For over five millennia, India's textile traditions have stood as the world's most sophisticated confluence
                  of botanical chemistry, mathematical geometry, and hereditary artisanal mastery. From the ancient Harappan
                  mordant-dyed cottons to the royal courts of the Solankis, Mughals, and Cholas, fabric in India has never been merely
                  utilitarian—it is a sacred language of cultural memory.
                </p>
                <p>
                  Across the subcontinent's diverse geographic terrains, distinct weaving guilds evolved specialized idioms:
                  the complex double-ikat warp-and-weft tie-dyeing of Gujarat's <strong>Patan Patola</strong>, the celestial resist-dots
                  of Kutch <strong>Bandhani</strong>, the mixed-fiber luster of <strong>Mashru</strong>, and the tactile geometric
                  wefts of <strong>Tangaliya</strong>.
                </p>
                <p>
                  Each handloom creation embodies intimate knowledge of indigenous flora—madder roots, pomegranate rinds, wild indigo,
                  and mineral iron rust—transforming natural fibers into heirlooms celebrated for the ancient Gujarati adage:
                  <em> "Padi Patole Bhaat, Phate Pan Fite Nahin"</em> (The design woven into the fabric never fades, even if the cloth wears away).
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-madder hover:text-madder/80 transition-colors"
                >
                  <span>Read About Our Documentation Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Curated Textile Visual Plate */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl border border-beige overflow-hidden bg-beige/30 p-2 shadow-sm">
                <div className="aspect-square rounded-lg overflow-hidden bg-beige/40">
                  <TextileImage
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bandhani_fabric_Gujarat.jpg/1280px-Bandhani_fabric_Gujarat.jpg"
                    alt="Traditional Gujarati Resist-Dyed Bandhani"
                    motifType="bandhani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="text-[11px] font-serif italic text-charcoal/80 block">
                    Plate I: Traditional Khatri Resist-Dyeing (Bandhani), Jamnagar
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/60 block mt-0.5">
                    Living Handloom Collection · Indian Textiles Archive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Motif Divider */}
      <TextileBorderDivider title="Pillars of Tradition" />

      {/* 3. Significance of Indian Textiles Section (4 Visual Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
            Cultural Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
            Significance of Indian Textiles
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70">
            Four enduring dimensions that establish handloom weaving as India's vital living legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {significanceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-ivory rounded-xl border border-beige p-6 space-y-4 shadow-sm hover:shadow-md hover:border-terracotta/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-indigo">
                  {card.title}
                </h3>
                <p className="text-xs text-charcoal/75 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Featured Textiles Carousel (7 Gujarat Textiles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-beige pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-madder font-bold mb-1">
              <span>State Showcase · Gujarat</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
              Featured Textiles
            </h2>
            <p className="text-xs text-charcoal/70 mt-1 max-w-xl">
              Explore Gujarat's master handloom collection: Patan Patola double ikat, resist-dyed Bandhani,
              Mashru silk-cotton, Tangaliya bead weave, Kutch needlework, Ajrakh blocks, and Gharchola.
            </p>
          </div>
          <Link
            to="/states/gujarat"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo hover:text-madder transition-colors flex-shrink-0"
          >
            <span>View All Gujarat Textiles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          role="region"
          aria-label="Featured Textiles Carousel"
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory"
        >
          {featuredTextiles.map((textile) => (
            <div
              key={textile.slug}
              className="w-72 sm:w-80 flex-shrink-0 snap-start"
            >
              <TextileCard textile={textile} />
            </div>
          ))}
        </div>

        <div className="text-center text-xs text-charcoal/50 italic font-serif">
          ← Scroll horizontally to discover all 7 featured Gujarat handlooms →
        </div>
      </section>

      {/* Decorative Chevron Divider */}
      <IkatChevronPattern className="w-full h-4 opacity-30" />

      {/* 5. "Find Your Textile" 4-Way Discovery Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FindYourTextileSection />
      </section>
    </div>
  );
};

export default HomePage;
