# Factory Task Board (`docs/BOARD.md`)

LEAD: `Orchestrator` (`#a49`, Model: **Gemini 4 Argon**)
Reviewer: `Reviewer` (`#a54`, Model: **Gemini 4 Neon**)

| Task ID | Title | Owner | Facade ID | Dependencies | Branch | Packet Path | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`T00`** | Project Harness, Frontend Scaffold, Archival Data Layer & Persistent Shell | `Worker_1` | `#a50` | None | `task/T00` | `F:\tanisha2\docs\exec-plans\active\T00.md` | **MERGED (`main`)** |
| **`T01`** | Home Page & Search Page Experience | `Worker_1` | `#a50` | `T00` | `task/T01` | `F:\tanisha2\docs\exec-plans\active\T01.md` | **MERGED (`main`)** |
| **`T02`** | Interactive Map of India (28 States + 8 UTs), Explore Page & State Pages (Complete Gujarat Page) | `Worker_2` | `#a51` | `T00` | `task/T02` | `F:\tanisha2\docs\exec-plans\active\T02.md` | **MERGED (`main`)** |
| **`T03`** | Patan Patola Complete Detail Page (Sections A–J), Textile Classification Detail & About Page | `Worker_3` | `#a52` | `T00` | `task/T03` | `F:\tanisha2\docs\exec-plans\active\T03.md` | **MERGED (`main`)** |
| **`T04`** | End-to-End 5 User Journeys Verification Suite & Browser QA | `Worker_1` | `#a50` | `T01`, `T02`, `T03` | `task/T04` | `F:\tanisha2\docs\exec-plans\active\T04.md` | **IN_PROGRESS** |

---

## Execution Waves & File Isolation Guarantee

1. **Wave 1 (Foundation — Sequential):**
   - `T00` (`Worker_1` `#a50`) builds the harness (`AGENTS.md`, `docs/ARCHITECTURE.md`, `scripts/verify.sh`), Vite + React + TS + Tailwind + Vitest scaffold, shared data layer (`src/types/archive.ts`, `src/data/*`), persistent layout shell (`Navbar`, `Footer`, `Breadcrumbs`), router (`src/App.tsx`), and page stubs.
2. **Wave 2 (Feature Verticals — 3 Workers in Parallel, Zero Shared Files):**
   - `T01` (`Worker_1` `#a50`): `src/pages/HomePage.tsx`, `src/pages/SearchPage.tsx`, `src/components/search/*`, `src/__tests__/home-search.test.tsx`
   - `T02` (`Worker_2` `#a51`): `src/pages/ExplorePage.tsx`, `src/pages/StatePage.tsx`, `src/components/map/*`, `src/__tests__/explore-map-state.test.tsx`
   - `T03` (`Worker_3` `#a52`): `src/pages/TextileDetailPage.tsx`, `src/pages/ClassificationPage.tsx`, `src/pages/AboutPage.tsx`, `src/components/textile/*`, `src/__tests__/textile-classification-about.test.tsx`
3. **Wave 3 (Integration Verification — Sequential):**
   - `T04` (`Worker_1` `#a50`): `src/__tests__/journeys.test.tsx` verifying all 5 end-to-end user journeys + browser QA.
