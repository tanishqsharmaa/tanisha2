# Project Skills Manifest (`docs/SKILLS.md`)

This document records all skills audited, approved by the user, and available to the LEAD, WORKER, and REVIEWER instances for **INDIAN TEXTILES — Threads of Heritage**.

---

## 1. Remote Skills Installed into Workspace (`.agents/skills/`)

Installed with user approval using:
```powershell
npx skills add anthropics/skills@frontend-design -y
npx skills add vercel-labs/agent-skills@web-design-guidelines -y
npx skills add vercel-labs/agent-skills@vercel-composition-patterns -y
```

| Skill Name | Source Package | Installed Path | Purpose in Project | Security Audit Result |
| :--- | :--- | :--- | :--- | :--- |
| **`find-skills`** | `vercel-labs/skills@find-skills` | `.agents/skills/find-skills/SKILL.md` | Skill discovery via `npx skills find`. | **Safe (Low Risk)** — Pre-installed, audited `SKILL.md`. |
| **`frontend-design`** | `anthropics/skills@frontend-design` | `.agents/skills/frontend-design/SKILL.md` | Editorial design direction, Playfair Display + DM Sans typography hierarchy, layout restraint, and avoiding templated AI aesthetics. | **Safe (Low Risk)** — Audited full `SKILL.md`; pure design & UX writing guidance. |
| **`web-design-guidelines`** | `vercel-labs/agent-skills@web-design-guidelines` | `.agents/skills/web-design-guidelines/SKILL.md` | UI/UX and accessibility compliance audit against pinned Web Interface Guidelines (`references/command.md`). | **Safe (Low Risk)** — Audited full `SKILL.md`; explicitly forbids network fetches during review. |
| **`vercel-composition-patterns`** | `vercel-labs/agent-skills@vercel-composition-patterns` | `.agents/skills/vercel-composition-patterns/SKILL.md` | Scalable React 19 component composition, compound components, and clean context/state boundaries. | **Safe (Low Risk)** — Audited full `SKILL.md`; pure React architecture patterns. |

---

## 2. Built-in / Local Environment Skills

These skills are pre-installed in the local agent configuration and audited for safe usage across instances:

| Skill Name | Source / Location | Assigned Roles | Purpose in Project | Security Audit Result |
| :--- | :--- | :--- | :--- | :--- |
| **`facade`** | `.agents/plugins/facade/skills/facade/SKILL.md` | LEAD, WORKER, REVIEWER | Inter-instance messaging (`send_message`, `read_messages`, `list_agents`) between LEAD, Workers, and Reviewer. | **Safe (Low Risk)** — Workspace plugin skill. |
| **`frontend-ui-engineering`** | `agent-skills` plugin | WORKER | WCAG 2.1 AA accessibility, keyboard navigation, responsive layout (320px–1440px), and semantic color token usage. | **Safe (Low Risk)** — Audited full `SKILL.md`. |
| **`test-driven-development`** | `agent-skills` plugin | WORKER, REVIEWER | Red-Green-Refactor cycle and state-based Vitest + React Testing Library journey verification. | **Safe (Low Risk)** — Audited full `SKILL.md`. |
| **`browser-testing-with-devtools`** | `agent-skills` plugin | WORKER, REVIEWER | Live DOM, console-cleanliness, and screenshot verification of pages and the Interactive India Map. | **Safe (Low Risk)** — Audited full `SKILL.md`; enforces isolated profile & untrusted DOM rules. |
| **`incremental-implementation`** | `agent-skills` plugin | WORKER | Vertical slice implementation, scope discipline (editing only allowed files), and per-slice verification. | **Safe (Low Risk)** — Audited full `SKILL.md`. |
| **`code-review-and-quality`** | `agent-skills` plugin | LEAD, REVIEWER | Five-axis review (correctness, readability, architecture, security, performance) for `task/Txx` branches. | **Safe (Low Risk)** — Audited full `SKILL.md`. |
