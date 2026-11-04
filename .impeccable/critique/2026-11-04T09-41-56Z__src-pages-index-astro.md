---
target: accueil (src/pages/index.astro)
total_score: 25
max_score: 40
na_heuristics:
p0_count: 1
p1_count: 3
target_identity: "file:/home/julien/www/occicode/src/pages/index.astro"
target_fingerprint: "sha256:3c2a453a03b03849312d1af72600d619ecb64cb8fb5be45213e5105e764929c9"
target_path: /home/julien/www/occicode/src/pages/index.astro
timestamp: 2026-11-04T09-41-56Z
slug: src-pages-index-astro
---

# Critique, accueil OcciCode

Method: dual-agent (A: design review, B: detector + browser evidence)

## Design Health Score

| #         | Heuristique                                       | Score     | Problème principal                                                                                                                             |
| --------- | ------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | Visibilité de l'état système                      | 3         | Aucun indicateur de page active ; le menu mobile garde le libellé "Ouvrir le menu" une fois ouvert                                             |
| 2         | Correspondance système / monde réel               | 3         | "SEO", "TPE", "catalogue et blog" non expliqués ; pied de page "optimisés SEO à prix abordable"                                                |
| 3         | Contrôle et liberté de l'utilisateur              | 2         | Menu mobile : ni Échap ni clic extérieur ne le ferment ; aucun retour en haut sur 9 000 px                                                     |
| 4         | Cohérence et standards                            | 2         | "Devis gratuit" vs "Demander un devis gratuit" ; chevrons de FAQ qui suggèrent un accordéon inactif ; trois "Voir le détail" vers la même page |
| 5         | Prévention des erreurs                            | 3         | L'aria-label du CTA hero annonce "par email" mais mène à un formulaire ; aucune info de disponibilité                                          |
| 6         | Reconnaissance plutôt que rappel                  | 2         | Le contenu des formules n'existe que sur /tarifs ; le téléphone doit être mémorisé                                                             |
| 7         | Flexibilité et efficacité                         | 2         | Formulaire partout, téléphone une seule fois en bas, email seulement en pied de page                                                           |
| 8         | Esthétique et minimalisme                         | 2         | Photo de MacBook stock, maquettes grises type skeleton, six en-têtes identiques                                                                |
| 9         | Aide à la reconnaissance et récupération d'erreur | 3         | Rien de destructif, mais aucun repli si tel: ou mailto: échoue                                                                                 |
| 10        | Aide et documentation                             | 3         | FAQ pertinente, mais huit réponses ouvertes et aucun lien vers tarifs ou contact                                                               |
| **Total** |                                                   | **25/40** | **Acceptable**                                                                                                                                 |

## Verdict de spécificité

**Évaluation LLM.** La page est un template Tailwind soigné pour développeur freelance français, pas une page composée pour OcciCode. La structure est la pile par défaut : hero avec photo stock et deux CTA, processus en trois étapes, section de mockups, trois cartes tarifaires avec badge central, quatre cartes d'arguments, pastilles de villes, mur de FAQ, panneau CTA sombre. Les seuls éléments propres à l'entreprise sont la croix occitane, les noms de villes et la FAQ à la première personne. Remplacez "OcciCode" par n'importe quel freelance et rien ne casse. La spécificité vit dans le texte, pas dans le design.

**Scan déterministe.** Le scan CLI sur les fichiers `.astro` renvoie 0 finding avec un avertissement explicite : seuls 7 fichiers ont été lus en regex, les règles d'élément (contraste, taille de texte) n'ont pas tourné. Le scan de la page rendue est donc la source fiable : 5 findings à 1280 px et 8 à 390 px. Quatre `icon-tile-stack` (tuile de 40x40 au-dessus des h3 "Basé en Occitanie", "Un seul interlocuteur", "Référencement local", "Le site vous appartient"), un `low-contrast` à 1,5:1 sur le chiffre décoratif "01", et trois avis typographiques (`straggler`, `unbalanced-heading`) à 390 px.

Le détecteur et la revue design se rejoignent sur un point que la revue seule aurait pu manquer par indulgence : la grille de quatre cartes à icônes est le motif le plus reconnaissable de la production IA. Le `low-contrast` sur "01" est un faux positif (élément `aria-hidden`, donc hors WCAG). Les `icon-tile-stack` ne sont pas des fautes d'accessibilité, ce sont des signaux de template.

**Overlays.** L'injection a réussi dans le Chrome headless utilisé pour l'audit : 5 overlays `impeccable` visibles, captures dans `/tmp/opencode/shots/`. Le navigateur intégré de la session était déconnecté, donc aucune surcouche n'est disponible dans votre panneau : les captures headless font foi.

## Impression générale

La page inspire le calme et la propreté, mais pas la reconnaissance. Un artisan de Béziers n'y voit ni son métier, ni sa ville, ni une personne : il voit un vendeur de tech. Le prix transparent est le seul vrai moment de soulagement, et il arrive 2,3 écrans trop bas. La plus grande opportunité est déjà dans le dépôt : les trois démos existent et sont honnêtement étiquetées sur /realisations, mais l'accueil montre trois rectangles gris à leur place.

## Ce qui fonctionne

1. **La transparence tarifaire est réelle et bien écrite.** "À partir de 890 €", "1 990 €", "Sur devis", "sans mauvaise surprise", "Aucun abonnement obligatoire : le code, le contenu et le nom de domaine restent les vôtres". Cela répond au fear principal de la cible mieux que la plupart des sites d'agence.
2. **Le texte français est concret et guidé par les objections.** Les étapes et la FAQ utilisent la première personne et des questions réelles : "Je n'ai pas encore une idée précise de ce que je veux, est-ce un problème ?", "Dois-je fournir les textes et les photos ?". C'est le matériau le plus authored de la page.
3. **Le pli mobile fonctionne mécaniquement.** CTA principal à 480 px dans une fenêtre de 844 px, zone du pouce, 287x60 px. Aucun débordement horizontal à 360, 390, 768, 1024, 1440 ni 1920. Le lien d'évitement apparaît au premier Tab, les liens de nav ont un outline bleu visible, Nunito se charge, la palette est cohérente.

## Problèmes prioritaires

### [P0] Preuve sociale inventée et statistique non sourcée

**Quoi.** La carte Site Pro porte un badge "Le plus choisi". Il n'y a aucun client. La section multi-écrans affirme "Près de 60 % du trafic web se fait depuis un mobile", sans source ni date.

**Pourquoi c'est grave.** `PRODUCT.md` est explicite : aucun témoignage, avis ou étude de cas ne doit être inventé. Un prospect qui demande "combien de clients avez-vous ?" et s'entend répondre "aucun pour l'instant" se souviendra du badge. La page de confiance devient un passif, et c'est la première chose qu'un sceptique teste. Cela viole aussi R-17 et R-36 d'antislop.

**Correction.** Supprimer le badge, ou le remplacer par un différenciateur factuel ("Le plus complet") seulement si la liste de contenu le justifie. Couper la ligne des 60 %, ou citer la source et l'année en ligne. L'emplacement vide n'est pas une perte : l'honnêteté est le différenciateur.

### [P1] Les seules preuves réelles sont absentes de l'accueil

**Quoi.** L'accueil ne montre aucune des trois démos. `ScreensShowcase` affiche des rectangles gris. Le seul chemin vers les démos est l'entrée "Réalisations" du menu, et /realisations les étiquette correctement "Voir la démo" et "exemples de sites vitrines".

**Pourquoi c'est grave.** C'est une surface Persuade pour des artisans qui ne savent pas évaluer du code ou du SEO. Une démo étiquetée (restaurant, paysagiste, menuisier) est une preuve bien plus forte que quatre cartes d'arguments, et elle existe déjà. Montrer des boîtes grises là où le travail devrait être est pire que ne rien montrer : cela lit comme un template inachevé, et le détecteur classe d'ailleurs ce motif dans les anti-patterns ("skeleton preview as product shot").

**Correction.** Remplacer `ScreensShowcase` par une bande de trois cartes "Réalisations (démos)" avec `demo1/2/3.webp`, chaque carte étiquetée "Démo" et indiquant ce qu'elle montre. Placer la bande juste après le hero, avant le processus. Garder le label "Démo" visible sur la carte, pas seulement sur la page de destination.

### [P1] Les trois voies de contact ne sont pas à égalité, et l'humain est absent

**Quoi.** Header, hero et CTA final mènent tous au formulaire. Le téléphone apparaît une fois, à 5 287 px sur desktop et 7 770 px sur mobile. L'email apparaît seulement dans le pied de page. Le nom "Julien Martin" n'apparaît nulle part dans le texte visible de l'accueil ; "Un seul interlocuteur" est une carte abstraite à environ 3 000 px.

**Pourquoi c'est grave.** `PRODUCT.md` exige que les trois voies soient "mises sur le même plan". Une partie de la cible préfère appeler. Le positionnement unique (une personne nommée, du premier échange à la mise en ligne) est la raison de choisir OcciCode plutôt qu'une agence, et l'accueil le cache.

**Correction.** Ajouter dans le hero une rangée de contact à trois chemins de poids visuel égal : "Demander un devis", "07 81 37 33 41", "contact@occicode.fr", chacun à 44 px de haut minimum. Ajouter sous le H1 une ligne du type "Julien Martin, développeur à Péret, conçoit et livre votre site lui-même." Répéter le téléphone dans l'en-tête mobile ou dans une barre collante, pas seulement en bas.

### [P1] Accessibilité : focus invisible sur les CTA et contraste du hero qui s'effondre sur mobile

**Quoi.** Les styles calculés du CTA principal donnent `outline: none` et un anneau blanc (`rgb(255,255,255)`) sur un fond `#F7F7F5`, soit 1,07:1. Le même anneau touche le CTA du header, celui du menu mobile et le CTA de la formule mise en avant. Cause : `src/components/ui/Button.astro:25` utilise `focus:outline-none focus:ring-2 focus:ring-offset-2` sans couleur d'anneau, qui retombe sur `currentColor`. Par ailleurs, le texte du hero passe sur la photo : au viewport 390 px, le paragraphe 18 px `#52525b` descend à 1,67:1 (moyenne 5,48) et l'eyebrow `#0254d8` à 3,19:1 (moyenne 4,60). Sur desktop, la marge n'est que de 0,15 (4,65:1).

**Pourquoi c'est grave.** Un utilisateur clavier perd sa position sur le contrôle exact que la page existe pour promouvoir. C'est un échec WCAG 2.4.11 et 1.4.3, et cela contredit l'intention d'accessibilité déclarée dans `PRODUCT.md`.

**Correction.** Remplacer l'anneau blanc par `outline: 2px solid var(--primary); outline-offset: 2px` sur `:focus-visible` pour tous les éléments interactifs, avec une variante claire sur le panneau sombre. Vérifier au Tab le CTA hero, le CTA header, les boutons de formule, le lien téléphone et le résumé du menu. Densifier l'overlay du hero (opacité ou dégradé plus couvrant) et re-mesurer le pire pixel aux deux largeurs.

### [P2] Composition générique, longueur et mur de FAQ

**Quoi.** La page répète six fois le même motif eyebrow/H2/sous-titre, alterne blanc et gris clair, et utilise des images stock (mains sur un MacBook, main épinglant une carte papier). Sur mobile : 8 664 px à 390 px, 9 020 px à 360 px, dont 1 900 px de FAQ avec huit réponses ouvertes. Le panneau de contact est à 8,8 écrans. Le H1 est "OcciCode" et le titre porteur est un H2.

**Pourquoi c'est grave.** La longueur sans variation lit comme du remplissage, pas comme de la rigueur. Le mur de FAQ arrive juste avant la décision et demande de lire huit paragraphes au moment d'agir.

**Correction.** Réduire à environ cinq sections : hero avec les trois voies de contact, démos, formules avec le contenu inclus, quatre objections, contact final avec le nom et la photo de Julien. Passer la FAQ à quatre ou cinq `<details>` repliés, ou la déplacer vers /tarifs et /contact. Remplacer les photos stock par de vraies photos ou par une capture de démo.

## Signaux par persona

**Jordan, artisan non technique qui découvre le site**

- Les 240 premiers pixels du hero mobile sont de la marque : logo du header, puis logo 80 px et H1 "OcciCode", puis l'eyebrow "Sites internet pour artisans & TPE". Il doit lire au-delà d'un nom répété pour apprendre ce qui est vendu.
- La proposition principale est un H2, "Un site professionnel, pensé pour votre activité", alors que le H1 est juste "OcciCode".
- "Voir les tarifs" est un bouton de 177x62 px à côté du CTA principal, presque au même poids : la page lui demande de choisir entre deux actions avant d'avoir compris l'offre.
- Les cartes affichent "890 €", "1 990 €", "Sur devis" puis seulement "Voir le détail". Aucune liste de ce qui est inclus : il ne sait pas si l'hébergement, les textes ou le domaine sont compris.
- Le nom Julien Martin n'apparaît jamais. "Un seul interlocuteur" est une affirmation, pas une personne, et elle est sous les tarifs.
- S'il préfère appeler, le numéro est à 7 770 px sur mobile.

**Casey, visiteuse mobile distraite**

- Le hero fait 702 px dans une fenêtre de 844 px : le premier écran est presque entièrement marque, titre et deux boutons. Pas de prix, pas de démo, pas de visage.
- Le résumé du menu fait 40x40 px, ouvre un panneau de 224 px, et ses cinq liens ne font que 20 px de haut. L'icône reste un hamburger quand il est ouvert, et le libellé reste "Ouvrir le menu". Échap et le clic extérieur ne ferment pas.
- Le lien téléphone fait 113x24 px, les liens du pied de page 19 px de haut, les icônes sociales 36x36 px : tous sous la cible de 44 px revendiquée par le projet.
- Le CTA principal est dans la zone du pouce à 480 px, ce qui est bien, mais il n'y a aucun bouton d'appel ou de devis collant une fois passé.
- La FAQ est un bloc de 1 900 px de huit réponses ouvertes en 15 px, juste avant le panneau de contact à 7 432 px.

**Riley, sceptique qui teste les promesses**

- "Le plus choisi" est le premier signal rouge. Aucun client, aucune note, aucun compteur, aucune vérification possible.
- "Près de 60 % du trafic web se fait depuis un mobile" n'a ni source ni date. C'est plausible, mais ici cela lit comme une autorité empruntée.
- Le "portfolio" est trois rectangles gris vides, alors que le menu promet "Réalisations". Un sceptique en conclura que les démos sont tout le travail, ou pire, que les boîtes grises sont le travail.
- La carte Site Pro promet "un site complet avec catalogue et blog" ; rien ne le documente sur l'accueil, et `PRODUCT.md` indique qu'aucun blog n'existe dans l'implémentation actuelle.
- L'alt de la carte dit "Carte des zones d'intervention d'OcciCode en Occitanie", mais l'image visible est une main qui épingle une carte papier générique, sans géographie occitane. Petite fuite de crédibilité, mais concrète.

## Observations mineures

- Le titre final se casse en "Prêt à donner une vraie présence à votre activité" avec un "?" orphelin sur sa propre ligne à 1440 px.
- "partout en France.." contient un double point dans la FAQ.
- La voix oscille entre "je" ("je me déplace") et "nous" ("nous travaillons", "Parlons de votre projet").
- La description du pied de page, "Sites professionnels, adaptés pour ordinateurs, tablettes et mobiles, optimisés SEO à prix abordable", est du keyword soup et du jargon que la marque dit éviter.
- Les numéros décoratifs 01, 02, 03 sont en `text-primary/25`, environ 1,5:1. Ils sont `aria-hidden`, donc pas un échec de contraste, mais ils paraissent délavés et n'apportent aucune information.
- Les trois boutons "Voir le détail" font 36 à 38 px de haut et mènent tous à /tarifs sans ancre ni présélection. La config contient déjà un `buttonText` plus fort ("Choisir cette formule", "Demander un devis") que l'accueil ignore.
- Le bouton principal est presque noir, alors que le bleu de marque ne sert qu'aux eyebrows et aux icônes : la couleur d'action et la couleur d'identité sont déconnectées.
- Le bouton principal utilise `hover:scale-105`, mouvement un peu gadget pour une marque sobre, et non conditionné par `prefers-reduced-motion`.
- L'image du hero est un `background-image` CSS, pas un `<img>` : pas de `fetchpriority`, découverte tardive. C'est aussi l'élément LCP mesuré.
- Pas d'`aria-current` ni d'état actif dans la navigation ; le CTA du header ne fait que 36 px de haut sur desktop.
- Le menu mobile laisse défiler la page derrière lui (scrollY de 0 à 700 px) et ne piège pas le focus.

## Questions à considérer

1. Si la seule preuve honnête dont vous disposez est trois démos étiquetées, pourquoi l'accueil montre-t-il trois rectangles gris à l'endroit exact où un prospect décide si vous savez construire un site ?
2. Julien mettrait-il "Le plus choisi" sur un devis imprimé devant un prospect de Péret qui demande combien de clients il a ? Si non, pourquoi est-ce sur la page ?
3. Où, sur cette page, un plombier de 55 ans de Béziers rencontre-t-il un être humain plutôt qu'un vendeur ? Si la réponse est "la page À propos", pourquoi l'accueil lui demande-t-il d'abord de faire confiance à un inconnu ?
4. Si la seule métrique était les appels et les demandes de devis, quelles trois sections supprimeriez-vous d'une page mobile de 9 020 px ?
