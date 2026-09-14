# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run deploy`          | Build then push `dist/` to the server via rsync  |

## 🚀 Déploiement

`npm run deploy` build le site puis envoie le contenu de `dist/` sur le
serveur via `rsync` + SSH (`scripts/deploy.sh`).

1. Copier `.env.example` en `.env` (déjà ignoré par git) et renseigner :
   - `SERVER` (ex: `username@monserveur.hostinger.com`)
   - `TARGET_PATH` (ex: `/home/username/domains/occicode.fr/public_html`)
   - `PORT` si différent de `22` (Hostinger fournit souvent un port dédié)
   - `SSH_KEY_PATH` (optionnel : sinon la clé/agent SSH par défaut est utilisé)
2. Lancer `npm run deploy`.

Options utiles (dans `.env`) :

- `DEPLOY_DRY_RUN=true` : simule le déploiement sans rien transférer.
- `DEPLOY_DELETE=true` : supprime côté serveur les fichiers absents de
  `dist/` (désactivé par défaut par prudence).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
