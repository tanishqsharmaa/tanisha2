import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Search } from 'lucide-react';
import { TextileBorderDivider } from '../components/motifs/TextileMotifs';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-beige/30 to-ivory py-16 px-4 sm:px-6 lg:px-8 border-b border-beige">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige/60 border border-beige text-xs uppercase tracking-widest text-charcoal/80 font-medium">
            <span>Living Handloom & Craft Archive</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo tracking-tight">
            The Art of Indian Textiles
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Discover the stories, techniques and traditions woven into India's textile heritage across centuries of artisanal mastery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-madder text-ivory font-medium text-sm hover:bg-madder/90 transition-colors shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Textiles</span>
            </Link>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-ivory border border-beige text-indigo font-medium text-sm hover:bg-beige/40 transition-colors shadow-sm"
            >
              <Search className="w-4 h-4" />
              <span>Discover by Region</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-ivory p-8 rounded-xl border border-beige">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-indigo">
              A Heritage Woven Through Generations
            </h2>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              India's textile traditions represent an unparalleled synthesis of botanical chemistry, mathematical geometry,
              and hereditary craft mastery. From the double ikat silk patolas of Patan to the natural resist-dyed ajrakh blocks of Kutch,
              each fabric reflects the geography and spirit of its people.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-madder hover:underline"
            >
              <span>Learn About Our Research</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="p-6 bg-beige/30 rounded-lg border border-beige/60">
            <h3 className="font-serif text-lg font-bold text-indigo mb-2">Featured Masterwork</h3>
            <p className="text-xs text-charcoal/70 mb-4">
              Explore the mathematical perfection and reversible weave of the sacred Patan Patola.
            </p>
            <Link
              to="/textiles/patan-patola"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo text-ivory rounded text-xs font-medium uppercase tracking-wider hover:bg-indigo/90"
            >
              <span>View Patan Patola Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <TextileBorderDivider title="Living Traditions" />
    </div>
  );
};

export default HomePage;
