# AGENTS.md

Site vitrine OcciCode — agence web en Occitanie (artisans/TPE). Astro 7, Tailwind v4, i18n `fr` (défaut) + `en`. Prod : https://occicode.fr/

## Règles projet (`.opencode/rules/` — à lire avant toute tâche non triviale)

`instructions.md` — préférences code :

- Toujours inclure la gestion des erreurs.
- Après chaque fonction / fichier / modification : identifier 3 bugs potentiels ou cas limites, puis corriger le code.
- Tailwind v4 uniquement (pas de CSS custom) ; le modificateur important est en **suffixe** : `m-0!`, jamais `!m-0`.
- Icônes : sets Iconify via `astro-icon` (`import { Icon } from "astro-icon/components"` puis `<Icon name="mdi:account" />`).
- Boutons : toujours `title` + `type` + `role`. Accessibilité : attributs HTML + `aria-label`.
- Design simple, sobre, thème clair ; pas d'icônes ni badges flashy.
- **Interdiction de toute action git** (commit, push, etc.) — l'utilisateur s'en charge.

`workflow.md` — méthode :

- Plan mode par défaut dès 3+ étapes ou décision d'architecture ; si ça déraille, STOP et re-planifier.
- Vérification obligatoire avant de terminer : `npm run check` + `npm run typecheck`, tests, logs.
- Simplicité d'abord, impact minimal, pas de fix temporaire ; remettre en question ses propres choix sur les changements non triviaux.

## Commandes

Node `>=22.12.0`, npm (`package-lock.json`), ESM (`"type": "module"`).

- `npm run dev` — dev sur `localhost:4321`. En session OpenCode : mode background `astro dev --background` (`astro dev status` / `astro dev logs` / `astro dev stop`).
- `npm run build` / `npm run preview` / `npm run build-preview` — build vers `dist/`, prévisualisation locale.
- `npm run check` (`astro check`) + `npm run typecheck` (`tsc --noEmit`) — **les deux tournent au pre-push** (`.husky/pre-push`) ; les lancer avant de finir.
- `npm run lint:check` — vérifie ; `npm run lint` (`eslint . --fix`) modifie. `npm run format` (`prettier --write .`) modifie ; `npm run fix` = format + lint.
- `npm test` — vitest (watch, sans config). Un seul fichier sans watch : `npx vitest run <chemin>`. **Aucun test n'existe encore** — ne pas prétendre le contraire.

## Architecture / conventions

- Config Astro (`astro.config.mjs`) : `site: https://occicode.fr/`, intégrations `sitemap()` + `icon()` (`astro-icon`), `prefetchAll: viewport`, `inlineStylesheets: "always"`, `compressHTML: true`.
- Tailwind v4 CSS-first : plugin `@tailwindcss/vite` + `@import "tailwindcss"` dans `src/styles/global.css` (importé par `Layout.astro`). Pas de `tailwind.config`.
- Alias `@/*` → `src/*` (`tsconfig.json`, étend `astro/tsconfigs/strict`). Dossiers : `src/pages/`, `src/layouts/`, `src/components/`, `src/assets/`, `src/styles/`, `src/config/` (constantes site/SEO), `src/icons/` (vide, réservé aux icônes locales), `public/` (favicons uniquement).
- SEO centralisé : constantes dans `src/config/site.ts`, composant `<SEO>` de `astro-seo` dans `src/layouts/Layout.astro` (title, description, canonical, OG, Twitter). Les pages surchargent via props `title` / `description` / `canonical` / `noindex` / `nofollow`. Viewport, favicons, JSON-LD et gtag sont hors `astro-seo`, gérés à la main dans le même `Layout`.
- `<html lang="fr">` (site en français). Canonical par défaut : `https://occicode.fr` (jamais `Astro.url` brut, qui donnerait `localhost` en dev).
- Scripts inline Astro : toujours `is:inline` (contenu dynamique construit dans le frontmatter et injecté via `set:html`), sinon Astro les bundle/transforme et `astro check` remonte des hints.
- Lint-staged (pre-commit) : `*.{js,jsx,ts,tsx,astro}` → `eslint --fix` + `prettier --write` ; `*.{json,md,mdx,css}` → `prettier --write`. Prettier exige `prettier-plugin-astro` pour `.astro` (voir `.prettierrc`).

Docs Astro : https://docs.astro.build — `astro-seo` : voir `node_modules/astro-seo/README.md` (props supportées).

<!-- antislop:start -->

## antislop

For UI, copy, people, mobile layout, or code comments work, read these installed skill files directly (use these paths even if a same-named global skill exists):

- Core filter, always on: `antislop`: `.opencode/skills/antislop/SKILL.md`
- UI / visual: `antislop-ui`: `.opencode/skills/antislop-ui/SKILL.md`
- Copy & text: `antislop-copywriting`: `.opencode/skills/antislop-copywriting/SKILL.md`
- People: `antislop-human`: `.opencode/skills/antislop-human/SKILL.md`
- Mobile / responsive: `antislop-layoutmobile`: `.opencode/skills/antislop-layoutmobile/SKILL.md`
- Code comments: `antislop-code`: `.opencode/skills/antislop-code/SKILL.md`
  Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
  Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
  If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
  To update antislop later: `npx antislop-ai --update`, or run `npx antislop-ai` and pick Overwrite them.

<!-- antislop:end -->
