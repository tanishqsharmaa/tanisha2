import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { STATES_AND_UTS, REGIONS, TEXTILE_CATEGORIES } from '../data';
import { IndiaMapSvg } from '../components/map/IndiaMapSvg';
import { RegionExplorer } from '../components/map/RegionExplorer';
import ExplorePage from '../pages/ExplorePage';
import StatePage from '../pages/StatePage';

describe('IndiaMapSvg Component', () => {
  it('renders interactive SVG map with all 36 states and union territories', () => {
    render(
      <MemoryRouter>
        <IndiaMapSvg />
      </MemoryRouter>
    );

    // Verify legend text is visible
    expect(
      screen.getByText('Select a state to explore its textile heritage.')
    ).toBeInTheDocument();

    // Verify all 36 entities exist with data-state-slug
    STATES_AND_UTS.forEach((entity) => {
      const elements = document.querySelectorAll(`[data-state-slug="${entity.slug}"]`);
      expect(elements.length).toBeGreaterThan(0);
    });

    // Check accessible count summary
    expect(screen.getByText('36')).toBeInTheDocument();
  });

  it('renders clickable callouts for small entities and Union Territories', () => {
    render(
      <MemoryRouter>
        <IndiaMapSvg />
      </MemoryRouter>
    );

    const smallEntities = [
      'chandigarh',
      'delhi',
      'puducherry',
      'lakshadweep',
      'andaman-and-nicobar-islands',
      'dadra-and-nagar-haveli-and-daman-and-diu',
      'goa',
      'sikkim',
    ];

    smallEntities.forEach((slug) => {
      const callout = screen.getByTestId(`callout-${slug}`);
      expect(callout).toBeInTheDocument();
      expect(callout).toHaveAttribute('data-state-slug', slug);
    });
  });

  it('invokes onSelectState callback when a state path is clicked or pressed via keyboard', () => {
    const handleSelectState = vi.fn();
    render(
      <MemoryRouter>
        <IndiaMapSvg onSelectState={handleSelectState} />
      </MemoryRouter>
    );

    const gujaratPath = document.querySelector('path[data-state-slug="gujarat"]');
    expect(gujaratPath).not.toBeNull();
    if (gujaratPath) {
      fireEvent.click(gujaratPath);
      expect(handleSelectState).toHaveBeenCalledWith('gujarat');

      // Keyboard navigation support (Enter key)
      fireEvent.keyDown(gujaratPath, { key: 'Enter', code: 'Enter' });
      expect(handleSelectState).toHaveBeenCalledWith('gujarat');
    }
  });

  it('renders and operates the reset button when a region is active', () => {
    const handleSelectRegion = vi.fn();
    render(
      <MemoryRouter>
        <IndiaMapSvg selectedRegion="west" onSelectRegion={handleSelectRegion} />
      </MemoryRouter>
    );

    const resetBtn = screen.getByRole('button', { name: /Reset \/ Back to All Regions/i });
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);
    expect(handleSelectRegion).toHaveBeenCalledWith(null);
  });

  it('renders and operates the reset button when selectedState is active', () => {
    const handleSelectState = vi.fn();
    render(
      <MemoryRouter>
        <IndiaMapSvg selectedState="gujarat" onSelectState={handleSelectState} />
      </MemoryRouter>
    );

    const resetBtn = screen.getByRole('button', { name: /Reset \/ Back to All Regions/i });
    expect(resetBtn).toBeInTheDocument();

    fireEvent.click(resetBtn);
    expect(handleSelectState).toHaveBeenCalledWith('');
  });

  it('renders shortLabels for compact callout badges without clipping', () => {
    render(
      <MemoryRouter>
        <IndiaMapSvg />
      </MemoryRouter>
    );

    expect(screen.getByText('DNH & DD')).toBeInTheDocument();
    expect(screen.getByText('Andaman & Nicobar')).toBeInTheDocument();
  });

  it('displays floating tooltip on hover and keyboard focus for paths and callouts, and hides on blur/leave', () => {
    render(
      <MemoryRouter>
        <IndiaMapSvg />
      </MemoryRouter>
    );

    const gujaratPath = document.querySelector('path[data-state-slug="gujarat"]');
    expect(gujaratPath).not.toBeNull();
    if (gujaratPath) {
      // Hover displays tooltip
      fireEvent.mouseEnter(gujaratPath);
      expect(screen.getByText('Complete Archive Available')).toBeInTheDocument();

      fireEvent.mouseLeave(gujaratPath);
      expect(screen.queryByText('Complete Archive Available')).toBeNull();

      // Keyboard focus displays tooltip
      fireEvent.focus(gujaratPath);
      expect(screen.getByText('Complete Archive Available')).toBeInTheDocument();

      fireEvent.blur(gujaratPath);
      expect(screen.queryByText('Complete Archive Available')).toBeNull();
    }

    // Callout focus displays tooltip
    const delhiCallout = screen.getByTestId('callout-delhi');
    expect(screen.getAllByText('Delhi')).toHaveLength(1);
    fireEvent.focus(delhiCallout);
    expect(screen.getByText('Textile information is being added')).toBeInTheDocument();
    expect(screen.getAllByText('Delhi')).toHaveLength(2);

    fireEvent.blur(delhiCallout);
    expect(screen.queryByText('Textile information is being added')).toBeNull();
    expect(screen.getAllByText('Delhi')).toHaveLength(1);
  });
});

describe('RegionExplorer Component', () => {
  it('renders all 5 regional tabs with accurate state and entity counts', () => {
    render(
      <MemoryRouter>
        <RegionExplorer />
      </MemoryRouter>
    );

    REGIONS.forEach((region) => {
      expect(screen.getByRole('tab', { name: new RegExp(`^${region.name}\\b`, 'i') })).toBeInTheDocument();
    });

    // Verify regional state counts
    // North: 9, South: 8, East: 5, West: 6, Northeast: 8
    expect(screen.getByText('9 Entities')).toBeInTheDocument();
    expect(screen.getAllByText('8 Entities')).toHaveLength(2); // South and Northeast
    expect(screen.getByText('5 Entities')).toBeInTheDocument();
    expect(screen.getByText('6 Entities')).toBeInTheDocument();
  });

  it('switches active region and displays accurate states and status badges', () => {
    render(
      <MemoryRouter>
        <RegionExplorer />
      </MemoryRouter>
    );

    // Default or switch to West region (where Gujarat is)
    const westTab = screen.getByRole('tab', { name: /West/i });
    fireEvent.click(westTab);

    expect(screen.getByText('West India')).toBeInTheDocument();
    expect(screen.getByText('Gujarat')).toBeInTheDocument();
    expect(screen.getByText('Rajasthan')).toBeInTheDocument();
    expect(screen.getByText('Maharashtra')).toBeInTheDocument();
    expect(screen.getByText('Madhya Pradesh')).toBeInTheDocument();
    expect(screen.getByText('Goa')).toBeInTheDocument();
    expect(screen.getByText('Dadra and Nagar Haveli and Daman and Diu')).toBeInTheDocument();

    // Gujarat should show "Complete Archive" badge
    expect(screen.getByText('Complete Archive')).toBeInTheDocument();

    // Switch to North region
    const northTab = screen.getByRole('tab', { name: /^North\b/i });
    fireEvent.click(northTab);

    expect(screen.getByText('North India')).toBeInTheDocument();
    expect(screen.getByText('Punjab')).toBeInTheDocument();
    expect(screen.getByText('Haryana')).toBeInTheDocument();
    expect(screen.getByText('Himachal Pradesh')).toBeInTheDocument();
    expect(screen.getByText('Uttarakhand')).toBeInTheDocument();
    expect(screen.getByText('Uttar Pradesh')).toBeInTheDocument();
    expect(screen.getByText('Delhi')).toBeInTheDocument();
    expect(screen.getByText('Chandigarh')).toBeInTheDocument();
    expect(screen.getByText('Jammu and Kashmir')).toBeInTheDocument();
    expect(screen.getByText('Ladakh')).toBeInTheDocument();
  });
});

describe('ExplorePage Component', () => {
  it('renders Section A (Explore by Region) and Section B (Textile Classification)', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    // Header metrics
    expect(screen.getByText("Explore India's Textile Heritage")).toBeInTheDocument();

    // Section A: Explore by Region
    expect(screen.getByRole('heading', { level: 2, name: 'Explore by Region' })).toBeInTheDocument();

    // Section B: Textile Classification (must NOT be "Explore by Category")
    expect(screen.getByRole('heading', { level: 2, name: 'Textile Classification' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 2, name: 'Explore by Category' })).toBeNull();
  });

  it('renders all 15 Textile Classification categories with links and motifs', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    TEXTILE_CATEGORIES.forEach((cat) => {
      expect(screen.getByText(cat.title)).toBeInTheDocument();
      expect(screen.getByTestId(`category-card-${cat.slug}`)).toBeInTheDocument();
    });

    // Category 4: Ikat, Tie-Dye & Block-Printed Textiles features Patan Patola linking to /textiles/patan-patola
    const patolaLinks = screen.getAllByRole('link', { name: /Patan Patola/i });
    expect(patolaLinks.length).toBeGreaterThan(0);
    expect(patolaLinks[0].getAttribute('href')).toBe('/textiles/patan-patola');
  });

  it('navigates to /states/gujarat when clicking Gujarat on the interactive map from ExplorePage', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <Routes>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/states/:stateSlug" element={<StatePage />} />
        </Routes>
      </MemoryRouter>
    );

    const gujaratPath = document.querySelector('path[data-state-slug="gujarat"]');
    expect(gujaratPath).not.toBeNull();
    if (gujaratPath) {
      fireEvent.click(gujaratPath);
    }

    expect(
      screen.getByRole('heading', { level: 1, name: 'Gujarat — A Legacy of Colour, Craft and Weaving' })
    ).toBeInTheDocument();
  });

  it('renders section with id="regions" anchor for seamless deep-linking from Home page', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const regionsSection = document.getElementById('regions');
    expect(regionsSection).not.toBeNull();
  });
});

describe('StatePage Component', () => {
  it('renders complete Gujarat state archive with all 7 textiles for /states/gujarat', () => {
    render(
      <MemoryRouter initialEntries={['/states/gujarat']}>
        <Routes>
          <Route path="/states/:stateSlug" element={<StatePage />} />
        </Routes>
      </MemoryRouter>
    );

    // Hero Heading & Subtitle
    expect(
      screen.getByRole('heading', { level: 1, name: 'Gujarat — A Legacy of Colour, Craft and Weaving' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/From intricate double ikat weaving to resist-dyed fabrics and traditional embroidery/i)
    ).toBeInTheDocument();

    // Badges
    expect(screen.getByText('Complete State Archive')).toBeInTheDocument();
    expect(screen.getByText('7 Documented Traditions')).toBeInTheDocument();

    // Key Craft Centres
    expect(screen.getByText('Key Gujarat Craft Centres')).toBeInTheDocument();
    expect(screen.getAllByText('Patan').length).toBeGreaterThan(0);
    expect(screen.getByText('Jamnagar')).toBeInTheDocument();
    expect(screen.getByText('Surendranagar')).toBeInTheDocument();

    // All 7 Gujarat textiles
    const expectedTextiles = [
      'Patan Patola',
      'Bandhani',
      'Mashru',
      'Tangaliya',
      'Kutch Embroidery',
      'Ajrakh',
      'Gharchola',
    ];

    expectedTextiles.forEach((textileName) => {
      expect(screen.getAllByText(textileName).length).toBeGreaterThan(0);
    });

    // Patan Patola card action links to full archive /textiles/patan-patola
    const patolaDetailLink = screen.getByRole('link', { name: /Explore Full Archive/i });
    expect(patolaDetailLink.getAttribute('href')).toBe('/textiles/patan-patola');
  });

  it('renders honest placeholder view for other states without fake craft claims', () => {
    const placeholderStates = [
      { slug: 'assam', name: 'Assam', region: 'Northeast India' },
      { slug: 'rajasthan', name: 'Rajasthan', region: 'West India' },
      { slug: 'ladakh', name: 'Ladakh', region: 'North India' },
    ];

    placeholderStates.forEach(({ slug, name, region }) => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[`/states/${slug}`]}>
          <Routes>
            <Route path="/states/:stateSlug" element={<StatePage />} />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByRole('heading', { level: 1, name })).toBeInTheDocument();
      expect(screen.getAllByText(region).length).toBeGreaterThan(0);
      expect(screen.getByText('Textile information is being added')).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /Return to Interactive Map/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /Explore Complete Gujarat Archive/i })
      ).toBeInTheDocument();

      unmount();
    });
  });

  it('renders graceful not found state for invalid slug', () => {
    render(
      <MemoryRouter initialEntries={['/states/non-existent-state']}>
        <Routes>
          <Route path="/states/:stateSlug" element={<StatePage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('State or Territory Not Found')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Return to Interactive Map/i })).toBeInTheDocument();
  });
});
