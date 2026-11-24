import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StatePage: React.FC = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="border-b border-beige pb-6">
        <span className="text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
          Regional Handloom Archive
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo capitalize mt-1">
          {stateSlug?.replace(/-/g, ' ')}
        </h1>
      </div>

      {stateSlug === 'gujarat' ? (
        <div className="p-6 bg-ivory rounded-xl border border-beige space-y-4">
          <h2 className="font-serif text-2xl font-bold text-indigo">
            Gujarat — A Legacy of Colour, Craft and Weaving
          </h2>
          <p className="text-sm text-charcoal/80 leading-relaxed">
            From intricate double ikat weaving to resist-dyed fabrics and traditional embroidery, Gujarat's textile heritage
            reflects generations of craftsmanship and cultural expression.
          </p>
          <Link
            to="/textiles/patan-patola"
            className="inline-block px-4 py-2 bg-madder text-ivory rounded text-xs font-medium uppercase tracking-wider"
          >
            Explore Patan Patola Archive
          </Link>
        </div>
      ) : (
        <div className="p-8 bg-beige/30 rounded-xl border border-beige/60 text-center space-y-3">
          <p className="font-serif text-lg text-charcoal/90">Textile information is being added</p>
          <p className="text-xs text-charcoal/60 max-w-md mx-auto">
            Our curators and archival researchers are actively documenting the handloom heritage, regional fibers, and indigenous techniques for this region.
          </p>
        </div>
      )}
    </div>
  );
};

export default StatePage;
