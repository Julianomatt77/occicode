# OcciCode

Handcrafted authenticity, transparent pricing and a polished frosted-glass finish for artisans and SMEs in Occitanie.

## Overview

OcciCode is a design system for artisan web services where clarity and trust matter more than polish. The layout gives makers room to present their work through clear imagery and concise descriptions. A warm bordeaux, gold and cream palette evokes natural materials and transparent business practices. On the home page, a full-screen hero and light frosted-glass surfaces (liquid glass) give a first impression that shows what a carefully made site looks like, while the tone of the copy stays direct and human.

The project is owned and operated by a single developer (Julien Martin) based in Occitanie, France. Every site is owned by the client: code, content, and domain name remain the client's property after delivery.

## Colors

- **Primary** (#840120, bordeaux): Primary CTAs, navigation active state, focus ring, key accents
- **Accent** (#b8800d, or): Decorative highlights, large icons, rules and glass edge glints. Never for small text (3.15:1 on the background); text placed on gold uses Accent-foreground
- **Accent-foreground** (#0a0a0a): Text on gold surfaces (5.78:1)
- **Background** (#f8f5ee, crème): Global page background, card backgrounds
- **Foreground** (#0a0a0a): Default text colour
- **Border** (#e6dfd0): Dividers, input borders, card borders (warm neutral)
- **Muted** (#efe9dc): Disabled states, section backgrounds (warm neutral)
- **Muted-foreground** (#52525b): Secondary body text, hints
- **Success** (#22C55E): Confirmation, valid states
- **Warning** (#F59E0B): Attention states
- **Error** (#DC2626): Error states, destructive actions. Close in hue to the primary: always pair with an icon and a message, never colour alone

> **Note**: The palette is limited to 2 core colours (bordeaux, crème) + 1 accent (or) (R-29). Neutral colours (white, black, grey) do not count as part of the core palette (R-30).

## Typography

- **Display Font**: Nunito sans-serif (Google Font)
- **Body Font**: System stack (system-ui, Segoe UI, Roboto, Helvetica, Arial)

- **Headline**: `text-2xl font-bold` — Section titles, service names
- **Body**: `text-base` — Default body text
- **Caption**: `text-sm` — Secondary text, hints, muted text
- **Overline**: Uppercase tracking for category tags and badges

> **R-06 — Typography**: Typeface chosen based on brand character, not AI default. Nunito chosen for its friendly, humanist qualities that complement the artisanal brand without the sterile feel of monospace or the overused Inter default.

## Spacing

- **Base unit:** 8px
- **Scale:** 4, 8, 12, 16, 24, 32, 48, 64
- **Component padding:** 4px (tight), 8px (small), 16px (medium), 24px (large)
- **Section spacing:** 48px (mobile), 64px (tablet), 80px (desktop)
- **Page container max-width**: `max-w-7xl` (1280px) with `mx-auto`

> **R-05 — Layout**: Section composition varies by breakpoints — uniform rhythm on mobile, asymmetric on desktop. Composition variety comes from deliberate choices, not a template.

## Border Radius

- **None**: 0px — Full-bleed sections, dividers
- **Small**: 4px — Badges, inline tags, small chips
- **Medium**: 8px — Cards, feature sections, modals
- **Large**: 12px — Promotional callouts, hero overlays
- **Full**: 9999px — Avatars, profile pictures

> **R-11 — Border Radius**: Radius variation is a visual hierarchy tool; used deliberately, not universally. Not every element is pill-shaped.

## Elevation

OcciCode builds depth with frosted glass on the home page: translucent white surfaces, background blur, a light edge and a soft bordeaux-tinted shadow. Elsewhere, depth comes from colour layering and borders.

- **Glass**: `glass` utility — decorative surfaces (45 % white, blur, light edge)
- **Glass strong**: `glass-strong` utility — any block of body text (75 % white minimum for contrast); falls back to 90 % white without `backdrop-filter`
- **Subtle**: `border: 1px var(--border)` — Default card and input border
- **Medium**: `border: 1.5px var(--border)` with background layering
- **Large**: `border: 2px var(--border)` for elevated importance
- **Focus Ring**: 3px ring `var(--primary)` at 20% — Bordeaux-tinted focus indicator for keyboard navigation

> **R-32 — Keyboard Accessibility**: Every focused element has a clearly visible focus indicator. `outline: none` is forbidden without replacing with a custom focus indicator.

## Do's and Don'ts

### Do

- Feature the maker's story alongside their product; include a clear author bio on service pages
- Use warm, natural photography with soft lighting; avoid stark white studio backgrounds
- Highlight materials and process with the primary accent colour
- Keep glass for the home page and always put body text on `glass-strong`, never on decorative `glass`
- Place glass over a rich background (image, soft gradient, halo); on a plain colour it shows nothing
- Show transparent pricing with no hidden fees
- Reserve the primary colour (`#840120`) for interactive, actionable elements only
- Keep colour palette limited to 2 core colours + 1 accent (R-29, R-30)
- Make all interactive elements keyboard-operable (R-32)
- Respect `prefers-reduced-motion: reduce` (R-39)

### Don't

- Use aggressive urgency tactics (countdown timers, "limited spots available"); clients value transparency over pressure
- Stack glass inside glass, or show more than about six glass surfaces at once (readability and GPU cost)
- Use the primary colour at full strength for decorative borders or non-interactive elements — reserve it for actions; diluted tints (10–25 %) are fine for backgrounds and halos (R-09)
- Crop images to forced squares if the content is tall or wide — use natural aspect ratios
- Hide the developer's location or contact information — transparency about provenance is core to the trust model
- Exceed 3 colours on any one page without a clear design system (R-29)
- Design without purpose — every visual decision must articulate what it serves (R-31, Craftsmanship C-1)

## Design Direction

Reading this as: B2B service landing for artisans and SMEs, in a warm, crafted visual language with a glass hero, dial ENERGY 3 / RHYTHM 3 / MOTION 2.

- **ENERGY 3**: Expressive hero and frosted glass, text always readable
- **RHYTHM 3**: Full-screen hero, then sections that alternate gradients and glass cards
- **MOTION 2**: Hover lift on cards, optional ambient hero video; everything stops with `prefers-reduced-motion`

This dial configuration reflects the brand's identity: a single-interlocuteur, locally-anchoted artisanal service that values trust, and shows by example how good a client's site can look.
