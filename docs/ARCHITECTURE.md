# Architecture Documentation — INDIAN TEXTILES: Threads of Heritage

## 1. System Overview
**INDIAN TEXTILES — Threads of Heritage** is an academic editorial Information Architecture and UX prototype built to catalogue and celebrate India's handloom and textile heritage across 5 regions, 36 states and union territories, 15 textile classification categories, materials, techniques, and cultural traditions.

## 2. Route Hierarchy & Contracts
All routes are client-side managed via `react-router-dom`:

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `HomePage` | Editorial hero, museum introduction, significance pillars, Gujarat featured carousel, and 4-way Find Your Textile search |
| `/search` | `SearchPage` | Live interactive search & filters across Textile, State, Technique, Material with URL query param sync (`?q=&textile=&state=&technique=&material=`) |
| `/explore` | `ExplorePage` | Dual entry points: Regional explorer with interactive 36-entity India map, and Textile Classification showcase |
| `/classification/:categorySlug` | `ClassificationPage` | Detailed category view across all 15 classifications, featuring linked textile cards |
| `/states/:stateSlug` | `StatePage` | Fully developed Gujarat showcase with 7 textiles, and honest archival placeholder views for 35 other states/UTs |
| `/textiles/:textileSlug` | `TextileDetailPage` | Complete Sections A–J archival showcase for Patan Patola, plus verified preview views for other textiles |
| `/about` | `AboutPage` | Museum mission, 5-member team editable placeholder profiles, careers in handloom, resources, and contact prototype |

## 3. Data Architecture (`src/types/archive.ts` & `src/data/*`)
The data layer is fully typed and normalized:
- **`src/types/archive.ts`**: Core contracts (`RegionInfo`, `StateEntity`, `TextileCategory`, `TextileRecord`, `ProcessStep`, `TextileMotif`, `TextileSource`).
- **`src/data/regionsAndStates.ts`**:
  - 5 Geographic regions: `North` (9 entities), `South` (8 entities), `East` (5 entities), `West` (6 entities), `Northeast` (8 entities).
  - 36 Total entities: 28 States + 8 Union Territories.
  - `gujarat` has `isFullyDeveloped: true`; all other 35 have `isFullyDeveloped: false` with `"Textile information is being added"`.
- **`src/data/categories.ts`**:
  - All 15 official Textile Classification categories (1. Silk & Silk-Based Textiles through 15. Mizo Puans & Regional Handloom Clusters).
  - Category 4 (*Ikat, Tie-Dye & Block-Printed Textiles*), Category 1, and Category 8 link to `patan-patola`.
- **`src/data/textiles.ts`**:
  - Full Sections A–J dataset for `patan-patola` (Patola/Patolu note, 5 tags, 6 Double Ikat steps, 6 motifs, Patan centre, cultural significance, 4 related textiles, 4 official sources).
  - Verified preview records for Gujarat textiles (*Bandhani, Mashru, Tangaliya, Kutch Embroidery, Ajrakh, Gharchola*) and related textiles (*Pochampally Ikat, Odisha Ikat*).
- **`src/data/index.ts`**:
  - Re-exports datasets and helper lookup functions: `getStateBySlug`, `getStatesByRegion`, `getTextileBySlug`, `getCategoryBySlug`, `searchTextiles`.

## 4. Component Architecture
- **Shell & Navigation (`src/components/layout/`):**
  - `Navbar`: Editorial header with logo `"INDIAN TEXTILES"`, tagline `"Threads of Heritage"`, responsive drawer, active route indicators, and search shortcut.
  - `Footer`: Museum provenance, links, and textile pattern motif footer bar.
  - `Breadcrumbs`: Dynamic navigational breadcrumb trail for subpages.
  - `AppShell`: Persistent layout wrapper rendering navbar, main outlet, breadcrumbs, and footer.
- **Motifs & Illustrations (`src/components/motifs/`):**
  - `TextileMotifs`: Clean SVG geometric patterns (Patola diamond lattice, Ikat blurred-edge chevron, Bandhani dots, block-print floral, woven borders).
- **Shared Components (`src/components/shared/`):**
  - `TextileImage`: High-quality imagery with deterministic SVG weave fallback pattern.
  - `TextileCard`: Canonical card linking to `/textiles/:slug`, with status badges (`"Complete Archive"` vs. `"Preview · Detailed info coming soon"`).

## 5. Verification Pipeline (`scripts/verify.sh`)
Verification enforces zero regression across 4 automated gates:
1. `npm run typecheck` (TypeScript strict mode compilation)
2. `npm run lint` (ESLint 9 code standards)
3. `npm run test -- --run` (Vitest test suite)
4. `npm run build` (Vite production bundle build)
