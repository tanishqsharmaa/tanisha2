import React from 'react';
import { Link } from 'react-router-dom';

const ExplorePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
          Explore India's Textile Heritage
        </h1>
        <p className="text-sm text-charcoal/70 mt-1">
          Journey across 5 regions, 36 states and union territories, and 15 textile classification categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-ivory rounded-xl border border-beige">
          <h2 className="font-serif text-xl font-bold text-indigo mb-2">Explore by Region</h2>
          <p className="text-xs text-charcoal/70 mb-4">
            Interactive geographical map and regional directory covering North, South, East, West, and Northeast.
          </p>
          <Link
            to="/states/gujarat"
            className="text-xs font-semibold uppercase tracking-wider text-madder hover:underline"
          >
            Explore Gujarat State Archive →
          </Link>
        </div>

        <div className="p-6 bg-ivory rounded-xl border border-beige">
          <h2 className="font-serif text-xl font-bold text-indigo mb-2">Textile Classification</h2>
          <p className="text-xs text-charcoal/70 mb-4">
            15 comprehensive categories spanning silks, ikats, block prints, fine muslins, and regional handlooms.
          </p>
          <Link
            to="/classification/ikat-tie-dye-and-block-printed-textiles"
            className="text-xs font-semibold uppercase tracking-wider text-madder hover:underline"
          >
            Explore Ikat, Tie-Dye & Block Prints →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
