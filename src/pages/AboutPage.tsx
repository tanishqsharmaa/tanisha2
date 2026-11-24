import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-indigo">
          About the Project
        </h1>
        <p className="text-base text-charcoal/80 font-serif italic mt-2">
          "Preserving Stories Woven in Fabric"
        </p>
      </div>

      <div className="prose max-w-3xl text-sm text-charcoal/80 leading-relaxed space-y-4">
        <p>
          INDIAN TEXTILES — Threads of Heritage is an interactive, responsive, editorial-style academic Information
          Architecture and UX prototype archiving India's textile heritage across regions, states, union territories,
          categories, materials, techniques, motifs, and cultural significance.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
