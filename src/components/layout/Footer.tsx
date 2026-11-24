import React from 'react';
import { Link } from 'react-router-dom';
import { PatolaDiamondPattern } from '../motifs/TextileMotifs';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-beige/40 border-t border-beige text-charcoal mt-16">
      {/* Decorative Woven Motif Accent */}
      <PatolaDiamondPattern className="w-full h-3 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Academic Statement */}
          <div className="md:col-span-2">
            <span className="font-serif text-xl font-bold tracking-widest text-indigo block">
              INDIAN TEXTILES
            </span>
            <span className="text-xs uppercase tracking-widest text-charcoal/70 block mt-0.5 mb-3">
              Threads of Heritage
            </span>
            <p className="text-xs text-charcoal/80 leading-relaxed max-w-md">
              An academic information architecture and living UX archive dedicated to documenting the craftsmanship,
              indigenous natural fibers, geometric double ikat marvels, and cultural tapestry of India's handloom traditions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-bold text-indigo uppercase tracking-wider mb-3">
              Explore Archive
            </h4>
            <ul className="space-y-2 text-xs text-charcoal/80">
              <li>
                <Link to="/" className="hover:text-madder transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-madder transition-colors">Explore Regions & Map</Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-madder transition-colors">Search Textiles</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-madder transition-colors">About & Team</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured & Provenance */}
          <div>
            <h4 className="font-serif text-sm font-bold text-indigo uppercase tracking-wider mb-3">
              Key Focus
            </h4>
            <ul className="space-y-2 text-xs text-charcoal/80">
              <li>
                <Link to="/textiles/patan-patola" className="hover:text-madder transition-colors font-medium">
                  Patan Patola (Double Ikat)
                </Link>
              </li>
              <li>
                <Link to="/states/gujarat" className="hover:text-madder transition-colors font-medium">
                  Gujarat State Archive
                </Link>
              </li>
              <li>
                <Link to="/classification/ikat-tie-dye-and-block-printed-textiles" className="hover:text-madder transition-colors">
                  Ikat & Resist Dyeing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-beige/70 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal/60 gap-4">
          <p>© {new Date().getFullYear()} INDIAN TEXTILES: Threads of Heritage. Academic & Research Prototype.</p>
          <p className="font-serif italic text-charcoal/70">
            "Padi Patole Bhaat, Phate Pan Fite Nahin" — Handloom Heritage Forever Preserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
