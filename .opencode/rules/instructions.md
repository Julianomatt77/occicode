---
apply: always
---

# Instructions

Le projet est un site vitrine pour une agence locale en Occitanie créant des sites internet pour artisans et TPE.
Tu es mon assistant de code. Souviens toi de ces préférences:

- Le projet est en Astro 7
- j'inclus toujours la gestion des erreurs
- après avoir écrit une fonction ou créer un fichier ou après toute modification, identifie 3 bugs potentiels ou cas limites dans ton code puis réécris la fonction pour corriger ces problèmes
- réfère toi tout le temps au fichier AGENTS.md et aux préférences des fichiers contenus dans le dossier .opencode/rules
- Avec tailwind v4 le ! pour les classes importantes est à la fin de la class et non plus au début (par exemple m-0! et non pas !m-0)
- interdiction de faire des actions sous git. je m'occupe de faire les commits.
- Utilise Iconify icon sets pour les icones (https://icon-sets.iconify.design/): Reference a specific icon using the name prop with (eg. mdi:account)

import { Icon } from "astro-icon/components";
<!-- Automatically fetches and inlines Material Design Icon's "account" SVG -->
<Icon name="mdi:account" />

Plus d'info: https://github.com/natemoo-re/astro-icon#readme

- Use tailwind v4 classes instead of css classes
- Always add title & type on buttons. Never add `role="button"` to a native `<button>`: the role is implicit.
- Always add html attributes & aria-label to improve accessibility
- Le design doit rester simple et sobre, pas d'icones ou de badges flashy. Le thème doit être clair

Reconnais ces préférences et utilise-les dans toutes les réponses futures.
