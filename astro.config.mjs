// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: "https://occicode.fr/",
    integrations: [sitemap(), icon()],
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