import React from 'react';
import { Search } from 'lucide-react';

const SearchPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
          Search the Textile Archive
        </h1>
        <p className="text-sm text-charcoal/70 mt-1">
          Explore India's textile heritage by textile name, state, weaving technique, or material.
        </p>
      </div>

      <div className="bg-ivory p-6 rounded-xl border border-beige space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/50" />
          <input
            type="text"
            placeholder="Search by textile (e.g. Patan Patola, Bandhani), technique (Double Ikat), or state..."
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-beige bg-beige/20 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-indigo/20 focus:border-indigo"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
