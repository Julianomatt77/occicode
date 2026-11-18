# Refonte de l'accueil OcciCode : liquid glass

Date : 2026-11-17. Périmètre : page `/` uniquement. Stack : Astro 7, Tailwind v4 (existant, inchangé).

## Intention

Quand un artisan arrive sur occicode.fr, il doit se dire « c'est beau, je veux un site comme ça », puis demander un devis. Le site sert de vitrine du savoir-faire de Julien : s'il est soigné, l'offre est crédible.

Julien a décidé : effet liquid glass, hero plein écran (image ou vidéo légère) avec le texte devant, verre limité à l'accueil, suppression de toute référence à un site « sobre ».

## Objectifs

- Un hero plein écran qui fait « wahou » sans retarder le chargement.
- Du verre givré clair sur : en-tête (accueil), panneau du hero, cartes de démos, cartes de formules, bloc de contact final.
- Les trois voies de contact (devis, téléphone, email) restent au même niveau dans le hero.
- Le titre `h1` et les textes utiles au référencement restent inchangés.

## Non-objectifs

- Autres pages (tarifs, contact, à propos, réalisations, mentions) : inchangées.
- Pas de filtre de réfraction SVG, pas de canvas ni de shader (choix de Julien : verre en Tailwind seul).
- Pas de thème sombre. Pas de nouveau contenu, témoignage ou client inventé : les trois sites restent présentés comme des démos.
- Pas de traduction anglaise.

## Anti-objectifs (échec même si « ça marche »)

- Texte difficile à lire sur le verre (contraste sous 4,5:1).
- Régression du LCP ou du CLS sur mobile : le site doit encore monter sur Google.
- Vidéo qui se lance malgré `prefers-reduced-motion`.
- Démos présentées comme des réalisations clients.

## Contraintes

- Règles du dépôt : Tailwind v4 (modificateur `!` en suffixe), icônes `astro-icon`, boutons avec `title` + `type` + `role`, `aria-label`, gestion des erreurs, thème clair, aucune action git (Julien commite).
- Vérification avant de finir : `npm run check`, `npm run typecheck`, build. Aucun test n'existe : ne pas prétendre le contraire.
- L'image actuelle du hero (`unsplash1.webp`, 1920×1280) est très claire (plan de travail blanc). Du texte blanc dessus serait illisible : le texte reste foncé, posé sur un panneau de verre.

## Palette de marque (décidée par Julien)

Bordeaux `#840120` (primaire : boutons, lien actif, focus), or `#b8800d` (accent décoratif : reflets, filets, grandes icônes, jamais en petit texte, 3,15:1 sur la crème), crème `#f8f5ee` (fond). Texte sur or : `#0a0a0a` (5,78:1). Bordeaux sur crème : 9,6:1 ; blanc sur bordeaux : 10,5:1. Mes choix : bordures et fonds atténués réchauffés (`#e6dfd0`, `#efe9dc`) pour ne pas jurer avec la crème ; icônes de la page tarifs (vert, bleu, violet, orange) ramenées au bordeaux pour respecter « 2 couleurs + 1 accent ». Le rouge d'erreur `#DC2626` est proche du bordeaux : toujours accompagné d'une icône et d'un message. Le logo contient déjà ce rouge et cet or ; l'image Open Graph garde un fond gris froid (à refaire, hors périmètre).

## Approches étudiées

1. **Verre en Tailwind seul** : `backdrop-blur`, `backdrop-saturate`, fond blanc translucide, bord clair, reflet interne. Partout, sans JS, léger. **Retenue par Julien.**
2. Verre plus filtre de réfraction SVG (Chromium, grand écran) : effet « liquide » réel, mais plus de code et de GPU. Écartée.
3. Fond animé canvas/shader : spectaculaire mais lourd pour le LCP. Écartée.

## Conception

**Verre.** Deux utilitaires Tailwind (`@utility glass`, `@utility glass-strong`) dans `global.css` : `glass` pour les surfaces décoratives, `glass-strong` (fond plus opaque, au moins 70 %) pour tout bloc de texte courant. Repli `@supports not (backdrop-filter)` : fond blanc à 90 %. Flou de 24 px maximum, réduit sur mobile ; pas de verre imbriqué dans du verre ; environ six surfaces de verre visibles à la fois au maximum.

**Hero.** Plein écran (`min-h-svh`), passe sous l'en-tête fixe. Image `unsplash1.webp` en fond, chargée en priorité (`fetchpriority="high"`), c'est elle le LCP. Un panneau `glass-strong` porte le `h1`, le sous-titre, les trois voies de contact (devis, téléphone, email) et les trois puces de confiance actuelles. Emplacement vidéo prévu : si `site.heroVideo` est défini dans `site.ts` (fichiers `.webm` et `.mp4`, moins de 1 Mo), une balise `<video>` muette en boucle se superpose à l'image, avec l'image comme `poster`. Elle est masquée avec `prefers-reduced-motion` et ne se charge pas en mode économie de données.

**En-tête.** Variante verre uniquement sur l'accueil (prop passée par `Layout` à `Header`), barre flottante avec marge, mêmes liens et mêmes boutons. Les autres pages gardent l'en-tête actuel.

**Sections sous le hero.** Fonds en dégradés doux (bordeaux `#840120` et or `#b8800d` très dilués, sur crème) pour que le verre ait quelque chose à flouter. Cartes de démos et de formules en `glass-strong`, pastille « Demo » conservée (c'est une mention d'honnêteté). Bloc de contact final en verre sur dégradé. FAQ : lisibilité d'abord, fond plus opaque.

**Composants.** Ajouter une variante `glass` à `Button.astro`. Mouvement : survols uniquement plus les révélations au scroll existantes ; aucun nouveau mouvement de page.

**Docs et textes (suppression de la sobriété).** `AGENTS.md`, `CLAUDE.md`, `.opencode/rules/instructions.md` (ligne « simple, sobre, pas de badges flashy »), `DESIGN.md` (vision, Elevation « flat sans ombres », Do/Don't liés), `PRODUCT.md` (« sites sobres », « sobriété »). Textes publics : `src/config/site.ts` ligne 126 et `src/pages/a-propos.astro` ligne 11 (« sites sobres » devient une formulation sans « sobre », par exemple « sites rapides et bien référencés »). Les règles d'accessibilité restent.

## Vérification

`npm run check`, `npm run typecheck`, `npm run build`. Lighthouse mobile avant et après (LCP, CLS) ; contraste du texte sur verre mesuré dans le pire cas de fond ; navigation clavier ; `prefers-reduced-motion` ; rendu sans `backdrop-filter`.

## Laissé au constructeur

Valeurs exactes de flou, d'opacité et de dégradés ; recadrage de l'image sur mobile ; réglages du `poster`.

## Mes choix à relire

- Verre uniquement sur l'accueil, y compris l'en-tête (variante par prop).
- Thème clair conservé ; `@utility` Tailwind dans `global.css` malgré la règle « pas de CSS custom » (c'est un mécanisme Tailwind).
- Image d'abord, vidéo en option activable plus tard (aucun fichier vidéo n'existe).
- Titre `h1` inchangé pour le référencement.
- Reformulation de « sobres » dans les deux textes publics.
