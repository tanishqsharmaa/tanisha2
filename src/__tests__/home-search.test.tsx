import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import { FindYourTextileSection } from '../components/search/FindYourTextileSection';

describe('Home Page Experience (Master Prompt Section 4 / T01)', () => {
  it('renders Hero Section with exact title, supporting text, both CTAs, and Hero Patan Patola card linking to /textiles/patan-patola', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    // Title & supporting text
    expect(screen.getByRole('heading', { level: 1, name: /The Art of Indian Textiles/i })).toBeInTheDocument();
    expect(
      screen.getByText(/Discover the stories, techniques and traditions woven into India's textile heritage/i)
    ).toBeInTheDocument();

    // CTAs
    const exploreCta = screen.getByRole('link', { name: /Explore Textiles/i });
    expect(exploreCta).toBeInTheDocument();
    expect(exploreCta).toHaveAttribute('href', '/explore');

    const regionCta = screen.getByRole('link', { name: /Discover by Region/i });
    expect(regionCta).toBeInTheDocument();
    expect(regionCta).toHaveAttribute('href', '/explore#regions');

    // Hero Patan Patola Showcase card link
    const heroShowcaseLink = screen.getByRole('link', { name: /Explore Patan Patola Double Ikat/i });
    expect(heroShowcaseLink).toBeInTheDocument();
    expect(heroShowcaseLink).toHaveAttribute('href', '/textiles/patan-patola');
  });

  it('renders "A Heritage Woven Through Generations" two-column editorial introduction', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { level: 2, name: /A Heritage Woven Through Generations/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/For over five millennia, India's textile traditions have stood as the world's most sophisticated/i)
    ).toBeInTheDocument();
  });

  it('renders all 4 Significance of Indian Textiles cards', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 3, name: 'Cultural Identity' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Traditional Craftsmanship' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Regional Diversity' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Living Heritage' })).toBeInTheDocument();
  });

  it('renders horizontal scrollable Featured Textiles carousel containing all 7 Gujarat textiles', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Featured Textiles' })).toBeInTheDocument();

    // Verify all 7 Gujarat textiles are present in document
    const gujaratTextiles = [
      'Patan Patola',
      'Bandhani',
      'Mashru',
      'Tangaliya',
      'Kutch Embroidery',
      'Ajrakh',
      'Gharchola',
    ];

    gujaratTextiles.forEach((name) => {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    });

    // Verify Patan Patola links to canonical /textiles/patan-patola
    const patolaLinks = screen.getAllByRole('link', { name: /Explore Full Archive/i });
    expect(patolaLinks[0]).toHaveAttribute('href', '/textiles/patan-patola');
  });

  it('renders "Find Your Textile" 4-method search block with functional search and reset', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Find Your Textile' })).toBeInTheDocument();
    expect(screen.getByLabelText(/1\. Search by Textile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/2\. Search by State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/3\. Search by Technique/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/4\. Search by Material/i)).toBeInTheDocument();

    // Test typing a query and clicking Search
    const input = screen.getByLabelText(/1\. Search by Textile/i);
    fireEvent.change(input, { target: { value: 'Patan Patola' } });

    const searchBtn = screen.getByRole('button', { name: /^Search$/i });
    fireEvent.click(searchBtn);

    // Matching textiles should appear
    expect(screen.getByRole('heading', { level: 3, name: /Matching Textiles/i })).toBeInTheDocument();

    // Reset button clears search
    const resetBtn = screen.getByRole('button', { name: /^Reset$/i });
    fireEvent.click(resetBtn);
    expect(input).toHaveValue('');
  });

  it('finds Tangaliya when filtering by "Daana (Bead) Knotting" in FindYourTextileSection', () => {
    render(
      <MemoryRouter>
        <FindYourTextileSection />
      </MemoryRouter>
    );

    const techniqueSelect = screen.getByLabelText(/3\. Search by Technique/i);
    fireEvent.change(techniqueSelect, { target: { value: 'Daana (Bead) Knotting' } });

    const searchBtn = screen.getByRole('button', { name: /^Search$/i });
    fireEvent.click(searchBtn);

    expect(screen.getByRole('heading', { level: 3, name: 'Tangaliya' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Patan Patola' })).not.toBeInTheDocument();
  });
});

describe('Search Page Experience (Master Prompt Section 5 / T01)', () => {
  it('renders Search page heading, suggestions, and 4 filter controls', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Search the Textile Archive' })).toBeInTheDocument();
    expect(screen.getByText('Suggested Searches:')).toBeInTheDocument();

    // 4 Dimensional Filters
    expect(screen.getByLabelText('Textile')).toBeInTheDocument();
    expect(screen.getByLabelText('State / Region')).toBeInTheDocument();
    expect(screen.getByLabelText('Technique')).toBeInTheDocument();
    expect(screen.getByLabelText('Material')).toBeInTheDocument();
  });

  it('performs live case-insensitive search and updates results dynamically', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search by textile name/i);

    // Initial state: results header displayed
    expect(screen.getByRole('heading', { level: 2, name: 'Archive Results' })).toBeInTheDocument();

    // Case-insensitive query "patan patola"
    fireEvent.change(searchInput, { target: { value: 'patan patola' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Full Archive/i })).toHaveAttribute(
      'href',
      '/textiles/patan-patola'
    );
  });

  it('filters by state (Gujarat), technique (Double Ikat), and material (Silk)', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const stateSelect = screen.getByLabelText('State / Region');
    fireEvent.change(stateSelect, { target: { value: 'gujarat' } });

    // Patan Patola and Bandhani should both be visible under Gujarat
    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Bandhani' })).toBeInTheDocument();

    // Narrow down by technique Double Ikat
    const techniqueSelect = screen.getByLabelText('Technique');
    fireEvent.change(techniqueSelect, { target: { value: 'Double Ikat' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Bandhani' })).not.toBeInTheDocument();

    // Narrow down by Material Silk
    const materialSelect = screen.getByLabelText('Material');
    fireEvent.change(materialSelect, { target: { value: 'Silk' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();
  });

  it('filters by textile dropdown filter', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const textileSelect = screen.getByLabelText('Textile');
    fireEvent.change(textileSelect, { target: { value: 'Bandhani' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Bandhani' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Patan Patola' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Mashru' })).not.toBeInTheDocument();
  });

  it('filters by "Daana (Bead) Knotting" technique returning Tangaliya', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const techniqueSelect = screen.getByLabelText('Technique');
    fireEvent.change(techniqueSelect, { target: { value: 'Daana (Bead) Knotting' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Tangaliya' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Patan Patola' })).not.toBeInTheDocument();
  });

  it('filters by material (Desi Wool & Pashmina / Wool) returning Tangaliya', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const materialSelect = screen.getByLabelText('Material');
    fireEvent.change(materialSelect, { target: { value: 'Wool' } });

    expect(screen.getByRole('heading', { level: 3, name: 'Tangaliya' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Patan Patola' })).not.toBeInTheDocument();
  });

  it('updates filters and results when clicking suggestion chips', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    // Click "Ajrakh" suggestion chip
    const ajrakhChip = screen.getByRole('button', { name: 'Ajrakh' });
    fireEvent.click(ajrakhChip);

    expect(screen.getByRole('heading', { level: 3, name: 'Ajrakh' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'Patan Patola' })).not.toBeInTheDocument();

    // Click "Silk" suggestion chip (material filter)
    const silkChip = screen.getByRole('button', { name: 'Silk' });
    fireEvent.click(silkChip);

    // Clear filters button should be visible
    expect(screen.getByRole('button', { name: /Clear Filters/i })).toBeInTheDocument();
  });

  it('renders helpful empty state with reset button on non-matching query', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search by textile name/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistent-fabric-query-xyz' } });

    expect(screen.getByRole('heading', { level: 3, name: 'No matching textiles found in the archive' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Clear All Filters & Reset/i })).toBeInTheDocument();

    // Clicking reset restores items
    fireEvent.click(screen.getByRole('button', { name: /Clear All Filters & Reset/i }));
    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();
  });
});
