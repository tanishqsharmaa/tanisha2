# Project Assessment: INDIAN TEXTILES — Threads of Heritage

## 1. Goal and Scope

### Goal
Design and build **INDIAN TEXTILES — Threads of Heritage**, an interactive, responsive, editorial-style academic Information Architecture and UX prototype archiving India's textile heritage across regions, states, union territories, categories, materials, techniques, motifs, and cultural significance.

### In-Scope Deliverables
1. **Stack & Foundation (Planned as Task `T00`):**
   - Initialize Git repository (`main` branch) for worktree-based multi-agent execution.
   - Vite + React + TypeScript + Tailwind CSS + React Router + Vitest setup using `npm`.
   - Project-specific harness files: updated `AGENTS.md` (moving legacy system prompt dump to reference or replacing with project conventions), `docs/ARCHITECTURE.md`, and `scripts/verify.sh` running type-check, lint, unit/journey tests, and production build.
2. **Design System & Persistent Shell:**
   - Warm editorial museum aesthetic (`#F7F1E7` Warm Ivory, `#E9DCC8` Natural Beige, `#263B59` Deep Indigo, `#A63D35` Madder Red, `#D6A642` Turmeric Yellow, `#526B50` Forest Green, `#B86B4B` Terracotta, `#352D28` Charcoal Brown; ~60/25/15 balance).
   - Typography: **Playfair Display** (headings/editorial titles) and **DM Sans** (body, UI, navigation, controls).
   - Subtle SVG textile-inspired motifs (Patola geometric diamonds, Ikat blurred-edge patterns, Bandhani dots, block-print floral motifs, woven borders/dividers).
   - Persistent top navbar (`Home`, `Search`, `Explore`, `About`, logo `"INDIAN TEXTILES"`, tagline `"Threads of Heritage"`, search shortcut, active states, mobile hamburger drawer), breadcrumbs, back navigation, and patterned footer.
3. **Structured Archival Data Layer:**
   - Normalized TypeScript data model covering all **5 Regions**, **28 States + 8 Union Territories (36 entities)**, **15 Textile Classification categories**, Gujarat's **7 featured textiles** (*Patan Patola, Bandhani, Mashru, Tangaliya, Kutch Embroidery, Ajrakh, Gharchola*), related textiles (*Pochampally Ikat, Odisha Ikat*), and verified sources.
4. **Home Page (`/`):**
   - Hero section (*"The Art of Indian Textiles"*, CTAs *"Explore Textiles"* and *"Discover by Region"*).
   - Two-column editorial introduction (*"A Heritage Woven Through Generations"*).
   - Four significance cards (*Cultural Identity, Traditional Craftsmanship, Regional Diversity, Living Heritage*).
   - Horizontally scrollable *Featured Textiles* carousel (all 7 Gujarat textiles; *Patan Patola* leads to full detail page; others lead to canonical preview pages marked *"Detailed information coming soon"*).
   - *"Find Your Textile"* 4-way search block (by Textile, State, Technique, Material) linking into the Search experience.
5. **Search Page (`/search`):**
   - Heading *"Search the Textile Archive"*, case-insensitive live search input, search suggestions, and 4 filter dimensions (Textile, State, Technique, Material).
   - Helpful empty state with reset action; clicking results navigates to canonical `/textiles/:slug` route.
6. **Explore Page (`/explore`):**
   - Two primary editorial entry points: **Explore by Region** and **Textile Classification**.
   - **Explore by Region:** Interactive sections for *North (9), South (8), East (5), West (6), Northeast (8)* matching the exact 36 state/UT assignments.
   - **Interactive Map of India:** Accurate geographical SVG map of all 28 states and 8 union territories with distinct hover states, tooltips, active highlight, clickable callout markers/badges for small Union Territories, legend (*"Select a state to explore its textile heritage."*), reset control, keyboard accessibility, and mobile/accessible state list alternative.
   - **Textile Classification (`/explore/classification` or section view + `/classification/:categorySlug`):** All 15 required categories with representative textile patterns/imagery, descriptions, and textile cards (*Ikat, Tie-Dye & Block-Printed Textiles* features *Patan Patola* routing to the shared detail page).
7. **State Pages (`/states/:stateSlug`):**
   - **Gujarat (`/states/gujarat`) — Complete State Page:** Hero (*"Gujarat — A Legacy of Colour, Craft and Weaving"*), state heritage introduction, and 7-card Gujarat textile collection (*Patan Patola* opens full page; others open canonical preview route with verified summary + *"Detailed information coming soon"*).
   - **All Other 35 States & UTs (`/states/:stateSlug`):** Functional routes showing the accurate state/UT name, assigned region, editorial archival framing, and an honest *"Textile information is being added"* notice (zero fabricated craft/historical claims).
8. **Textile Detail Pages (`/textiles/:textileSlug`):**
   - **Patan Patola (`/textiles/patan-patola`) — Complete Textile Detail Page:**
     - Reachable via one canonical URL from Home, Explore Region -> West -> Gujarat, Interactive Map -> Gujarat, Textile Classification -> Ikat/Tie-Dye/Block-Printed, and Search.
     - Sections A–J: Hero with tags (*Gujarat, Patan, Silk, Double Ikat, Handwoven*), Overview (including *Patola* plural vs. *Patolu* singular), Type, Material, 6-step Visual Technique diagram (*"The Art of Double Ikat"*: Design Planning, Thread Preparation, Tying, Dyeing, Setting the Loom, Weaving), Motifs gallery (*Nari Kunjar, Ratan Chowk, Chhabdi, Paan, Phul, Geometric diamonds*), Centre (*Patan, Gujarat*), Cultural Significance (ceremonies, artisan families, handloom heritage, Southeast Asian trade connections), Related Textiles (*Bandhani, Mashru, Pochampally Ikat, Odisha Ikat*), and verified Sources & Further Reading (Incredible India, Patan District NIC, Gujarat Tourism, IP India GI Application #232).
   - **Preview Textile Pages (`/textiles/:textileSlug` for non-Patan-Patola textiles):**
     - Canonical route with breadcrumbs, verified tags/overview where available, custom SVG motif placeholder or verified image, and clear *"Detailed information coming soon"* archival banner.
9. **About Page (`/about`):**
   - *About the Project* (*"Preserving Stories Woven in Fabric"*).
   - *About Us — Our Team of 5* (5 editable profile cards with placeholder fields for Name, Role, Short Introduction, Avatar/Photo — no invented names).
   - *Careers in Indian Textiles* (informational cards on Textile Design, Handloom & Craft Research, Fashion & Surface Design, Craft Documentation, Textile Conservation).
   - *Resources* (structured government portals, GI registry, museum/archival references).
   - *Contact* (Name, Email, Message form with client-side validation and explicit prototype submission notice).

---

## 2. Out of Scope

- E-commerce features (shopping cart, pricing, checkout, inventory, billing).
- User authentication, user accounts, or backend database persistence.
- Fabricated or unverified historical/craft detail pages for states other than Gujarat or full detail pages for textiles other than Patan Patola (all other states and textiles must explicitly use honest archival placeholder notices).
- Live email delivery on the Contact form (explicitly operates as a validated frontend prototype).

---

## 3. Constraints

1. **Historical & Cultural Accuracy:** Never generate fake textile traditions, unverified historical claims, or invented team member names. Use cautious wording where sources differ and cite the 4 official sources on the Patan Patola page.
2. **Geographic Map Integrity:** The India map must be a real, accurate interactive SVG covering all 28 states and 8 union territories (36 clickable targets) with accurate boundaries, plus clickable callout pins for small UTs and a keyboard/mobile accessible state list.
3. **Canonical Routing:** Every entry path (Home, Search, Map, Region, Textile Classification) must resolve to the single shared `/textiles/patan-patola` route without duplicate pages.
4. **Visual Balance & Typography:** Strictly follow the 60% Warm Ivory/Beige, 25% Deep Indigo/Charcoal Brown, 15% Accent palette and Playfair Display + DM Sans typography.
5. **Factory & Worktree Isolation Rules:**
   - Workers operate in isolated git worktrees on `task/Txx` branches.
   - No two parallel tasks may share allowed files.
   - Every task must pass `scripts/verify.sh` before completion and review.

---

## 4. Risks & Mitigations

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| **Greenfield repository without `.git` or scaffold** | Workers cannot create git worktrees or run `scripts/verify.sh` until a baseline commit exists. | Execute Task `T00` first to initialize git (`main`), scaffold Vite + React + TS + Tailwind + Vitest, and commit `AGENTS.md`, `docs/ARCHITECTURE.md`, and `scripts/verify.sh` before spawning parallel feature worktrees. |
| **Small Union Territories hard to click on SVG map** | Users or automated journey tests fail to click Chandigarh, Puducherry, Lakshadweep, DNH & DD, or Delhi. | Combine accurate geographic SVG `<path>` elements with labeled interactive callout badges/pins for small UTs and a synchronized region/state directory. |
| **External image availability / broken Wikimedia URLs** | Missing or slow images degrade the editorial museum aesthetic. | Pair curated Wikimedia Commons / public-domain textile URLs with deterministic `<TextileImage>` fallback rendering custom SVG traditional weave motifs (Patola double-ikat grid, Bandhani dots, Ajrakh blocks) clearly labeled as archival illustrations. |
| **Parallel file collisions across workers** | Merge conflicts when integrating worker branches. | Partition tasks strictly by file ownership (Data/Map vs. Pages vs. Detail/Classification vs. Tests) after `T00` lays down shared route contracts and types. |
| **Windows bash / path quirks in `scripts/verify.sh`** | `verify.sh` fails across Git Bash / PowerShell environments. | Write `scripts/verify.sh` using portable POSIX `sh`/`bash` syntax compatible with Git for Windows bash (`npm run typecheck && npm run lint && npm run test -- --run && npm run build`). |

---

## 5. Testable Success Criteria

All criteria below must be automatically verifiable via `scripts/verify.sh` (TypeScript compiler, ESLint, Vitest + React Testing Library journey tests, and Vite production build):

1. **Build & Static Analysis (`SC-01`):** `npm run typecheck`, `npm run lint`, and `npm run build` succeed with zero errors.
2. **Navigation & Shell (`SC-02`):** Persistent navbar renders logo `"INDIAN TEXTILES"`, tagline `"Threads of Heritage"`, working links for `Home`, `Search`, `Explore`, `About`, active route styling, mobile hamburger toggle, and breadcrumbs on inner pages.
3. **Journey 1 — Region-Based Exploration (`SC-03`):** Navigating `Home → Explore → West → Gujarat → Patan Patola` renders the Gujarat state page with all 7 Gujarat textiles and opens the complete Patan Patola detail page (`/textiles/patan-patola`).
4. **Journey 2 — Map-Based Exploration (`SC-04`):** The Interactive India Map renders all **28 states and 8 union territories (36 clickable targets)** with hover tooltips, keyboard accessibility, and mobile list view; clicking `Gujarat` opens `/states/gujarat` and leads to `/textiles/patan-patola`.
5. **Journey 3 — Category-Based Exploration (`SC-05`):** Navigating `Explore → Textile Classification` renders all **15 required categories**; selecting `Ikat, Tie-Dye & Block-Printed Textiles → Patan Patola` navigates to the exact same canonical `/textiles/patan-patola` route.
6. **Journey 4 — Search-Based Exploration (`SC-06`):** Both the Homepage *"Find Your Textile"* section and `/search` support case-insensitive search and filtering across **Textile, State, Technique, and Material**, display a helpful empty state on non-matching queries, and open `/textiles/patan-patola` when selecting Patan Patola.
7. **Journey 5 — Other State & Preview Textile Exploration (`SC-07`):** Clicking any of the other 35 states/UTs on the map or region list opens `/states/:stateSlug` with the accurate state name, assigned region, and `"Textile information is being added"` message; clicking non-Patan-Patola textiles opens `/textiles/:textileSlug` with `"Detailed information coming soon"`.
8. **Patan Patola Content Completeness (`SC-08`):** `/textiles/patan-patola` renders all 10 required sections (A. Hero & 5 tags, B. Overview with *Patola/Patolu*, C. Type, D. Material, E. 6-step *The Art of Double Ikat* process, F. 6 Motifs gallery, G. Centre *Patan, Gujarat*, H. Cultural Significance, I. 4 Related Textiles, J. 4 official Sources).
9. **About Page Completeness (`SC-09`):** `/about` renders *Preserving Stories Woven in Fabric*, *Our Team of 5* editable placeholder cards (without invented names), *Careers in Indian Textiles*, *Resources*, and a validated prototype *Contact* form with clear prototype submission feedback.

---

## 6. Human Review Requirements

Per factory rules, the following areas must be explicitly checked for human review:
- **Authentication (`auth`):** Not applicable (no authentication or user login in scope).
- **Billing (`billing`):** Not applicable (no e-commerce, payment, or billing in scope).
- **Public API / External Links & Contracts (`public API`):**
  - URL route contract (`/`, `/search`, `/explore`, `/states/:stateSlug`, `/textiles/:textileSlug`, `/classification/:categorySlug`, `/about`).
  - External citation links on the Patan Patola page (Incredible India, Patan District NIC, Gujarat Tourism, IP India GI Registry) and external image attribution/fallbacks.
  - Contact form prototype notice (confirming no external backend endpoint is called).
- **Cultural & Visual Review:** Human review of the interactive India map state boundaries, colour palette balance, and Patan Patola archival copy before final merge.

---

## 7. Harness Check & Task `T00` Plan Note

| Harness File | Current Status | Action Planned in `T00` |
| :--- | :--- | :--- |
| `AGENTS.md` | **Present** (currently holds generic system prompt dump) | Update with project-specific architecture, commands, design tokens, and file-ownership rules for INDIAN TEXTILES. |
| `docs/ARCHITECTURE.md` | **Missing** | Create in Task `T00` documenting route tree, component hierarchy, data schema, and map architecture. |
| `scripts/verify.sh` | **Missing** | Create in Task `T00` to run `npm run typecheck`, `npm run lint`, `npm run test -- --run`, and `npm run build`. |
| `.git` & Frontend Scaffold | **Missing** | Initialize git (`main`) and scaffold Vite + React + TypeScript + Tailwind CSS + React Router + Vitest in Task `T00`. |
