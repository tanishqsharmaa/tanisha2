import React from 'react';
import { Link } from 'react-router-dom';
import { TextileRecord } from '../../types/archive';
import { TextileImage } from './TextileImage';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TextileCardProps {
  textile: TextileRecord;
  className?: string;
}

export const TextileCard: React.FC<TextileCardProps> = ({ textile, className = '' }) => {
  return (
    <div
      className={`group relative flex flex-col bg-ivory rounded-lg border border-beige/90 overflow-hidden shadow-sm hover:shadow-md hover:border-terracotta/40 transition-all duration-300 ${className}`}
    >
      {/* Visual Header / Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige/40">
        <TextileImage
          src={textile.heroImage}
          alt={textile.name}
          motifType={textile.motifPattern}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-2.5 left-2.5 z-10">
          {textile.isFullyDeveloped ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-madder text-ivory shadow-sm tracking-wide">
              <Sparkles className="w-3 h-3 text-turmeric" />
              Complete Archive
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-beige/90 text-charcoal border border-beige shadow-sm">
              Preview · Detailed info coming soon
            </span>
          )}
        </div>

        {/* State Badge */}
        <div className="absolute bottom-2.5 right-2.5 z-10">
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-indigo/85 text-ivory backdrop-blur-sm">
            {textile.stateName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg font-bold text-indigo group-hover:text-madder transition-colors line-clamp-1">
              {textile.name}
            </h3>
          </div>
          <p className="text-xs text-charcoal/70 italic font-serif line-clamp-1 mb-2">
            {textile.subtitle}
          </p>
          <p className="text-xs text-charcoal/80 line-clamp-2 leading-relaxed mb-3">
            {textile.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {textile.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-beige/50 text-charcoal/70 rounded border border-beige"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-beige/60">
          <Link
            to={`/textiles/${textile.slug}`}
            className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-indigo hover:text-madder transition-colors"
          >
            <span>{textile.isFullyDeveloped ? 'Explore Full Archive' : 'View Preview'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
