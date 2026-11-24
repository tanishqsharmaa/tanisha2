import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, ChevronRight, ChevronLeft } from 'lucide-react';
import { ProcessStep } from '../../types/archive';

interface DoubleIkatProcessProps {
  steps?: ProcessStep[];
  className?: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Design Planning',
    description:
      'The pattern is planned on graph/grid before the weaving process begins, calculating exact warp and weft alignments.',
  },
  {
    stepNumber: 2,
    title: 'Thread Preparation',
    description:
      'Silk yarns are arranged and divided into warp and weft bundles according to the design.',
  },
  {
    stepNumber: 3,
    title: 'Tying',
    description:
      'Selected sections of both warp and weft threads are tightly tied with cotton thread to resist dye.',
  },
  {
    stepNumber: 4,
    title: 'Dyeing',
    description:
      'Threads are dyed in carefully planned stages; different sections are tied and dyed to create multiple colours.',
  },
  {
    stepNumber: 5,
    title: 'Setting the Loom',
    description:
      'The prepared warp and weft threads are meticulously arranged on the traditional slant loom.',
  },
  {
    stepNumber: 6,
    title: 'Weaving',
    description:
      'Both sets of dyed threads must align precisely at every intersection during weaving to form the final double-ikat pattern.',
  },
];

const StepDiagram: React.FC<{ stepNumber: number; title: string }> = ({ stepNumber, title }) => {
  switch (stepNumber) {
    case 1:
      // Design Planning: Grid graph with mathematical coordinate plotting
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Grid lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v-${i}`} x1={20 + i * 18} y1="15" x2={20 + i * 18} y2="145" stroke="#E9DCC8" strokeWidth="1" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h-${i}`} x1="20" y1={20 + i * 16} x2="218" y2={20 + i * 16} stroke="#E9DCC8" strokeWidth="1" />
          ))}
          {/* Graph Diamond Plot Pattern */}
          <path d="M119 36L173 84L119 132L65 84Z" stroke="#263B59" strokeWidth="2" strokeDasharray="4 2" fill="#263B59" fillOpacity="0.05" />
          <path d="M119 52L155 84L119 116L83 84Z" fill="#A63D35" fillOpacity="0.15" stroke="#A63D35" strokeWidth="2" />
          {/* Coordinates and plot marks */}
          <circle cx="119" cy="84" r="5" fill="#D6A642" stroke="#263B59" strokeWidth="1.5" />
          <circle cx="83" cy="84" r="3" fill="#A63D35" />
          <circle cx="155" cy="84" r="3" fill="#A63D35" />
          <circle cx="119" cy="52" r="3" fill="#A63D35" />
          <circle cx="119" cy="116" r="3" fill="#A63D35" />
          {/* Drafting measurement calipers / pencil */}
          <path d="M40 135L60 115M60 115L65 120M60 115L55 110" stroke="#B86B4B" strokeWidth="2" strokeLinecap="round" />
          <text x="30" y="148" fill="#352D28" fontSize="10" fontFamily="DM Sans" fontWeight="600">Grid Scale 1:1</text>
        </svg>
      );
    case 2:
      // Thread Preparation: Silk skeins and warp/weft spool division
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Skein pegs */}
          <rect x="25" y="30" width="14" height="100" rx="3" fill="#B86B4B" stroke="#352D28" strokeWidth="1.2" />
          <rect x="201" y="30" width="14" height="100" rx="3" fill="#B86B4B" stroke="#352D28" strokeWidth="1.2" />
          {/* Taut silk filaments */}
          {Array.from({ length: 9 }).map((_, i) => (
            <path
              key={`thread-${i}`}
              d={`M39 ${45 + i * 8} C90 ${42 + i * 8}, 150 ${48 + i * 8}, 201 ${45 + i * 8}`}
              stroke="#D6A642"
              strokeWidth="1.8"
            />
          ))}
          {/* Thread separation guides */}
          <rect x="105" y="25" width="30" height="110" rx="4" fill="#E9DCC8" stroke="#263B59" strokeWidth="1" />
          <line x1="120" y1="28" x2="120" y2="132" stroke="#263B59" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Warp and Weft labels */}
          <text x="45" y="26" fill="#263B59" fontSize="10" fontFamily="DM Sans" fontWeight="700">Warp Bundles</text>
          <text x="160" y="26" fill="#263B59" fontSize="10" fontFamily="DM Sans" fontWeight="700">Weft Bundles</text>
          <text x="75" y="148" fill="#A63D35" fontSize="10" fontFamily="DM Sans" fontWeight="600">8-Ply Mulberry Silk Yarns</text>
        </svg>
      );
    case 3:
      // Tying (Resist Tying): Bundles wrapped with cotton ties
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Silk bundle body */}
          <rect x="20" y="65" width="200" height="30" rx="6" fill="#E9DCC8" stroke="#D6A642" strokeWidth="1.5" />
          {/* Resist Cotton Thread Bindings (Ties) */}
          {[45, 75, 105, 135, 165].map((pos, idx) => (
            <g key={`tie-${pos}`}>
              <rect x={pos} y="62" width="16" height="36" rx="2" fill="#263B59" stroke="#352D28" strokeWidth="1" />
              <line x1={pos + 4} y1="62" x2={pos + 4} y2="98" stroke="#F7F1E7" strokeWidth="0.8" />
              <line x1={pos + 8} y1="62" x2={pos + 8} y2="98" stroke="#F7F1E7" strokeWidth="0.8" />
              <line x1={pos + 12} y1="62" x2={pos + 12} y2="98" stroke="#F7F1E7" strokeWidth="0.8" />
              {/* Knot tails */}
              <path d={`M${pos + 8} 98 Q${pos + 4} 112 ${pos} 118`} stroke="#263B59" strokeWidth="1.5" strokeLinecap="round" />
              <text x={pos + 2} y="55" fill="#A63D35" fontSize="9" fontFamily="DM Sans" fontWeight="600">R{idx + 1}</text>
            </g>
          ))}
          <text x="60" y="148" fill="#352D28" fontSize="10" fontFamily="DM Sans" fontWeight="600">Tightly Tied Cotton Resists</text>
        </svg>
      );
    case 4:
      // Dyeing: Pots of natural dyes (madder, indigo, turmeric)
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Vat 1: Madder Root */}
          <path d="M30 65 Q30 55 55 55 Q80 55 80 65 L76 125 Q76 135 55 135 Q34 135 34 125 Z" fill="#A63D35" fillOpacity="0.2" stroke="#A63D35" strokeWidth="1.5" />
          <ellipse cx="55" cy="65" rx="22" ry="7" fill="#A63D35" />
          <text x="36" y="148" fill="#A63D35" fontSize="9" fontFamily="DM Sans" fontWeight="700">Madder Red</text>

          {/* Vat 2: Turmeric */}
          <path d="M95 65 Q95 55 120 55 Q145 55 145 65 L141 125 Q141 135 120 135 Q99 135 99 125 Z" fill="#D6A642" fillOpacity="0.25" stroke="#D6A642" strokeWidth="1.5" />
          <ellipse cx="120" cy="65" rx="22" ry="7" fill="#D6A642" />
          <text x="102" y="148" fill="#D6A642" fontSize="9" fontFamily="DM Sans" fontWeight="700">Turmeric</text>

          {/* Vat 3: Indigo */}
          <path d="M160 65 Q160 55 185 55 Q210 55 210 65 L206 125 Q206 135 185 135 Q164 135 164 125 Z" fill="#263B59" fillOpacity="0.2" stroke="#263B59" strokeWidth="1.5" />
          <ellipse cx="185" cy="65" rx="22" ry="7" fill="#263B59" />
          <text x="168" y="148" fill="#263B59" fontSize="9" fontFamily="DM Sans" fontWeight="700">Indigo</text>

          {/* Dipped silk thread loop coming down */}
          <path d="M120 20 L120 70" stroke="#352D28" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M110 70 C110 90, 130 90, 130 70" stroke="#A63D35" strokeWidth="3" />
          <text x="50" y="32" fill="#352D28" fontSize="10" fontFamily="DM Sans" fontWeight="600">Sequential Immersion Dyeing</text>
        </svg>
      );
    case 5:
      // Setting the Loom: Slanted loom with bamboo rods and tensioned warp
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Slanted Loom Timber Frame */}
          <line x1="25" y1="130" x2="215" y2="80" stroke="#B86B4B" strokeWidth="7" strokeLinecap="round" />
          <line x1="25" y1="90" x2="215" y2="40" stroke="#B86B4B" strokeWidth="7" strokeLinecap="round" />
          {/* Upright and support posts */}
          <line x1="35" y1="25" x2="35" y2="145" stroke="#352D28" strokeWidth="4" strokeLinecap="round" />
          <line x1="205" y1="15" x2="205" y2="135" stroke="#352D28" strokeWidth="4" strokeLinecap="round" />
          {/* Bamboo rods (heddles) */}
          <line x1="100" y1="45" x2="85" y2="125" stroke="#D6A642" strokeWidth="3" />
          <line x1="140" y1="35" x2="125" y2="115" stroke="#D6A642" strokeWidth="3" />
          {/* Tensioned multicolored warp threads */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`warp-${i}`}
              x1="35"
              y1={98 + i * 5}
              x2="205"
              y2={48 + i * 5}
              stroke={i % 2 === 0 ? '#A63D35' : '#D6A642'}
              strokeWidth="1.5"
            />
          ))}
          <text x="65" y="150" fill="#352D28" fontSize="10" fontFamily="DM Sans" fontWeight="600">Traditional Slant Loom Setup</text>
        </svg>
      );
    case 6:
      // Weaving: Alignment of warp & weft intersecting at needle point
      return (
        <svg viewBox="0 0 240 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={title}>
          <rect width="240" height="160" fill="#F7F1E7" />
          {/* Warp threads (vertical) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`w-v-${i}`}
              x1={45 + i * 20}
              y1="20"
              x2={45 + i * 20}
              y2="140"
              stroke={i % 2 === 0 ? '#A63D35' : '#263B59'}
              strokeWidth="2.5"
            />
          ))}
          {/* Weft threads (horizontal) intersecting */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`w-h-${i}`}
              x1="30"
              y1={35 + i * 18}
              x2="200"
              y2={35 + i * 18}
              stroke={i % 2 === 0 ? '#D6A642' : '#A63D35'}
              strokeWidth="2.5"
            />
          ))}
          {/* Double Ikat Intersections with subtle resist blur */}
          {[65, 105, 145].map((x) =>
            [53, 89, 125].map((y) => (
              <rect
                key={`intersect-${x}-${y}`}
                x={x - 4}
                y={y - 4}
                width="8"
                height="8"
                fill="#A63D35"
                stroke="#D6A642"
                strokeWidth="1"
              />
            ))
          )}
          {/* Weaving Needle / Bone Tool adjusting alignment */}
          <path d="M215 130L165 95" stroke="#352D28" strokeWidth="3" strokeLinecap="round" />
          <circle cx="163" cy="93" r="2" fill="#D6A642" />
          <text x="45" y="152" fill="#352D28" fontSize="10" fontFamily="DM Sans" fontWeight="600">Micrometric Double-Ikat Intersection</text>
        </svg>
      );
    default:
      return null;
  }
};

export const DoubleIkatProcess: React.FC<DoubleIkatProcessProps> = ({
  steps = DEFAULT_STEPS,
  className = '',
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'grid' | 'step'>('grid');

  const currentStep = steps.find((s) => s.stepNumber === activeStep) || steps[0];

  return (
    <section className={`bg-ivory border border-beige/90 rounded-2xl p-6 sm:p-8 space-y-8 ${className}`}>
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-beige/80 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rotate-45 bg-madder" />
            <span className="text-xs font-semibold uppercase tracking-widest text-madder">
              Living Master Craft Technique
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
            The Art of Double Ikat
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/80 font-serif italic mt-1 max-w-2xl">
            A 6-stage mathematical and artisanal journey where both warp and weft silk yarns are resist-dyed before mounting on the loom.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-beige/40 rounded-lg border border-beige self-start sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-indigo text-ivory shadow-sm'
                : 'text-charcoal/70 hover:text-indigo hover:bg-beige/60'
            }`}
            title="View all steps in sequence"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Sequence</span>
          </button>
          <button
            onClick={() => setViewMode('step')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-all ${
              viewMode === 'step'
                ? 'bg-indigo text-ivory shadow-sm'
                : 'text-charcoal/70 hover:text-indigo hover:bg-beige/60'
            }`}
            title="Inspect step by step"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Step Focus</span>
          </button>
        </div>
      </div>

      {/* Grid Mode: All 6 Illustrated Editorial Steps */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="group relative flex flex-col bg-ivory rounded-xl border border-beige/80 hover:border-terracotta/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* SVG Diagram Plate */}
              <div className="relative aspect-[3/2] w-full bg-beige/30 border-b border-beige/60 overflow-hidden">
                <StepDiagram stepNumber={step.stepNumber} title={step.title} />
                {/* Step Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo text-ivory text-xs font-bold tracking-wider shadow-sm">
                  <span>Step {step.stepNumber}</span>
                </div>
              </div>

              {/* Step Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-indigo group-hover:text-madder transition-colors mb-2">
                    {step.stepNumber}. {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-beige/60 flex items-center justify-between text-[11px] text-charcoal/60">
                  <span className="uppercase tracking-wider">Patan Salvi Tradition</span>
                  <button
                    onClick={() => {
                      setActiveStep(step.stepNumber);
                      setViewMode('step');
                    }}
                    className="text-madder font-semibold hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Examine Step</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Focus Mode: In-depth Step Navigator */
        <div className="space-y-6">
          {/* Step Selector Pills */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-beige/60">
            {steps.map((step) => {
              const isSelected = step.stepNumber === activeStep;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-madder text-ivory shadow-sm'
                      : 'bg-beige/40 text-charcoal/80 hover:bg-beige/70 border border-beige'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                      isSelected ? 'bg-ivory text-madder font-bold' : 'bg-charcoal/10 text-charcoal'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-beige/20 rounded-xl border border-beige p-6 sm:p-8">
            <div className="lg:col-span-7 aspect-[3/2] rounded-xl overflow-hidden border border-beige/90 bg-ivory shadow-inner">
              <StepDiagram stepNumber={currentStep.stepNumber} title={currentStep.title} />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-madder/10 text-madder text-xs font-semibold tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-madder" />
                <span>Phase {currentStep.stepNumber} of 6</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-indigo">
                  {currentStep.stepNumber}. {currentStep.title}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed mt-3 font-sans">
                  {currentStep.description}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-beige/70">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  disabled={activeStep === 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-semibold text-charcoal/80 hover:text-indigo disabled:opacity-30 disabled:pointer-events-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-xs text-charcoal/60 font-mono">
                  {activeStep} / {steps.length}
                </span>

                <button
                  onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}
                  disabled={activeStep === steps.length}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-semibold text-charcoal/80 hover:text-indigo disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default DoubleIkatProcess;
