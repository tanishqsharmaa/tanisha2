import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TextileDetailPage: React.FC = () => {
  const { textileSlug } = useParams<{ textileSlug: string }>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="border-b border-beige pb-6">
        <span className="text-xs uppercase tracking-widest text-madder font-semibold">
          {textileSlug === 'patan-patola' ? 'Complete Archive Record' : 'Preview Record'}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-indigo capitalize mt-1">
          {textileSlug?.replace(/-/g, ' ')}
        </h1>
      </div>

      {textileSlug === 'patan-patola' ? (
        <div className="space-y-6">
          <p className="text-base text-charcoal/80 font-serif leading-relaxed">
            Patan Patola is recognized as one of the world's most technically demanding and revered double ikat weaving traditions.
            Originating in Patan, Gujarat, both warp and weft silk yarns are meticulously tied and resist-dyed before weaving.
          </p>
          <div className="p-4 bg-beige/40 rounded-lg border border-beige text-xs text-charcoal/80">
            <strong>Linguistic Note:</strong> Patola is the plural form referring to the textile tradition, whereas a single textile is called Patolu.
          </div>
        </div>
      ) : (
        <div className="p-8 bg-beige/30 rounded-xl border border-beige/60 text-center space-y-3">
          <p className="font-serif text-lg text-charcoal/90">Detailed information coming soon</p>
          <p className="text-xs text-charcoal/60">
            This textile entry is currently being compiled by archival researchers.
          </p>
          <Link to="/explore" className="inline-block text-xs font-semibold text-madder uppercase tracking-wider hover:underline">
            ← Back to Explore
          </Link>
        </div>
      )}
    </div>
  );
};

export default TextileDetailPage;
