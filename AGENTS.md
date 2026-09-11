# AGENTS.md

Astro 7 showcase site for Occicode (agence web Occitanie, artisans/TPE). Early scaffold: `src/pages/index.astro` + `Welcome` + `Layout`. Production site: https://occicode.fr/

## Rules to respect

Project rules in `.opencode/rules/` apply always — read `instructions.md` (code preferences, Tailwind v4, a11y, no git actions) and `workflow.md` (plan mode, subagents, verification) before non-trivial work. In particular: **never run git commit/push or other git write actions** — the user handles commits.

## Commands

Requires Node `>=22.12.0`, npm (`package-lock.json`), ESM (`"type": "module"`).

- `npm run dev` — dev server at `localhost:4321`. In OpenCode sessions prefer background mode: `astro dev --background` (`astro dev status` / `astro dev logs` / `astro dev stop`).
- `npm run build` / `npm run preview` / `npm run build-preview` — build to `dist/`, preview locally.
- `npm run check` (`astro check`) + `npm run typecheck` (`tsc --noEmit`) — **both run on pre-push** (`.husky/pre-push`); run both before finishing.
- `npm run lint:check` — verify; `npm run lint` (`eslint . --fix`) mutates. `npm run format` (`prettier --write .`) mutates; `npm run fix` = format + lint.
- `npm test` — vitest (watch mode, no config file). Single file, no-watch: `npx vitest run <path>`. Note: **no tests exist yet** — don't claim coverage.

## Architecture / conventions

- Astro config (`astro.config.mjs`): `site: https://occicode.fr/`, integrations `sitemap()` + `icon()` (`astro-icon`), i18n `fr` default + `en` with `prefixDefaultLocale: false`, `prefetchAll: viewport`, `inlineStylesheets: "always"`, `compressHTML: true`.
- Styling is Tailwind v4 CSS-first: `@tailwindcss/vite` plugin + `@import "tailwindcss"` in `src/styles/global.css`. No `tailwind.config`. Prefer Tailwind utilities over custom CSS. Important modifier is **suffix**: `m-0!`, not `!m-0`.
- Path alias: `@/*` → `src/*` (`tsconfig.json`, extends `astro/tsconfigs/strict`). Layout: `src/pages/`, `src/layouts/`, `src/components/`, `src/assets/`, `src/styles/`, `src/icons/` (empty, reserved for local icons), `public/` (favicons only).
- Icons via `astro-icon` + `@iconify-json/mdi`: `<Icon name="mdi:account" />` (`import { Icon } from "astro-icon/components"`).
- Lint-staged (pre-commit): `*.{js,jsx,ts,tsx,astro}` → `eslint --fix` + `prettier --write`; `*.{json,md,mdx,css}` → `prettier --write`. Prettier needs `prettier-plugin-astro` for `.astro` (see `.prettierrc`).
- Design: simple, sober, light theme; no flashy icons/badges. Always include error handling and a11y attributes (`title`/`type`/`role` on buttons, `aria-label` + HTML attributes where relevant).

Full Astro docs: https://docs.astro.build
