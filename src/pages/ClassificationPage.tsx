import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ClassificationPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="border-b border-beige pb-6">
        <span className="text-xs uppercase tracking-widest text-charcoal/70 font-semibold">
          Textile Classification
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo capitalize mt-1">
          {categorySlug?.replace(/-/g, ' ')}
        </h1>
      </div>

      <div className="p-6 bg-ivory rounded-xl border border-beige space-y-4">
        <p className="text-sm text-charcoal/80 leading-relaxed">
          Exploring traditional techniques, fibers, and regional expressions within this textile classification.
        </p>
        <Link
          to="/textiles/patan-patola"
          className="inline-block px-4 py-2 bg-indigo text-ivory rounded text-xs font-medium uppercase tracking-wider"
        >
          Featured: Patan Patola Double Ikat
        </Link>
      </div>
    </div>
  );
};

export default ClassificationPage;
