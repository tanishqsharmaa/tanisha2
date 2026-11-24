import React, { useState } from 'react';
import { TextileMotif } from '../../types/archive';
import { Eye, Sparkles } from 'lucide-react';

interface MotifGalleryProps {
  motifs?: TextileMotif[];
  className?: string;
}

const DEFAULT_MOTIFS: TextileMotif[] = [
  {
    id: 'nari-kunjar',
    name: 'Nari Kunjar',
    meaning: 'Woman & Elephant',
    description:
      'Figurative elephant and female dancer motif symbolizing royalty, grace, and festival celebration.',
    patternType: 'figurative',
  },
  {
    id: 'ratan-chowk',
    name: 'Ratan Chowk',
    meaning: 'Jeweled Square',
    description:
      'Geometric jewel-square and floral arrangement reflecting cosmic harmony and auspicious protection.',
    patternType: 'geometric',
  },
  {
    id: 'chhabdi',
    name: 'Chhabdi',
    meaning: 'Floral Basket',
    description:
      'Octagonal basket-inspired pattern representing sacred floral offerings to deities.',
    patternType: 'floral',
  },
  {
    id: 'paan',
    name: 'Paan',
    meaning: 'Betel Leaf (Paan Bhat)',
    description:
      'Sacred heart-shaped betel leaf motif representing prosperity, hospitality, and marital blessings.',
    patternType: 'botanical',
  },
  {
    id: 'phul',
    name: 'Phul',
    meaning: 'Floral Rosette',
    description:
      'Symmetrical multi-petalled flower motif repeated in diagonal geometric diapers.',
    patternType: 'floral',
  },
  {
    id: 'geometric-diamonds',
    name: 'Geometric Diamonds & Repeated Symmetrical Patterns',
    meaning: 'Diamond Grid',
    description:
      'Repeated symmetrical stepped diamond patterns with blurred ikat edges characteristic of double ikat.',
    patternType: 'geometric',
  },
];

const MotifSvgPlate: React.FC<{ motifId: string; name: string }> = ({ motifId, name }) => {
  switch (motifId) {
    case 'nari-kunjar':
      // Elephant (Kunjar) & Dancer (Nari) geometric ikat motif
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Stepped Ikat border */}
          <rect x="10" y="10" width="140" height="140" stroke="#A63D35" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="16" y="16" width="128" height="128" stroke="#D6A642" strokeWidth="1" />
          {/* Geometric Elephant Silhouette in Patola style */}
          <path
            d="M36 112V78H46V66H62V58H88V66H104V76H114V90H124V112H112V100H98V112H84V94H66V112H52V100H36V112Z"
            fill="#263B59"
          />
          {/* Elephant Head / Trunk */}
          <path d="M114 76H130V94H124V84H114V76Z" fill="#A63D35" />
          {/* Eye & Tusk */}
          <rect x="104" y="70" width="4" height="4" fill="#D6A642" />
          <rect x="120" y="90" width="8" height="4" fill="#F7F1E7" />
          {/* Howdah / Saddle textile pattern */}
          <rect x="68" y="52" width="28" height="16" fill="#A63D35" />
          <circle cx="82" cy="60" r="3" fill="#D6A642" />
          {/* Dancer (Nari) stepped figure in upper left */}
          <circle cx="50" cy="34" r="5" fill="#A63D35" />
          <path d="M42 42H58L54 54H46L42 42Z" fill="#263B59" />
          <path d="M44 54L38 68H62L56 54Z" fill="#D6A642" />
        </svg>
      );
    case 'ratan-chowk':
      // Jeweled Square: Cosmic harmony four-fold geometry
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Outer square diaper */}
          <rect x="15" y="15" width="130" height="130" stroke="#263B59" strokeWidth="2" strokeDasharray="3 3" />
          {/* Center rotated jewel diamond */}
          <path d="M80 24L136 80L80 136L24 80Z" fill="#E9DCC8" stroke="#A63D35" strokeWidth="2.5" />
          {/* Nested inner stepped diamond */}
          <path d="M80 44L116 80L80 116L44 80Z" fill="#A63D35" stroke="#D6A642" strokeWidth="2" />
          {/* Central gold rosette gem */}
          <circle cx="80" cy="80" r="12" fill="#D6A642" stroke="#263B59" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="5" fill="#F7F1E7" />
          {/* Four corner star jewels */}
          <circle cx="38" cy="38" r="7" fill="#A63D35" />
          <circle cx="122" cy="38" r="7" fill="#A63D35" />
          <circle cx="38" cy="122" r="7" fill="#A63D35" />
          <circle cx="122" cy="122" r="7" fill="#A63D35" />
        </svg>
      );
    case 'chhabdi':
      // Floral Basket: Octagonal basket-inspired diaper
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Octagonal basket contour */}
          <path
            d="M52 20H108L140 52V108L108 140H52L20 108V52L52 20Z"
            fill="#E9DCC8"
            stroke="#263B59"
            strokeWidth="2.5"
          />
          {/* Woven basket texture lines */}
          <path d="M52 20L108 140M108 20L52 140M20 52L140 108M20 108L140 52" stroke="#B86B4B" strokeWidth="1" strokeDasharray="3 2" />
          {/* Inner floral offering */}
          <circle cx="80" cy="80" r="22" fill="#A63D35" stroke="#D6A642" strokeWidth="2" />
          <circle cx="80" cy="80" r="8" fill="#F7F1E7" stroke="#263B59" strokeWidth="1.5" />
          {/* Radial buds */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 80 + 38 * Math.cos(rad);
            const y = 80 + 38 * Math.sin(rad);
            return <circle key={angle} cx={x} cy={y} r="4" fill="#D6A642" />;
          })}
        </svg>
      );
    case 'paan':
      // Sacred Betel Leaf (Paan Bhat): Heart-shaped leaf
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Leaf border */}
          <path
            d="M80 138 C40 100, 25 75, 30 50 C35 25, 65 24, 80 44 C95 24, 125 25, 130 50 C135 75, 120 100, 80 138 Z"
            fill="#526B50"
            fillOpacity="0.2"
            stroke="#526B50"
            strokeWidth="2.5"
          />
          {/* Inner stepped ikat heart contour */}
          <path
            d="M80 125 C48 95, 38 72, 42 54 C46 36, 68 36, 80 50 C92 36, 114 36, 118 54 C122 72, 112 95, 80 125 Z"
            fill="#A63D35"
            stroke="#D6A642"
            strokeWidth="1.8"
          />
          {/* Central vein & branching ribs */}
          <line x1="80" y1="50" x2="80" y2="120" stroke="#F7F1E7" strokeWidth="2" />
          <line x1="80" y1="70" x2="60" y2="60" stroke="#D6A642" strokeWidth="1.5" />
          <line x1="80" y1="70" x2="100" y2="60" stroke="#D6A642" strokeWidth="1.5" />
          <line x1="80" y1="90" x2="62" y2="82" stroke="#D6A642" strokeWidth="1.5" />
          <line x1="80" y1="90" x2="98" y2="82" stroke="#D6A642" strokeWidth="1.5" />
          <circle cx="80" cy="50" r="4" fill="#D6A642" />
        </svg>
      );
    case 'phul':
      // Symmetrical multi-petalled flower rosette
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Circular border with floral scallops */}
          <circle cx="80" cy="80" r="62" stroke="#A63D35" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="80" cy="80" r="54" fill="#E9DCC8" stroke="#D6A642" strokeWidth="1.2" />
          {/* 8 Radial Rosette Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 80 + 26 * Math.cos(rad);
            const cy = 80 + 26 * Math.sin(rad);
            return (
              <circle
                key={angle}
                cx={cx}
                cy={cy}
                r="16"
                fill="#A63D35"
                fillOpacity="0.8"
                stroke="#263B59"
                strokeWidth="1.2"
              />
            );
          })}
          {/* Core Eye */}
          <circle cx="80" cy="80" r="16" fill="#D6A642" stroke="#263B59" strokeWidth="2" />
          <circle cx="80" cy="80" r="6" fill="#F7F1E7" />
        </svg>
      );
    case 'geometric-diamonds':
    default:
      // Stepped Ikat Diamond Grid & Lattice
      return (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={name}>
          <rect width="160" height="160" fill="#F7F1E7" />
          {/* Repeated stepped lattice grid */}
          <path d="M80 10L150 80L80 150L10 80Z" stroke="#263B59" strokeWidth="2" />
          <path d="M80 25L135 80L80 135L25 80Z" fill="#A63D35" stroke="#D6A642" strokeWidth="1.8" />
          <path d="M80 40L120 80L80 120L40 80Z" fill="#E9DCC8" stroke="#263B59" strokeWidth="1.5" />
          <path d="M80 55L105 80L80 105L55 80Z" fill="#D6A642" stroke="#A63D35" strokeWidth="1.5" />
          <rect x="74" y="74" width="12" height="12" fill="#263B59" />
          {/* Corner half-diamonds */}
          <path d="M0 40L40 0L80 40L40 80Z" stroke="#A63D35" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M80 40L120 0L160 40L120 80Z" stroke="#A63D35" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M0 120L40 80L80 120L40 160Z" stroke="#A63D35" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M80 120L120 80L160 120L120 160Z" stroke="#A63D35" strokeWidth="1.2" strokeDasharray="3 2" />
        </svg>
      );
  }
};

export const MotifGallery: React.FC<MotifGalleryProps> = ({
  motifs = DEFAULT_MOTIFS,
  className = '',
}) => {
  const [selectedMotif, setSelectedMotif] = useState<TextileMotif | null>(null);

  return (
    <section className={`bg-ivory border border-beige/90 rounded-2xl p-6 sm:p-8 space-y-6 ${className}`}>
      {/* Gallery Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-beige/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rotate-45 bg-turmeric" />
            <span className="text-xs font-semibold uppercase tracking-widest text-charcoal/70">
              Iconography & Sacred Geometry
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
            Traditional Patan Patola Motifs
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-serif italic mt-1 max-w-2xl">
            Six canonical visual archetypes carrying deep cultural symbolism, auspicious blessings, and mathematically engineered double-ikat symmetries.
          </p>
        </div>

        <div className="text-xs text-charcoal/60 bg-beige/40 px-3 py-1.5 rounded-lg border border-beige self-start sm:self-auto font-mono">
          6 Verified Archival Motifs
        </div>
      </div>

      {/* 6 Motif Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {motifs.map((motif) => (
          <div
            key={motif.id}
            className="group relative flex flex-col bg-ivory rounded-xl border border-beige/80 hover:border-terracotta/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* SVG Visual Plate */}
            <div className="relative aspect-square w-full bg-beige/30 p-4 border-b border-beige/60 flex items-center justify-center overflow-hidden">
              <div className="w-44 h-44 group-hover:scale-105 transition-transform duration-500">
                <MotifSvgPlate motifId={motif.id} name={motif.name} />
              </div>

              {/* Pattern Type Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-indigo/85 text-ivory">
                  {motif.patternType}
                </span>
              </div>

              {/* Inspect Button */}
              <button
                onClick={() => setSelectedMotif(motif)}
                aria-label={`Inspect motif ${motif.name}`}
                className="absolute bottom-3 right-3 p-1.5 rounded-full bg-ivory/90 text-charcoal shadow hover:bg-madder hover:text-ivory transition-colors"
                title="Inspect Motif"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Motif Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-indigo group-hover:text-madder transition-colors">
                  {motif.name}
                </h3>
                <p className="text-xs font-serif italic text-charcoal/70 mb-2.5">
                  {motif.meaning}
                </p>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                  {motif.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-beige/60 flex items-center justify-between text-[11px] text-charcoal/60">
                <span className="uppercase tracking-wider">Double Ikat Geometric</span>
                <button
                  onClick={() => setSelectedMotif(motif)}
                  className="text-madder font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Archival Note</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Motif Modal / Dialog */}
      {selectedMotif && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
          onClick={() => setSelectedMotif(null)}
        >
          <div
            className="bg-ivory max-w-lg w-full rounded-2xl border border-beige p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-beige pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-madder font-bold">
                  {selectedMotif.patternType} Motif
                </span>
                <h3 className="font-serif text-2xl font-bold text-indigo">
                  {selectedMotif.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMotif(null)}
                className="text-charcoal/60 hover:text-charcoal p-1 text-sm font-bold"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="w-48 h-48 mx-auto p-2 bg-beige/30 rounded-xl border border-beige/80">
              <MotifSvgPlate motifId={selectedMotif.id} name={selectedMotif.name} />
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-beige/30 rounded-lg border border-beige text-xs text-charcoal/80">
                <strong className="text-indigo">Symbolic Meaning:</strong> {selectedMotif.meaning}
              </div>
              <p className="text-sm text-charcoal/90 leading-relaxed font-sans">
                {selectedMotif.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-charcoal/60 italic">
                <Sparkles className="w-3.5 h-3.5 text-turmeric" />
                <span>Patan Patola Double Ikat Tradition · Gujarat, India</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedMotif(null)}
              className="w-full py-2.5 bg-indigo text-ivory rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-madder transition-colors"
            >
              Close Motif Inspector
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
export default MotifGallery;
