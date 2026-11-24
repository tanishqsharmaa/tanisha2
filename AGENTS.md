# AGENTS.md — INDIAN TEXTILES: Threads of Heritage

This repository contains the interactive academic Information Architecture and UX prototype for **INDIAN TEXTILES — Threads of Heritage**.

## Tech Stack & Tooling
- **Framework:** Vite + React 18 + TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Custom museum editorial colour tokens)
- **Routing:** React Router DOM v6
- **Icons:** `lucide-react`
- **Testing:** Vitest + React Testing Library + `@testing-library/jest-dom` + `jsdom`
- **Linter:** ESLint v9 (flat config with `typescript-eslint`)

## Design Tokens & Typography
- **60% Dominant Base:**
  - `ivory`: `#F7F1E7` (warm ivory paper/museum background)
  - `beige`: `#E9DCC8` (natural undyed linen/parchment surface)
- **25% Structural Tone:**
  - `indigo`: `#263B59` (deep indigo dye, header/primary text tone)
  - `charcoal`: `#352D28` (charcoal brown editorial body text)
- **15% Intentional Accents:**
  - `madder`: `#A63D35` (madder root crimson, badges & active states)
  - `turmeric`: `#D6A642` (warm turmeric yellow, motifs & highlights)
  - `forest`: `#526B50` (natural vegetal green, ecological/botanical tags)
  - `terracotta`: `#B86B4B` (earthen clay accent)
- **Typography:**
  - Headings / Editorial titles: **Playfair Display** (`font-serif`)
  - Body / UI / Navigation / Meta: **DM Sans** (`font-sans`)

## Worktree & Git Workflow Rules
1. Every worker operates inside their dedicated worktree (e.g. `F:\tanisha2\.worktrees\Worker_X`) on branch `task/Txx`.
2. Never commit unallowed files or dirty the root working copy.
3. Keep git worktrees ignored via `.worktrees/` in `.gitignore`.
4. Always verify that `bash scripts/verify.sh` exits `0` before marking any task done.

## Archival Integrity & Canonical Guidelines
1. **Historical & Cultural Honesty:**
   - Only **Patan Patola** (`/textiles/patan-patola`) and **Gujarat** (`/states/gujarat`) are marked `isFullyDeveloped: true`.
   - All other 35 states and UTs must present accurate geographic facts and an honest placeholder: `"Textile information is being added"`.
   - Non-Patan-Patola textiles must display `"Detailed information coming soon"`.
   - Zero invented history, fake traditions, or simulated team member biographies.
2. **Canonical URL Routing:**
   - Every textile card for Patan Patola across Home, Explore, Map, Categories, and Search must link to `/textiles/patan-patola`.
3. **Verification Command:**
   - `scripts/verify.sh` executes: `npm run typecheck && npm run lint && npm run test -- --run && npm run build`.
