# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Artisans et PME françaises — artisans, commerçants, professions libérales et
indépendants — qui ont besoin d'une présence en ligne crédible mais n'ont ni le
temps, ni le budget, ni les compétences techniques pour passer par une agence ou
assembler eux-mêmes un site. La clientèle est d'abord locale, en Occitanie
(Hérault et alentours) ; des clients hors région sont accompagnés à distance.
Ces visiteurs jugent un prestataire sur la confiance, le contact direct, la
clarté du prix et la garantie que le site leur appartiendra.

## Product Purpose

OcciCode conçoit et développe des sites vitrine sobres, rapides et travaillés
pour le référencement local, destinés aux artisans et PME. Le site existe pour
donner à ces petites structures une présence professionnelle sans les coûts et
la lourdeur d'une agence. La réussite se mesure à une demande entrante qualifiée
— formulaire de devis, appel téléphonique ou email, les trois voies étant mises
sur le même plan — exprimée par un visiteur qui a compris l'offre et fait
confiance à la personne derrière.

## Positioning

Un développeur indépendant unique, Julien Martin, basé à Péret (Hérault), qui
conçoit, développe et livre lui-même le site : un seul interlocuteur du premier
échange à la mise en ligne, des tarifs publics et transparents, et un site qui
reste la propriété du client (code, contenu, nom de domaine), sans abonnement
obligatoire. Une agence voisine ne pourrait pas revendiquer honnêtement ce
"même personne du début à la fin, local, propriété du client" ; un outil de site
en autonomie ne pourrait pas revendiquer le travail de conception et de
développement.

## Operating Context

- Les clients arrivent souvent sans brief précis ni contenus prêts ; le premier
  échange sert à clarifier l'activité et les objectifs.
- Un projet dure en moyenne 2 à 4 semaines, validé par étapes : structure, puis
  textes et visuels, puis mise en ligne.
- Le travail se fait en face à face en Occitanie et à distance (visio,
  téléphone) ailleurs en France.
- La grille publique affiche Site Vitrine à partir de 890 €, Site Pro à partir
  de 1 990 € et Sur Mesure sur devis, avec domaine offert un an, paiement en
  deux fois et maintenance à partir de 9 €/mois. Les montants peuvent évoluer ;
  l'engagement durable est la transparence des prix, pas leur valeur actuelle.
- Le site public est en français (`<html lang="fr">`).

## Capabilities and Constraints

- Site vitrine marketing : accueil, tarifs, réalisations, à propos, contact,
  mentions légales et politique de confidentialité.
- Contact par formulaire (Formspree), téléphone et email — trois chemins de
  conversion équivalents.
- Site statique Astro 7, Tailwind v4 en CSS-first, icônes Iconify/MDI via
  `astro-icon`, SEO via `astro-seo`, sitemap et JSON-LD (LocalBusiness, Service,
  FAQ, breadcrumbs).
- Contenu centralisé dans `src/config/site.ts` : identité, coordonnées, offres,
  FAQ, textes des pages.
- Analytique Google (gtag) chargée en production uniquement.
- Pas de blog, pas d'e-commerce, pas d'espace client dans l'implémentation
  actuelle.
- Une locale anglaise est mentionnée dans les règles projet (`AGENTS.md`) mais
  n'est pas implémentée : décision ouverte, pas une fonctionnalité existante.

## Brand Commitments

- Nom : OcciCode. Identité visuelle existante : logo à croix occitane encadrée
  de deux C, décliné en favicon et images Open Graph.
- Voix : directe, humaine, sans jargon ; vouvoiement du visiteur, première
  personne ("je") pour Julien.
- Promesses tenues par le discours : sobriété, honnêteté, ancrage local, absence
  de vente forcée. Pas de superlatifs ni de promesses de résultats invérifiables.

## Evidence on Hand

- Trois sites de démonstration : Le Mazet (restaurant), Les Jardins du
  Biterrois (paysagiste) et L'Atelier du Bois (menuisier), hébergés sur
  demo1/2/3.occicode.fr. Ce sont explicitement des démos, pas des clients
  réels : ils doivent être présentés comme tels et jamais comme du travail
  client.
- Assets réels : logo et déclinaisons, images Open Graph, photo d'accueil, carte
  de la zone d'intervention, police Nunito.
- Identité légale réelle : Julien Martin, entrepreneur individuel, SIRET et
  hébergeur renseignés dans `src/config/site.ts`.
- Aucun témoignage client, avis, étude de cas, nom de client ou résultat mesuré
  n'existe aujourd'hui. Les productions futures ne doivent en inventer aucun.

## Product Principles

1. **Une seule personne, du début à la fin.** Chaque surface doit rendre évident
   que le visiteur parle à la personne qui construit son site.
2. **L'ancrage local est une preuve, pas une décoration.** L'Occitanie et la
   proximité servent la confiance et le référencement, jamais l'ornement.
3. **Prix et propriété transparents.** Pas de frais cachés, pas d'enfermement :
   le site, le contenu et le domaine restent au client.
4. **Réduire l'incertitude.** Étapes concrètes, français simple, réponses aux
   objections réelles d'un artisan ou d'un gérant de PME.
5. **Ne jamais inventer de preuve.** Montrer uniquement ce qui existe — démos,
   identité réelle, contact réel — tant que des témoignages et études de cas
   authentiques ne sont pas disponibles.

## Accessibility & Inclusion

Le public inclut des dirigeants de petites entreprises peu à l'aise avec le
numérique : le français doit rester simple, les parcours courts et lisibles. La
mise en œuvre actuelle comprend déjà un lien d'évitement, des contrôles
étiquetés et des replis pour `prefers-reduced-motion` ; aucune norme
d'accessibilité formelle n'a été confirmée au-delà de ces pratiques.
