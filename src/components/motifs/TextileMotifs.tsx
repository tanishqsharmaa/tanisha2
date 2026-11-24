import React from 'react';

export const PatolaDiamondPattern: React.FC<{ className?: string }> = ({ className = 'w-full h-8' }) => (
  <svg className={className} viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <pattern id="patola-diamonds" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M12 0L24 12L12 24L0 12Z" fill="#F7F1E7" stroke="#A63D35" strokeWidth="1" />
      <path d="M12 4L20 12L12 20L4 12Z" fill="#E9DCC8" stroke="#D6A642" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="2" fill="#263B59" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#patola-diamonds)" />
  </svg>
);

export const IkatChevronPattern: React.FC<{ className?: string }> = ({ className = 'w-full h-8' }) => (
  <svg className={className} viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <pattern id="ikat-chevron" width="40" height="20" patternUnits="userSpaceOnUse">
      <path d="M0 10L10 0L20 10L30 0L40 10L30 20L20 10L10 20Z" fill="#263B59" fillOpacity="0.08" />
      <path d="M5 10L10 5L15 10L25 5L30 10" stroke="#A63D35" strokeWidth="1.2" strokeDasharray="2 1" />
      <path d="M15 15L20 10L25 15L35 10L40 15" stroke="#D6A642" strokeWidth="1" strokeDasharray="3 1" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#ikat-chevron)" />
  </svg>
);

export const BandhaniDotPattern: React.FC<{ className?: string }> = ({ className = 'w-full h-6' }) => (
  <svg className={className} viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <pattern id="bandhani-dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="4" fill="#A63D35" fillOpacity="0.2" />
      <circle cx="10" cy="10" r="2" fill="#D6A642" />
      <circle cx="10" cy="10" r="0.8" fill="#F7F1E7" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#bandhani-dots)" />
  </svg>
);

export const BlockPrintFloral: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.5 6 18 7.5 22 12C18 16.5 13.5 18 12 22C10.5 18 6 16.5 2 12C6 7.5 10.5 6 12 2Z" fill="#A63D35" fillOpacity="0.15" stroke="#A63D35" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="3" fill="#D6A642" />
  </svg>
);

export const TextileBorderDivider: React.FC<{ className?: string; title?: string }> = ({ className = 'my-8', title }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-beige to-terracotta/40" />
    <div className="flex items-center gap-2 px-3 py-1 bg-beige/40 rounded-full border border-beige">
      <div className="w-1.5 h-1.5 rotate-45 bg-madder" />
      {title && <span className="text-xs uppercase tracking-widest font-serif text-charcoal/80">{title}</span>}
      <div className="w-1.5 h-1.5 rotate-45 bg-turmeric" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-beige to-terracotta/40" />
  </div>
);
