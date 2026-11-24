import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getTextileBySlug,
} from '../data';
import { DoubleIkatProcess } from '../components/textile/DoubleIkatProcess';
import { MotifGallery } from '../components/textile/MotifGallery';
import { TextileCard } from '../components/shared/TextileCard';
import { TextileImage } from '../components/shared/TextileImage';
import { TextileBorderDivider, PatolaDiamondPattern } from '../components/motifs/TextileMotifs';
import {
  MapPin,
  Sparkles,
  ExternalLink,
  BookOpen,
  Compass,
  ArrowRight,
  Info,
  CheckCircle2,
} from 'lucide-react';

const TextileDetailPage: React.FC = () => {
  const { textileSlug } = useParams<{ textileSlug: string }>();
  const textile = getTextileBySlug(textileSlug || '');

  if (!textile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-indigo">Textile Not Found</h1>
        <p className="text-sm text-charcoal/70">
          The textile entry <code className="text-madder font-mono">"{textileSlug}"</code> is not currently in the archive registry.
        </p>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-madder transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Return to Explore</span>
        </Link>
      </div>
    );
  }

  // ==========================================
  // CASE 1: FULL PATAN PATOLA ARCHIVE (SECTIONS A–J)
  // ==========================================
  if (textile.slug === 'patan-patola' && textile.isFullyDeveloped) {
    const relatedTextiles = (textile.relatedTextileSlugs || [])
      .map((slug) => getTextileBySlug(slug))
      .filter((t): t is NonNullable<typeof t> => Boolean(t));

    return (
      <div className="min-h-screen bg-ivory space-y-16 pb-20">
        {/* Subtle Decorative Pattern Band */}
        <div className="bg-beige/40 border-b border-beige/60 py-1 overflow-hidden">
          <PatolaDiamondPattern className="w-full h-5 opacity-40 text-madder" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* ==================================================== */}
          {/* SECTION A: TEXTILE HERO                               */}
          {/* ==================================================== */}
          <section id="section-hero" aria-label="Textile Hero" className="space-y-8">
            {/* Header Meta Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-beige/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-madder text-ivory shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                  Section 8 Archival Record · Complete
                </span>
                <span className="text-xs text-charcoal/60 uppercase tracking-wider font-mono">
                  GI No. 232
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-charcoal/80 font-medium">
                <MapPin className="w-4 h-4 text-madder" />
                <span>Patan, Gujarat, India</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-indigo tracking-tight">
                Patan Patola
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-charcoal/80 italic">
                The Double Ikat Silk Tradition of Gujarat
              </p>
            </div>

            {/* 5 Information Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Gujarat', 'Patan', 'Silk', 'Double Ikat', 'Handwoven'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-beige/60 text-indigo border border-beige/90 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero Visual & Intro Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-beige/20 rounded-2xl border border-beige p-6 sm:p-8">
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-beige bg-beige/40">
                <TextileImage
                  src={textile.heroImage}
                  alt="Patan Patola Double Ikat Masterpiece"
                  motifType="patola"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-charcoal/80 backdrop-blur-sm text-ivory text-[11px] p-2.5 rounded-lg flex items-center justify-between">
                  <span>Authentic Handwoven Patan Patolu Silk Saree</span>
                  <span className="font-mono text-turmeric">Double Ikat</span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-madder">
                    Archival Introduction
                  </span>
                  <p className="text-base sm:text-lg text-charcoal/90 font-serif leading-relaxed">
                    Patan Patola is a legendary double-ikat woven saree crafted from pure silk in Patan, Gujarat. Both warp and weft threads are individually resist-dyed prior to weaving, producing identical geometric precision and vibrant coloration on both sides of the fabric.
                  </p>
                </div>

                <div className="p-4 bg-ivory rounded-xl border border-beige/90 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>Linguistic Distinction</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                    Patola is the plural form referring to the textile tradition, whereas a single textile is called Patolu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <TextileBorderDivider title="Archival Monograph" />

          {/* ==================================================== */}
          {/* SECTION B: OVERVIEW                                   */}
          {/* ==================================================== */}
          <section id="section-overview" aria-label="Overview" className="space-y-6">
            <div className="border-b border-beige/80 pb-3 flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                Overview & Heritage
              </h2>
              <span className="text-xs uppercase tracking-widest text-charcoal/60 font-mono">
                Section B
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-charcoal/85 leading-relaxed font-sans">
              <div className="p-6 bg-ivory rounded-xl border border-beige/90 space-y-3 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-indigo">Loom Origins in Patan</h3>
                <p>
                  Patan Patola is recognized as one of the world's most technically demanding and revered double ikat weaving traditions. Originating in the historic royal city of Patan in northern Gujarat, Patola sarees are distinguished by their extraordinary precision, where both the warp and weft yarns are meticulously tied and resist-dyed before being mounted on a traditional slanted loom.
                </p>
              </div>

              <div className="p-6 bg-ivory rounded-xl border border-beige/90 space-y-3 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-indigo">Reversibility & Nomenclature</h3>
                <p>
                  The word <strong>Patola</strong> is the plural term denoting these precious heirloom textiles, while a single piece is traditionally known as <strong>Patolu</strong>. Because the design is engineered directly into the yarns before weaving, the finished fabric has no reverse side: both faces exhibit identical vibrancy, clarity, and texture.
                </p>
              </div>

              <div className="p-6 bg-ivory rounded-xl border border-beige/90 space-y-3 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-indigo">Maritime Trade & Lineage</h3>
                <p>
                  Historically treasured by royalty and aristocratic families across Gujarat and Maharashtra, Patola textiles were also exported as sacred prestige cloths across Southeast Asia—particularly to the Indonesian archipelago—along the ancient Spice Route. Today, this master craft is preserved by a very small number of traditional Salvi weaver families.
                </p>
              </div>
            </div>
          </section>

          {/* ==================================================== */}
          {/* SECTION C & D: TYPE & MATERIAL                       */}
          {/* ==================================================== */}
          <section id="section-type-material" aria-label="Type and Material" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section C: Type */}
            <div className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-beige/80 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                    Section C
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-indigo">
                    Textile Classification Type
                  </h2>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-charcoal/85">
                <li className="flex items-start gap-3 p-3 bg-beige/30 rounded-lg border border-beige/70">
                  <div className="w-2 h-2 rounded-full bg-madder mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-indigo font-serif">Traditional Handwoven Sari:</strong>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      Uncut six-yard heirloom drape textile woven for high ceremonial, bridal, and sacred occasions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-beige/30 rounded-lg border border-beige/70">
                  <div className="w-2 h-2 rounded-full bg-turmeric mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-indigo font-serif">Double Ikat Textile:</strong>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      Both warp (tana) and weft (bana) undergo independent resist tie-dyeing to intersect into razor-sharp geometric motifs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-beige/30 rounded-lg border border-beige/70">
                  <div className="w-2 h-2 rounded-full bg-forest mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-indigo font-serif">Silk-Based Heirloom Textile:</strong>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      Woven exclusively from high-grade natural mulberry silk filament yarn for durability spanning centuries.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section D: Material */}
            <div className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-beige/80 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-forest font-semibold">
                    Section D
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-indigo">
                    Material Composition & Dyes
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm text-charcoal/85 leading-relaxed">
                <div className="p-4 bg-beige/30 rounded-xl border border-beige/70 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo">
                    Primary Fiber
                  </span>
                  <p className="font-serif text-base text-charcoal font-semibold">
                    Pure Mulberry Silk Yarn
                  </p>
                  <p className="text-xs text-charcoal/75">
                    Raw silk threads are twisted into 8-ply yarn bundles, meticulously scoured, boiled, and tensioned before undergoing resist calculations.
                  </p>
                </div>

                <div className="p-4 bg-beige/30 rounded-xl border border-beige/70 space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo">
                    Natural & Traditional Dyeing Mediums
                  </span>
                  <p className="text-xs text-charcoal/75">
                    Traditional dyes derived from natural vegetable and mineral sources—including madder root (manjistha) for crimson, turmeric (haldi) for golden yellow, indigo (neel) for deep blues, and pomegranate rind (anar chhal) with iron rust mordants.
                  </p>
                </div>

                <div className="text-xs text-charcoal/70 italic bg-ivory p-3 rounded-lg border border-beige">
                  "Padi Patole Bhaat, Phate Pan Fite Nahin" — The design laid in the Patola will endure even if the silk tears over generations.
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================== */}
          {/* SECTION E: TECHNIQUE (<DoubleIkatProcess />)         */}
          {/* ==================================================== */}
          <section id="section-technique" aria-label="Technique" className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                Section E · Double Ikat Technique
              </span>
            </div>
            <DoubleIkatProcess />
          </section>

          {/* ==================================================== */}
          {/* SECTION F: MOTIFS (<MotifGallery />)                 */}
          {/* ==================================================== */}
          <section id="section-motifs" aria-label="Motifs" className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-turmeric font-semibold">
                Section F · Traditional Iconography
              </span>
            </div>
            <MotifGallery />
          </section>

          {/* ==================================================== */}
          {/* SECTION G: CENTRE                                     */}
          {/* ==================================================== */}
          <section id="section-centre" aria-label="Centre of Production" className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="border-b border-beige/80 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                  Section G
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                  Primary Centre: Patan, Gujarat
                </h2>
              </div>
              <span className="text-xs text-charcoal/60 font-mono">
                Historic Solanki Capital
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans">
                <p>
                  Patan is an ancient royal capital in northern Gujarat famed for its UNESCO World Heritage Solanki dynasty stepwell, Rani ki Vav. Master Salvi weavers migrated here in the 12th century under King Kumarapala, establishing an unbroken hereditary guild that endures today.
                </p>
                <p className="text-sm text-charcoal/75">
                  Today, Patan remains the single primary historic centre associated with the authentic double-ikat Patola weaving practice, preserving ancient pit and slant loom methods without mechanical automation.
                </p>
              </div>

              <div className="lg:col-span-4 p-5 bg-beige/30 rounded-xl border border-beige text-xs space-y-3">
                <div className="font-serif font-bold text-indigo text-sm">Geographical Registry</div>
                <div className="space-y-1 text-charcoal/80">
                  <div><strong>State:</strong> Gujarat</div>
                  <div><strong>District:</strong> Patan</div>
                  <div><strong>Coordinates:</strong> 23.85° N, 72.12° E</div>
                  <div><strong>GI Registration:</strong> GI Application #232</div>
                </div>
                <Link
                  to="/states/gujarat"
                  className="inline-flex items-center gap-1.5 text-madder font-semibold hover:underline pt-2 border-t border-beige/70 w-full"
                >
                  <span>Explore Gujarat Regional Archive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* ==================================================== */}
          {/* SECTION H: CULTURAL SIGNIFICANCE                     */}
          {/* ==================================================== */}
          <section id="section-culture" aria-label="Cultural Significance" className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="border-b border-beige/80 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-indigo font-semibold">
                  Section H
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                  Cultural Significance & Living Legacy
                </h2>
              </div>
              <span className="text-xs uppercase tracking-widest text-charcoal/60 font-mono">
                Intangible Heritage
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Auspicious Bridal Heirloom',
                  desc: 'Regarded as the pinnacle of Gujarati bridal trousseaus, Patola sarees are treasured family heirlooms passed through generations as symbols of prosperity and protective blessings.',
                },
                {
                  title: 'Salvi Weaver Heritage',
                  desc: 'Preserved exclusively by a handful of master Salvi families in Patan who maintain centuries-old hereditary techniques without mechanical automation.',
                },
                {
                  title: 'Southeast Asian Maritime Trade',
                  desc: 'Historic role in Southeast Asian maritime trade, where Gujarati Patola cloths were prized as sacred talismanic textiles (kain patola) by Indonesian royalty.',
                },
                {
                  title: 'Folkloric Reverence',
                  desc: 'Celebrated in Gujarati folklore with the proverbial praise: "Padi Patole Bhaat, Phate Pan Fite Nahin" (The design laid in Patola will never fade, even if the fabric tears).',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-beige/30 rounded-xl border border-beige/70 space-y-2">
                  <h3 className="font-serif text-base font-bold text-indigo">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ==================================================== */}
          {/* SECTION I: RELATED TEXTILES                          */}
          {/* ==================================================== */}
          <section id="section-related" aria-label="Related Textiles" className="space-y-6">
            <div className="border-b border-beige/80 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                  Section I
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                  Related Handloom Traditions
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/70 font-serif italic mt-1">
                  Explore other celebrated resist-dyeing, silk weaving, and ikat master traditions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTextiles.map((related) => (
                <TextileCard key={related.slug} textile={related} />
              ))}
            </div>
          </section>

          {/* ==================================================== */}
          {/* SECTION J: SOURCES AND FURTHER READING               */}
          {/* ==================================================== */}
          <section id="section-sources" aria-label="Sources and Further Reading" className="bg-ivory rounded-2xl border border-beige/90 p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="border-b border-beige/80 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-madder font-semibold">
                  Section J
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
                  Sources & Official Further Reading
                </h2>
              </div>
              <BookOpen className="w-5 h-5 text-madder" />
            </div>

            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-3xl font-sans">
              Every detail in this monograph is cross-verified with official government repositories, district records, and the national Geographical Indications registry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: 'Patan Patola — Incredible India',
                  publisher: 'Ministry of Tourism, Government of India',
                  url: 'https://www.incredibleindia.gov.in/en/gujarat/patan-patola',
                },
                {
                  title: 'Patola Weaving Heritage — Patan District',
                  publisher: 'Government of Gujarat NIC',
                  url: 'https://patan.nic.in/tourist-place/patola/',
                },
                {
                  title: 'Gujarat Handlooms & Crafts: Patola of Patan',
                  publisher: 'Gujarat Tourism',
                  url: 'https://gujarattourism.com/north-zone/patan/patola.html',
                },
                {
                  title: 'Geographical Indications Application No. 232: Patan Patola',
                  publisher: 'Intellectual Property India (GI Registry)',
                  url: 'https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/232',
                },
              ].map((src, idx) => (
                <a
                  key={idx}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between p-4 bg-beige/30 hover:bg-beige/60 rounded-xl border border-beige/80 hover:border-terracotta/40 transition-all shadow-sm"
                >
                  <div className="space-y-1 pr-3">
                    <h3 className="font-serif text-sm font-bold text-indigo group-hover:text-madder transition-colors">
                      {src.title}
                    </h3>
                    <p className="text-xs text-charcoal/70">
                      {src.publisher}
                    </p>
                    <span className="text-[11px] text-madder font-mono block truncate max-w-xs sm:max-w-md">
                      {src.url}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-charcoal/50 group-hover:text-madder flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ==========================================
  // CASE 2: PREVIEW TEXTILE VIEW (isFullyDeveloped: false)
  // ==========================================
  return (
    <div className="min-h-screen bg-ivory space-y-12 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Status Banner */}
        <div className="p-4 bg-beige/40 rounded-xl border border-beige flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-terracotta" />
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/80">
              Archival Preview Record · {textile.stateName}
            </span>
          </div>
          <span className="text-xs text-charcoal/60 font-mono">
            {textile.regionId.toUpperCase()} Region
          </span>
        </div>

        {/* Textile Header */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo">
            {textile.name}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-charcoal/80 italic">
            {textile.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-indigo/10 text-indigo border border-indigo/20">
              {textile.stateName}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-beige/60 text-charcoal border border-beige">
              {textile.centre}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-terracotta/10 text-terracotta border border-terracotta/20">
              {textile.technique}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-medium bg-forest/10 text-forest border border-forest/20">
              {textile.material}
            </span>
          </div>
        </div>

        {/* Visual Plate & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-beige/20 rounded-2xl border border-beige p-6 sm:p-8">
          <div className="aspect-[4/3] rounded-xl overflow-hidden border border-beige bg-beige/40 shadow-sm">
            <TextileImage
              src={textile.heroImage}
              alt={textile.name}
              motifType={textile.motifPattern}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
              Brief Overview
            </span>
            <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-sans">
              {textile.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {textile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider px-2 py-0.5 bg-ivory text-charcoal/70 rounded border border-beige"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Honest Archival Banner */}
        <div className="p-8 sm:p-12 bg-ivory rounded-2xl border-2 border-dashed border-beige/90 text-center space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-beige/40 mx-auto flex items-center justify-center text-terracotta">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-indigo">
              Detailed information coming soon
            </h2>
            <p className="text-sm text-charcoal/70 max-w-lg mx-auto font-sans leading-relaxed">
              Archival researchers and handloom scholars are currently documenting the complete historical lineage, dye recipes, warp/weft structures, and master weaver interviews for {textile.name}.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/textiles/patan-patola"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-madder text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-indigo transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-turmeric" />
              <span>Explore Complete Patan Patola Archive</span>
            </Link>

            <Link
              to={`/states/${textile.stateSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-beige/60 text-charcoal rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-beige transition-colors border border-beige"
            >
              <span>Back to {textile.stateName}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextileDetailPage;
