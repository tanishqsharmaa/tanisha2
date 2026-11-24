import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TextileDetailPage from '../pages/TextileDetailPage';
import ClassificationPage from '../pages/ClassificationPage';
import AboutPage from '../pages/AboutPage';
import DoubleIkatProcess from '../components/textile/DoubleIkatProcess';
import MotifGallery from '../components/textile/MotifGallery';

describe('TextileDetailPage — Patan Patola (Sections A–J)', () => {
  it('renders all 10 required sections (A–J) with canonical metadata, tags, and linguistic distinction', () => {
    render(
      <MemoryRouter initialEntries={['/textiles/patan-patola']}>
        <Routes>
          <Route path="/textiles/:textileSlug" element={<TextileDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    // Section A: Hero
    expect(screen.getByRole('heading', { level: 1, name: 'Patan Patola' })).toBeInTheDocument();
    expect(screen.getByText('The Double Ikat Silk Tradition of Gujarat')).toBeInTheDocument();
    expect(screen.getByText('Patan, Gujarat, India')).toBeInTheDocument();

    // 5 Required Tags
    expect(screen.getAllByText('Gujarat').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Patan').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Silk').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Double Ikat').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Handwoven').length).toBeGreaterThan(0);

    // Exact Intro & Linguistic distinction (Patola / Patolu)
    expect(
      screen.getByText(/Patan Patola is a legendary double-ikat woven saree crafted from pure silk in Patan, Gujarat/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Patola is the plural form referring to the textile tradition, whereas a single textile is called Patolu/i)
    ).toBeInTheDocument();

    // Section B: Overview
    expect(screen.getByRole('heading', { name: 'Overview & Heritage' })).toBeInTheDocument();
    expect(screen.getByText(/Originating in the historic royal city of Patan in northern Gujarat/i)).toBeInTheDocument();

    // Section C: Type
    expect(screen.getByRole('heading', { name: 'Textile Classification Type' })).toBeInTheDocument();
    expect(screen.getByText(/Traditional Handwoven Sari:/i)).toBeInTheDocument();
    expect(screen.getByText(/Double Ikat Textile:/i)).toBeInTheDocument();
    expect(screen.getByText(/Silk-Based Heirloom Textile:/i)).toBeInTheDocument();

    // Section D: Material
    expect(screen.getByRole('heading', { name: 'Material Composition & Dyes' })).toBeInTheDocument();
    expect(screen.getByText(/Pure Mulberry Silk Yarn/i)).toBeInTheDocument();
    expect(screen.getByText(/madder root \(manjistha\) for crimson, turmeric \(haldi\) for golden yellow/i)).toBeInTheDocument();

    // Section E: Technique (DoubleIkatProcess 6 steps)
    expect(screen.getByRole('heading', { name: 'The Art of Double Ikat' })).toBeInTheDocument();
    expect(screen.getByText(/Design Planning/i)).toBeInTheDocument();
    expect(screen.getByText(/Thread Preparation/i)).toBeInTheDocument();
    expect(screen.getByText(/^3\. Tying$/i)).toBeInTheDocument();
    expect(screen.getByText(/^4\. Dyeing$/i)).toBeInTheDocument();
    expect(screen.getByText(/Setting the Loom/i)).toBeInTheDocument();
    expect(screen.getByText(/^6\. Weaving$/i)).toBeInTheDocument();

    // Section F: Motifs (MotifGallery 6 motifs)
    expect(screen.getByRole('heading', { name: 'Traditional Patan Patola Motifs' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Nari Kunjar' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Ratan Chowk' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Chhabdi' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Paan' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Phul' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Geometric Diamonds/i })).toBeInTheDocument();

    // Section G: Centre
    expect(screen.getByRole('heading', { name: /Primary Centre: Patan, Gujarat/i })).toBeInTheDocument();
    expect(screen.getByText(/Salvi weavers migrated here in the 12th century under King Kumarapala/i)).toBeInTheDocument();

    // Section H: Cultural Significance
    expect(screen.getByRole('heading', { name: 'Cultural Significance & Living Legacy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Auspicious Bridal Heirloom' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Southeast Asian Maritime Trade' })).toBeInTheDocument();

    // Section I: Related Textiles (4 preview cards)
    expect(screen.getByRole('heading', { name: 'Related Handloom Traditions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bandhani' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mashru' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pochampally Ikat' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Odisha Ikat' })).toBeInTheDocument();

    // Section J: Sources and Further Reading (4 official URLs)
    expect(screen.getByRole('heading', { name: 'Sources & Official Further Reading' })).toBeInTheDocument();
    const sourceLinks = screen.getAllByRole('link');
    const hrefs = sourceLinks.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('https://www.incredibleindia.gov.in/en/gujarat/patan-patola');
    expect(hrefs).toContain('https://patan.nic.in/tourist-place/patola/');
    expect(hrefs).toContain('https://gujarattourism.com/north-zone/patan/patola.html');
    expect(hrefs).toContain('https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/232');
  });

  it('renders preview state with "Detailed information coming soon" for non-Patan-Patola textiles', () => {
    // 1. Bandhani preview
    const { unmount } = render(
      <MemoryRouter initialEntries={['/textiles/bandhani']}>
        <Routes>
          <Route path="/textiles/:textileSlug" element={<TextileDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Bandhani' })).toBeInTheDocument();
    expect(screen.getByText('Detailed information coming soon')).toBeInTheDocument();
    expect(screen.getByText(/Archival researchers and handloom scholars are currently documenting/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Complete Patan Patola Archive/i })).toBeInTheDocument();

    unmount();

    // 2. Pochampally Ikat preview
    render(
      <MemoryRouter initialEntries={['/textiles/pochampally-ikat']}>
        <Routes>
          <Route path="/textiles/:textileSlug" element={<TextileDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Pochampally Ikat' })).toBeInTheDocument();
    expect(screen.getByText('Detailed information coming soon')).toBeInTheDocument();
  });
});

describe('DoubleIkatProcess & MotifGallery Component Integrity', () => {
  it('renders DoubleIkatProcess with all 6 steps and allows switching to Step Focus mode', () => {
    render(<DoubleIkatProcess />);

    expect(screen.getByText('The Art of Double Ikat')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 6')).toBeInTheDocument();

    // Switch view mode
    const stepFocusButton = screen.getByRole('button', { name: /Step Focus/i });
    fireEvent.click(stepFocusButton);
    expect(screen.getByText('Phase 1 of 6')).toBeInTheDocument();

    // Click Next
    const nextButton = screen.getByRole('button', { name: /Next/i });
    fireEvent.click(nextButton);
    expect(screen.getByText('Phase 2 of 6')).toBeInTheDocument();
  });

  it('renders MotifGallery with all 6 motifs and opens inspection dialog', () => {
    render(<MotifGallery />);

    expect(screen.getByText('Traditional Patan Patola Motifs')).toBeInTheDocument();
    expect(screen.getByText('6 Verified Archival Motifs')).toBeInTheDocument();

    // Open inspection dialog for Nari Kunjar
    const inspectButton = screen.getByLabelText('Inspect motif Nari Kunjar');
    fireEvent.click(inspectButton);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByText('Symbolic Meaning:')).toBeInTheDocument();
    expect(within(dialog).getByText('Woman & Elephant')).toBeInTheDocument();

    // Close dialog
    const closeButton = screen.getByRole('button', { name: /Close dialog/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('ClassificationPage — 15 Categories & Patan Patola Featured Anchor', () => {
  it('renders "Textile Classification" heading and all 15 category switcher tabs', () => {
    render(
      <MemoryRouter initialEntries={['/classification/silk-and-silk-based-textiles']}>
        <Routes>
          <Route path="/classification/:categorySlug" element={<ClassificationPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Textile Classification' })).toBeInTheDocument();
    expect(screen.getByText('Archival Taxonomy · 15 Major Categories')).toBeInTheDocument();

    // Check presence of CAT 01 to CAT 15
    for (let i = 1; i <= 15; i++) {
      const code = `CAT ${String(i).padStart(2, '0')}`;
      expect(screen.getByText(code)).toBeInTheDocument();
    }
  });

  it('handles /classification/ikat-tie-dye-block-printed alias and links to Patan Patola', () => {
    render(
      <MemoryRouter initialEntries={['/classification/ikat-tie-dye-block-printed']}>
        <Routes>
          <Route path="/classification/:categorySlug" element={<ClassificationPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Ikat, Tie-Dye & Block-Printed Textiles' })).toBeInTheDocument();
    expect(screen.getByText(/Featured Anchor Textile/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Patan Patola/i })).toHaveAttribute(
      'href',
      '/textiles/patan-patola'
    );

    // Should include Patan Patola card
    expect(screen.getByRole('heading', { name: 'Patan Patola' })).toBeInTheDocument();
  });
});

describe('AboutPage — Curatorial Team, Careers, Resources & Form Validation', () => {
  it('renders "Preserving Stories Woven in Fabric" and 5 editable team-member cards', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Preserving Stories Woven in Fabric' })).toBeInTheDocument();
    expect(screen.getByText('About Us — Our Team of 5')).toBeInTheDocument();

    // 5 un-invented team placeholders
    expect(screen.getByText('Team Member 1')).toBeInTheDocument();
    expect(screen.getByText('Team Member 2')).toBeInTheDocument();
    expect(screen.getByText('Team Member 3')).toBeInTheDocument();
    expect(screen.getByText('Team Member 4')).toBeInTheDocument();
    expect(screen.getByText('Team Member 5')).toBeInTheDocument();

    // Test editing a member card
    const editButtons = screen.getAllByRole('button', { name: /Edit/i });
    fireEvent.click(editButtons[0]);

    // Name input appears
    const nameInput = screen.getByDisplayValue('Team Member 1');
    fireEvent.change(nameInput, { target: { value: 'Curator Alpha' } });

    const saveButton = screen.getByRole('button', { name: /Save Changes/i });
    fireEvent.click(saveButton);

    expect(screen.getByText('Curator Alpha')).toBeInTheDocument();
  });

  it('renders all 5 required career pathways and structured resources', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    // 5 Careers
    expect(screen.getByRole('heading', { name: 'Textile Design' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Handloom and Craft Research' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Fashion and Surface Design' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Craft Documentation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Textile Conservation' })).toBeInTheDocument();

    // Resources
    expect(screen.getByRole('heading', { name: 'Resources & Authoritative Archives' })).toBeInTheDocument();
    expect(screen.getByText('Government Portals')).toBeInTheDocument();
    expect(screen.getByText('GI Registry & IP Repositories')).toBeInTheDocument();
    expect(screen.getByText('Museum Archives & Institutions')).toBeInTheDocument();
    expect(screen.getByText('Reference Literature')).toBeInTheDocument();
  });

  it('validates contact form on empty submit and displays Prototype Notice on valid submit', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    const submitButton = screen.getByRole('button', { name: /Submit Inquiry/i });

    // Submit empty form -> should display validation errors
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your message.')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();

    // Fill valid data
    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Message \/ Curatorial Feedback/i);

    fireEvent.change(nameInput, { target: { value: 'Kaveri Devi' } });
    fireEvent.change(emailInput, { target: { value: 'kaveri@heritage.org' } });
    fireEvent.change(messageInput, { target: { value: 'Inquiry regarding Patan Patola archive documentation.' } });

    fireEvent.click(submitButton);

    // Explicit Prototype Notice must appear
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(
      screen.getByText(/Prototype Notice: No backend is connected — your message was validated locally in this academic prototype/i)
    ).toBeInTheDocument();
  });
});
