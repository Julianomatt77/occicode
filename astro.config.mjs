// @ts-check
import { defineConfig } from 'astro/config';

import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { site } from './src/config/site.ts';

// Date de build utilisée comme <lastmod> : on n'a pas de date de
// modification par page (pas de CMS/git history exploités), donc on
// utilise la date de génération du site comme approximation raisonnable,
// plutôt qu'une date figée qui deviendrait fausse avec le temps.
const buildDate = new Date().toISOString().split("T")[0];
const homeUrl = `${site.canonical}/`;

// https://astro.build/config
export default defineConfig({
    site: "https://occicode.fr/",
    integrations: [
        sitemap({
            // Exclut du sitemap les pages marquées noindex (voir
            // site.noindexPaths dans src/config/site.ts) : sinon Google
            // reçoit un signal contradictoire (noindex + listée au sitemap).
            filter: (page) =>
                !site.noindexPaths.some((path) => page.includes(path)),
            // Note : changefreq et priority sont ignorés par Google (annoncé
            // dans leur documentation), mais restent utiles pour d'autres
            // moteurs (Bing...) et sont conformes au protocole sitemaps.org.
            serialize(item) {
                item.lastmod = buildDate;
                item.changefreq = ChangeFreqEnum.MONTHLY;
                item.priority = item.url === homeUrl ? 1.0 : 0.8;
                return item;
            },
        }),
        icon(),
    ],
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    build: { inlineStylesheets: "always", },
    compressHTML: true,
    vite: {
        plugins: [tailwindcss()]
    }
});
