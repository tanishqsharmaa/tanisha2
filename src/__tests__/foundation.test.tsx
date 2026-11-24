import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  REGIONS,
  STATES_AND_UTS,
  TEXTILE_CATEGORIES,
  getStatesByRegion,
  getTextileBySlug,
  searchTextiles,
} from '../data';
import { Navbar } from '../components/layout/Navbar';
import { TextileCard } from '../components/shared/TextileCard';

describe('Data Layer Integrity', () => {
  it('exports all 5 regions with accurate identifiers and non-empty metadata', () => {
    expect(REGIONS).toHaveLength(5);
    const regionIds = REGIONS.map((r) => r.id);
    expect(regionIds).toEqual(['north', 'south', 'east', 'west', 'northeast']);

    REGIONS.forEach((region) => {
      expect(region.name).toBeTruthy();
      expect(region.tagline).toBeTruthy();
      expect(region.description).toBeTruthy();
      expect(region.states.length).toBeGreaterThan(0);
    });
  });

  it('exports exactly 36 states and union territories (28 states + 8 UTs)', () => {
    expect(STATES_AND_UTS).toHaveLength(36);

    const states = STATES_AND_UTS.filter((s) => !s.isUnionTerritory);
    const uts = STATES_AND_UTS.filter((s) => s.isUnionTerritory);

    expect(states).toHaveLength(28);
    expect(uts).toHaveLength(8);

    // Verify regional counts
    expect(getStatesByRegion('north')).toHaveLength(9);
    expect(getStatesByRegion('south')).toHaveLength(8);
    expect(getStatesByRegion('east')).toHaveLength(5);
    expect(getStatesByRegion('west')).toHaveLength(6);
    expect(getStatesByRegion('northeast')).toHaveLength(8);
  });

  it('ensures ONLY Gujarat is marked isFullyDeveloped: true with complete hero metadata', () => {
    const developed = STATES_AND_UTS.filter((s) => s.isFullyDeveloped);
    expect(developed).toHaveLength(1);
    expect(developed[0].slug).toBe('gujarat');
    expect(developed[0].heroHeading).toContain('Gujarat — A Legacy of Colour, Craft and Weaving');
    expect(developed[0].textileSlugs).toEqual([
      'patan-patola',
      'bandhani',
      'mashru',
      'tangaliya',
      'kutch-embroidery',
      'ajrakh',
      'gharchola',
    ]);

    // All other 35 states/UTs must have isFullyDeveloped: false and honest placeholder note
    const placeholders = STATES_AND_UTS.filter((s) => !s.isFullyDeveloped);
    expect(placeholders).toHaveLength(35);
    placeholders.forEach((entity) => {
      expect(entity.placeholderNote).toBe('Textile information is being added');
    });
  });

  it('exports all 15 Textile Classification categories in exact numerical order', () => {
    expect(TEXTILE_CATEGORIES).toHaveLength(15);
    TEXTILE_CATEGORIES.forEach((cat, index) => {
      expect(cat.number).toBe(index + 1);
      expect(cat.title).toBeTruthy();
      expect(cat.shortDescription).toBeTruthy();
    });

    // Category 1: Silk & Silk-Based Textiles
    expect(TEXTILE_CATEGORIES[0].slug).toBe('silk-and-silk-based-textiles');
    expect(TEXTILE_CATEGORIES[0].title).toBe('Silk & Silk-Based Textiles');

    // Category 4: Ikat, Tie-Dye & Block-Printed Textiles includes patan-patola
    const cat4 = TEXTILE_CATEGORIES[3];
    expect(cat4.slug).toBe('ikat-tie-dye-and-block-printed-textiles');
    expect(cat4.title).toBe('Ikat, Tie-Dye & Block-Printed Textiles');
    expect(cat4.textileSlugs).toContain('patan-patola');

    // Category 15: Mizo Puans & Regional Handloom Clusters
    expect(TEXTILE_CATEGORIES[14].slug).toBe('mizo-puans-and-regional-handloom-clusters');
    expect(TEXTILE_CATEGORIES[14].title).toBe('Mizo Puans & Regional Handloom Clusters');
  });

  it('exports verified Section 8 A–J archive for Patan Patola', () => {
    const patola = getTextileBySlug('patan-patola');
    expect(patola).toBeDefined();
    if (!patola) return;

    expect(patola.isFullyDeveloped).toBe(true);
    expect(patola.name).toBe('Patan Patola');
    expect(patola.centre).toBe('Patan, Gujarat');
    expect(patola.stateSlug).toBe('gujarat');

    // 5 Tags
    expect(patola.tags).toEqual(['Gujarat', 'Patan', 'Silk', 'Double Ikat', 'Handwoven']);

    // Plural linguistic note
    expect(patola.pluralNote).toContain('Patolu');

    // Overview paragraphs
    expect(patola.overview?.length).toBeGreaterThanOrEqual(3);

    // 6-step Double Ikat process
    expect(patola.techniqueSteps).toHaveLength(6);
    expect(patola.techniqueSteps?.[0].title).toBe('Design Planning');
    expect(patola.techniqueSteps?.[5].title).toBe('Weaving');

    // 6 Motifs
    expect(patola.motifs).toHaveLength(6);
    const motifIds = patola.motifs?.map((m) => m.id);
    expect(motifIds).toEqual([
      'nari-kunjar',
      'ratan-chowk',
      'chhabdi',
      'paan',
      'phul',
      'geometric-diamonds',
    ]);

    // 4 Sources
    expect(patola.sources).toHaveLength(4);

    // 4 Related textiles
    expect(patola.relatedTextileSlugs).toEqual([
      'bandhani',
      'mashru',
      'pochampally-ikat',
      'odisha-ikat',
    ]);
  });

  it('exports preview records for all required secondary textiles', () => {
    const previews = ['bandhani', 'mashru', 'tangaliya', 'kutch-embroidery', 'ajrakh', 'gharchola', 'pochampally-ikat', 'odisha-ikat'];
    previews.forEach((slug) => {
      const record = getTextileBySlug(slug);
      expect(record).toBeDefined();
      expect(record?.isFullyDeveloped).toBe(false);
      expect(record?.tags.length).toBeGreaterThan(0);
    });
  });

  it('correctly filters textiles with searchTextiles', () => {
    // Case-insensitive name search
    const patolaMatches = searchTextiles('PATAN');
    expect(patolaMatches.some((t) => t.slug === 'patan-patola')).toBe(true);

    // State filter
    const gujaratTextiles = searchTextiles('', { state: 'gujarat' });
    expect(gujaratTextiles.length).toBeGreaterThanOrEqual(7);

    // Technique filter
    const ikatMatches = searchTextiles('', { technique: 'Double Ikat' });
    expect(ikatMatches.some((t) => t.slug === 'patan-patola')).toBe(true);

    // Non-matching query returns empty
    const noMatches = searchTextiles('non-existent-craft-xyz');
    expect(noMatches).toHaveLength(0);
  });
});

describe('Persistent Shell & Components', () => {
  it('renders Navbar with logo, tagline, links, and search shortcut', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('INDIAN TEXTILES')).toBeInTheDocument();
    expect(screen.getByText('Threads of Heritage')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /search/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();

    // Mobile menu toggle
    const toggleButton = screen.getByLabelText('Toggle Navigation Menu');
    expect(toggleButton).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByText('Preserving Living Handloom Knowledge')).toBeInTheDocument();
  });

  it('renders TextileCard with Complete Archive badge for Patan Patola', () => {
    const patola = getTextileBySlug('patan-patola')!;
    render(
      <MemoryRouter>
        <TextileCard textile={patola} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('Complete Archive')).toBeInTheDocument();
    expect(screen.getByText('Explore Full Archive')).toBeInTheDocument();
  });

  it('renders TextileCard with Preview badge for preview textiles', () => {
    const bandhani = getTextileBySlug('bandhani')!;
    render(
      <MemoryRouter>
        <TextileCard textile={bandhani} />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Bandhani' })).toBeInTheDocument();
    expect(screen.getByText('Preview · Detailed info coming soon')).toBeInTheDocument();
    expect(screen.getByText('View Preview')).toBeInTheDocument();
  });
});
