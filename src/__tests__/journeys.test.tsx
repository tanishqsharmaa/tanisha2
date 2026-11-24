import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import ExplorePage from '../pages/ExplorePage';
import ClassificationPage from '../pages/ClassificationPage';
import StatePage from '../pages/StatePage';
import TextileDetailPage from '../pages/TextileDetailPage';
import AboutPage from '../pages/AboutPage';

/**
 * Integrated TestApp wrapper simulating full React Router DOM v6 hierarchy
 * matching src/App.tsx under MemoryRouter.
 */
const TestApp = ({ initialEntries = ['/'] }: { initialEntries?: string[] }) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/classification/:categorySlug" element={<ClassificationPage />} />
        <Route path="/states/:stateSlug" element={<StatePage />} />
        <Route path="/textiles/:textileSlug" element={<TextileDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  </MemoryRouter>
);

describe('End-to-End User Journeys (Master Prompt Section 14 / Task T04)', () => {
  // ==========================================================================
  // JOURNEY 1: Region-based exploration
  // Home → Explore → West → Gujarat → Patan Patola → Full Textile Details
  // ==========================================================================
  it('Journey 1 (Region-based): navigates Home → Explore → West → Gujarat → Patan Patola → Full Sections A–J', () => {
    render(<TestApp initialEntries={['/']} />);

    // 1. Home Page Landing
    expect(screen.getByRole('heading', { level: 1, name: /The Art of Indian Textiles/i })).toBeInTheDocument();

    // 2. Click "Explore Textiles" CTA
    const exploreCta = screen.getByRole('link', { name: /Explore Textiles/i });
    fireEvent.click(exploreCta);

    // 3. Explore Page: Atlas & Taxonomy
    expect(screen.getByRole('heading', { level: 1, name: /Explore India's Textile Heritage/i })).toBeInTheDocument();

    // 4. Select West Region tab in Region Explorer
    const westTab = screen.getByRole('tab', { name: /West/i });
    fireEvent.click(westTab);
    expect(screen.getByText('West India')).toBeInTheDocument();

    // 5. Click Gujarat State card in Region Explorer
    const gujaratBtn = document.querySelector('button[data-state-slug="gujarat"]');
    expect(gujaratBtn).not.toBeNull();
    fireEvent.click(gujaratBtn!);

    // 6. Gujarat State Page (/states/gujarat)
    expect(screen.getByRole('heading', { level: 1, name: /Gujarat/i })).toBeInTheDocument();
    expect(screen.getByText('Complete State Archive')).toBeInTheDocument();
    expect(screen.getByText('7 Documented Traditions')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();

    // 7. Click Patan Patola Archive link
    const patolaArchiveLink = screen.getByRole('link', { name: /Explore Patan Patola Archive/i });
    expect(patolaArchiveLink).toHaveAttribute('href', '/textiles/patan-patola');
    fireEvent.click(patolaArchiveLink);

    // 8. Full Patan Patola Detail Page (/textiles/patan-patola) Sections A–J
    // Section A: Hero & Metadata
    expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('The Double Ikat Silk Tradition of Gujarat')).toBeInTheDocument();
    expect(screen.getByText('Patan, Gujarat, India')).toBeInTheDocument();

    // Section A: 5 Information Tags
    expect(screen.getAllByText('Gujarat').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Patan').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Silk').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Double Ikat').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Handwoven').length).toBeGreaterThan(0);

    // Section A: Linguistic distinction
    expect(
      screen.getByText(/Patola is the plural form referring to the textile tradition, whereas a single textile is called Patolu/i)
    ).toBeInTheDocument();

    // Section B: Overview & Heritage
    expect(screen.getByRole('heading', { name: 'Overview & Heritage' })).toBeInTheDocument();

    // Section C: Type
    expect(screen.getByRole('heading', { name: 'Textile Classification Type' })).toBeInTheDocument();

    // Section D: Material
    expect(screen.getByRole('heading', { name: 'Material Composition & Dyes' })).toBeInTheDocument();

    // Section E: Technique (Double Ikat 6 Steps)
    expect(screen.getByRole('heading', { name: 'The Art of Double Ikat' })).toBeInTheDocument();
    expect(screen.getByText(/Design Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/^6\. Weaving$/i)).toBeInTheDocument();

    // Section F: Motifs (6 Motifs)
    expect(screen.getByRole('heading', { name: 'Traditional Patan Patola Motifs' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nari Kunjar' })).toBeInTheDocument();

    // Section G: Centre
    expect(screen.getByRole('heading', { name: /Primary Centre: Patan, Gujarat/i })).toBeInTheDocument();

    // Section H: Cultural Significance
    expect(screen.getByRole('heading', { name: 'Cultural Significance & Living Legacy' })).toBeInTheDocument();

    // Section I: Related Handloom Traditions
    expect(screen.getByRole('heading', { name: 'Related Handloom Traditions' })).toBeInTheDocument();

    // Section J: Sources and Further Reading (4 Official URLs)
    expect(screen.getByRole('heading', { name: 'Sources & Official Further Reading' })).toBeInTheDocument();
    const sourceLinks = screen.getAllByRole('link');
    const hrefs = sourceLinks.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('https://www.incredibleindia.gov.in/en/gujarat/patan-patola');
    expect(hrefs).toContain('https://patan.nic.in/tourist-place/patola/');
    expect(hrefs).toContain('https://gujarattourism.com/north-zone/patan/patola.html');
    expect(hrefs).toContain('https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/232');
  });

  // ==========================================================================
  // JOURNEY 2: Map-based exploration
  // Explore → Interactive India Map → Click Gujarat → Gujarat State Page → Patan Patola
  // ==========================================================================
  it('Journey 2 (Map-based): navigates Explore → Interactive Map SVG (Gujarat) → Gujarat State Page → Patan Patola', () => {
    render(<TestApp initialEntries={['/explore']} />);

    // 1. Interactive SVG Map on Explore Page
    expect(screen.getByText('Select a state to explore its textile heritage.')).toBeInTheDocument();

    // 2. Click Gujarat directly on SVG Map
    const gujaratMapPath = document.querySelector('path[data-state-slug="gujarat"]');
    expect(gujaratMapPath).not.toBeNull();
    fireEvent.click(gujaratMapPath!);

    // 3. Arrive at Gujarat State Page (/states/gujarat)
    expect(screen.getByRole('heading', { level: 1, name: /Gujarat/i })).toBeInTheDocument();
    expect(screen.getByText('Complete State Archive')).toBeInTheDocument();

    // 4. Click Patan Patola textile card
    const patolaCardLinks = screen.getAllByRole('link', { name: /Explore Full Archive/i });
    expect(patolaCardLinks[0]).toHaveAttribute('href', '/textiles/patan-patola');
    fireEvent.click(patolaCardLinks[0]);

    // 5. Arrive at Patan Patola Detail Page
    expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('The Double Ikat Silk Tradition of Gujarat')).toBeInTheDocument();
  });

  // ==========================================================================
  // JOURNEY 3: Category-based exploration
  // Explore → Textile Classification → Ikat, Tie-Dye & Block-Printed Textiles → Patan Patola
  // ==========================================================================
  it('Journey 3 (Category-based): navigates Explore → Category Card → Classification Page → Patan Patola', () => {
    render(<TestApp initialEntries={['/explore']} />);

    // 1. Locate Category 4 (Ikat, Tie-Dye & Block-Printed Textiles) card
    const categoryCard = screen.getByTestId('category-card-ikat-tie-dye-and-block-printed-textiles');
    expect(categoryCard).toBeInTheDocument();

    // 2. Click "Explore Category Archive" link in Category card
    const exploreCatLink = within(categoryCard).getByRole('link', { name: /Explore Category Archive/i });
    expect(exploreCatLink).toHaveAttribute('href', '/classification/ikat-tie-dye-and-block-printed-textiles');
    fireEvent.click(exploreCatLink);

    // 3. Classification Page (/classification/ikat-tie-dye-and-block-printed-textiles)
    expect(screen.getByRole('heading', { level: 1, name: 'Textile Classification' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Ikat, Tie-Dye & Block-Printed Textiles' })).toBeInTheDocument();
    expect(screen.getByText('Category 4 of 15')).toBeInTheDocument();

    // 4. Click "Explore Patan Patola" banner link
    const patolaBannerLink = screen.getByRole('link', { name: /Explore Patan Patola/i });
    expect(patolaBannerLink).toHaveAttribute('href', '/textiles/patan-patola');
    fireEvent.click(patolaBannerLink);

    // 5. Resolves to the shared canonical Patan Patola route
    expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('The Double Ikat Silk Tradition of Gujarat')).toBeInTheDocument();
  });

  // ==========================================================================
  // JOURNEY 4: Search-based exploration
  // Search → Search by Textile → Type "Patan Patola" (case-insensitive) → Select Result → Patan Patola
  // ==========================================================================
  it('Journey 4 (Search-based): performs case-insensitive search on Search Page and navigates to Patan Patola', () => {
    render(<TestApp initialEntries={['/search']} />);

    expect(screen.getByRole('heading', { level: 1, name: 'Search the Textile Archive' })).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(/Search by textile name, technique, state, or material/i);

    // 1. Test case-insensitive lowercase query: "patan patola"
    fireEvent.change(searchInput, { target: { value: 'patan patola' } });
    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();

    // 2. Test title-case query: "Patan Patola"
    fireEvent.change(searchInput, { target: { value: 'Patan Patola' } });
    expect(screen.getByRole('heading', { level: 3, name: 'Patan Patola' })).toBeInTheDocument();

    // 3. Click the result card link
    const resultLink = screen.getByRole('link', { name: /Explore Full Archive/i });
    expect(resultLink).toHaveAttribute('href', '/textiles/patan-patola');
    fireEvent.click(resultLink);

    // 4. Arrive at Patan Patola Detail Page
    expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('The Double Ikat Silk Tradition of Gujarat')).toBeInTheDocument();
  });

  // ==========================================================================
  // JOURNEY 5: Other state & preview textile exploration
  // Explore → Interactive Map → Click Rajasthan, Assam, Ladakh, Puducherry →
  // Verify accurate name, region, and "Textile information is being added"
  // Click non-Patan-Patola textile (Bandhani) → "Detailed information coming soon"
  // ==========================================================================
  describe('Journey 5 (Other States & Preview Textile Exploration)', () => {
    it('displays honest archival placeholder for Rajasthan, Assam, Ladakh, and Puducherry', () => {
      // 1. Rajasthan (West Region State)
      const { unmount: unmountRajasthan } = render(<TestApp initialEntries={['/states/rajasthan']} />);
      expect(screen.getByRole('heading', { level: 1, name: 'Rajasthan' })).toBeInTheDocument();
      expect(screen.getAllByText(/West India/i).length).toBeGreaterThan(0);
      expect(screen.getByRole('heading', { level: 2, name: 'Textile information is being added' })).toBeInTheDocument();
      unmountRajasthan();

      // 2. Assam (Northeast Region State)
      const { unmount: unmountAssam } = render(<TestApp initialEntries={['/states/assam']} />);
      expect(screen.getByRole('heading', { level: 1, name: 'Assam' })).toBeInTheDocument();
      expect(screen.getAllByText(/Northeast India/i).length).toBeGreaterThan(0);
      expect(screen.getByRole('heading', { level: 2, name: 'Textile information is being added' })).toBeInTheDocument();
      unmountAssam();

      // 3. Ladakh (North Region Union Territory)
      const { unmount: unmountLadakh } = render(<TestApp initialEntries={['/states/ladakh']} />);
      expect(screen.getByRole('heading', { level: 1, name: 'Ladakh' })).toBeInTheDocument();
      expect(screen.getAllByText(/North India/i).length).toBeGreaterThan(0);
      expect(screen.getByText('Union Territory')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: 'Textile information is being added' })).toBeInTheDocument();
      unmountLadakh();

      // 4. Puducherry (South Region Union Territory via map callout click)
      const { unmount: unmountPuducherry } = render(<TestApp initialEntries={['/explore']} />);
      const puducherryCallout = screen.getByTestId('callout-puducherry');
      expect(puducherryCallout).toBeInTheDocument();
      fireEvent.click(puducherryCallout);

      expect(screen.getByRole('heading', { level: 1, name: 'Puducherry' })).toBeInTheDocument();
      expect(screen.getAllByText(/South India/i).length).toBeGreaterThan(0);
      expect(screen.getByText('Union Territory')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: 'Textile information is being added' })).toBeInTheDocument();
      unmountPuducherry();
    });

    it('displays honest archival preview state with "Detailed information coming soon" for non-Patan-Patola textiles', () => {
      // Navigate to Bandhani preview (/textiles/bandhani)
      render(<TestApp initialEntries={['/states/gujarat']} />);

      // Find Bandhani card and click Preview
      const bandhaniHeading = screen.getByRole('heading', { level: 3, name: 'Bandhani' });
      expect(bandhaniHeading).toBeInTheDocument();

      const previewLinks = screen.getAllByRole('link', { name: /View Preview/i });
      fireEvent.click(previewLinks[0]);

      // Bandhani Preview page
      expect(screen.getByRole('heading', { level: 1, name: 'Bandhani' })).toBeInTheDocument();
      expect(screen.getByText(/Archival Preview Record · Gujarat/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: 'Detailed information coming soon' })).toBeInTheDocument();

      // Link back to complete archive
      const explorePatolaFromPreview = screen.getByRole('link', { name: /Explore Complete Patan Patola Archive/i });
      expect(explorePatolaFromPreview).toHaveAttribute('href', '/textiles/patan-patola');
      fireEvent.click(explorePatolaFromPreview);

      // Successfully reaches Patan Patola
      expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    });

    it('verifies canonical URL routing across all 5 discovery paths leading to Patan Patola', () => {
      // 1. Home page Featured Carousel
      const { unmount: u1 } = render(<TestApp initialEntries={['/']} />);
      const homePatolaLink = screen.getAllByRole('link', { name: /Explore Full Archive/i })[0];
      expect(homePatolaLink).toHaveAttribute('href', '/textiles/patan-patola');
      u1();

      // 2. Search page result
      const { unmount: u2 } = render(<TestApp initialEntries={['/search?q=patan']} />);
      const searchPatolaLink = screen.getByRole('link', { name: /Explore Full Archive/i });
      expect(searchPatolaLink).toHaveAttribute('href', '/textiles/patan-patola');
      u2();

      // 3. State page (Gujarat)
      const { unmount: u3 } = render(<TestApp initialEntries={['/states/gujarat']} />);
      const statePatolaHeroLink = screen.getByRole('link', { name: /Explore Patan Patola Archive/i });
      expect(statePatolaHeroLink).toHaveAttribute('href', '/textiles/patan-patola');
      u3();

      // 4. Classification page (Ikat)
      const { unmount: u4 } = render(<TestApp initialEntries={['/classification/ikat-tie-dye-and-block-printed-textiles']} />);
      const classificationPatolaLink = screen.getByRole('link', { name: /Explore Patan Patola/i });
      expect(classificationPatolaLink).toHaveAttribute('href', '/textiles/patan-patola');
      u4();

      // 5. Related textile link from Bandhani preview
      const { unmount: u5 } = render(<TestApp initialEntries={['/textiles/bandhani']} />);
      const previewToPatolaLink = screen.getByRole('link', { name: /Explore Complete Patan Patola Archive/i });
      expect(previewToPatolaLink).toHaveAttribute('href', '/textiles/patan-patola');
      u5();
    });
  });
});
