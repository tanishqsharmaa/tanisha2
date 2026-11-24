import React, { useState, useEffect, useId } from 'react';

interface TextileImageProps {
  src?: string;
  alt: string;
  className?: string;
  motifType?: 'patola' | 'bandhani' | 'ikat' | 'blockprint' | 'brocade' | 'weave';
  fallbackLabel?: string;
}

export const TextileImage: React.FC<TextileImageProps> = ({
  src,
  alt,
  className = 'w-full h-48 object-cover',
  motifType = 'weave',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);
  const rawId = useId();
  const patternId = `img-pattern-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-4 bg-gradient-to-br from-beige/70 to-ivory border border-beige/80 text-charcoal overflow-hidden ${className}`}
        role="img"
        aria-label={`${alt} (Archival Illustration)`}
      >
        {/* Subtle geometric SVG motif backdrop with dynamic unique pattern ID */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
          {motifType === 'patola' && (
            <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="#263B59" strokeWidth="1" />
              <circle cx="10" cy="10" r="2" fill="#A63D35" />
            </pattern>
          )}
          {motifType === 'bandhani' && (
            <pattern id={patternId} width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="3" fill="#A63D35" />
              <circle cx="8" cy="8" r="1.2" fill="#F7F1E7" />
            </pattern>
          )}
          {motifType !== 'patola' && motifType !== 'bandhani' && (
            <pattern id={patternId} width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M0 6H12M6 0V12" stroke="#B86B4B" strokeWidth="0.8" />
            </pattern>
          )}
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center max-w-[85%]">
          <div className="w-10 h-10 mb-2 rounded-full bg-ivory/90 border border-terracotta/40 flex items-center justify-center shadow-sm">
            <span className="font-serif text-madder text-base font-bold">IT</span>
          </div>
          <span className="font-serif text-sm font-semibold tracking-wide text-indigo line-clamp-1">{alt}</span>
          <span className="text-[11px] uppercase tracking-wider text-charcoal/70 mt-1 font-sans">
            {fallbackLabel || 'Archival Illustration · Living Heritage'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`transition-opacity duration-300 ${className}`}
    />
  );
};
