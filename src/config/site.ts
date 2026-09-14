export const site = {
  name: "OcciCode",
  title: "OcciCode - Création de site internet en Occitanie",
  description:
    "Création de sites vitrine pour artisans et PME dans l'Hérault et toute l'Occitanie. Sites professionnels, adaptés pour ordinateurs, tablettes et mobiles, optimisés SEO à prix abordable.",
  ogDescription:
    "Création de sites vitrine pour artisans et PME dans l'Hérault et toute l'Occitanie. Sites professionnels, adaptés pour ordinateurs, tablettes et mobiles, optimisés SEO à prix abordable.",
  twitterDescription:
    "Création de sites vitrine pour artisans et PME dans l'Hérault et toute l'Occitanie. Sites professionnels, adaptés pour ordinateurs, tablettes et mobiles, optimisés SEO à prix abordable.",
  author: "Julien MARTIN",
  canonical: "https://www.occicode.fr",
  locale: "fr_FR",
  ogImage: "https://occicode.fr/assets/images/logo_avec_fond_1200x630.png",
  ogImageAlt: "Logo OcciCode — création de sites internet en Occitanie",
  telephone: "+33617182360",
  city: "Péret",
  postalCode: "34800",
  region: "Occitanie",
  country: "FR",
  // Coordonnées GPS de Péret (34800), Hérault — source Insee/Wikipédia
  // (43° 34′ 34″ N, 3° 23′ 53″ E converti en degrés décimaux).43.57566981168466, 3.3967169566957436
  coordinates: {
    lat: 43.57566981168466,
    lon: 3.3967169566957436,
  },
  email: "contact@occicode.fr",
  gtagId: "G-DJ9P3L1MN8",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61594555850385",
    instagram: "https://www.instagram.com/occicode",
  },
  navLinks: [
    { text: "Tarifs", href: "/tarifs" },
    { text: "À propos", href: "/a-propos" },
    { text: "FAQ", href: "/#section-faq" },
  ],
  // 4 couleurs principales du thème clair, reprises de src/styles/global.css (:root).
  // Sert de source unique pour tout ce qui ne peut pas lire les variables CSS
  // (ex. meta "theme-color", JSON-LD, génération d'images).
  siteColors: {
    background: "#ffffff",
    foreground: "#0a0a0a",
    primary: "#0254d8",
    muted: "#f4f4f5",
  },
  footerLinks: [
    { text: "Mentions légales", href: "/mentions-legales" },
    { text: "Politique de confidentialité", href: "/confidentialite" },
  ],
  tarifs: {
    tagline: "Tarifs",
    title: "Des prix adaptés aux petites entreprises",
    subtitle: "Le site est entièrement à vous.",
  },
  aPropos: {
    tagline: "À propos",
    title: "Un interlocuteur unique, une approche directe",
    subtitle:
      "OcciCode, c'est Julien Martin : un développeur basé en Occitanie qui conçoit des sites simples et durables pour les artisans et indépendants de la région.",
  },
  // Informations légales. Les champs marqués "[À compléter]" doivent être
  // renseignés avec les données réelles de l'entreprise avant mise en ligne
  // (aucune donnée légale n'est inventée).
  legal: {
    ownerName: "Julien Martin",
    legalForm: "Auto entrepreneur",
    siret: "[À compléter : numéro SIRET]",
    rcs: "[À compléter : ville d'immatriculation RCS/RM, le cas échéant]",
    vatNumber:
      "[À compléter : numéro de TVA intracommunautaire, le cas échéant]",
    hosting: {
      name: "Hostinger",
      company: "Hostinger International Ltd.",
      website: "https://www.hostinger.fr",
    },
  },
  home: {
    hero: {
      tagline: "Sites internet pour artisans & TPE",
      title: "Un site professionnel, pensé pour votre activité",
      subtitle:
        "OcciCode conçoit des sites vitrine sobres et efficaces pour les artisans, commerçants et TPE de l'Hérault et de toute l'Occitanie.",
      trust: [
        "Basé à Péret (34)",
        "Interventions dans toute l'Occitanie",
        "Réponse sous 48h",
      ],
    },
    services: {
      tagline: "Nos formules",
      title: "Trois formules simples, sans mauvaise surprise",
      subtitle:
        "Du site vitrine à la solution sur mesure, un accompagnement adapté à votre budget.",
    },
    process: {
      tagline: "Comment ça se passe",
      title: "Un projet simple, en trois étapes",
      subtitle:
        "De l'échange initial à la mise en ligne, vous savez toujours où vous en êtes.",
      steps: [
        {
          title: "Échange & devis",
          description:
            "On discute de votre activité et de vos besoins. Vous recevez un devis clair, sans jargon technique.",
        },
        {
          title: "Conception du site",
          description:
            "Je vous propose une maquette, puis on ajuste ensemble les textes et les visuels jusqu'à ce que le site vous ressemble.",
        },
        {
          title: "Mise en ligne",
          description:
            "Le site est testé, optimisé pour le référencement local, puis mis en ligne sous votre propre nom de domaine.",
        },
      ],
    },
    whyUs: {
      tagline: "Pourquoi OcciCode",
      title: "Un interlocuteur unique, basé en Occitanie",
      subtitle: "Un accompagnement direct, sans intermédiaire.",
      items: [
        {
          title: "Basé en Occitanie",
          description:
            "Basé à Péret, dans l'Hérault, j'échange à distance ou je me déplace selon vos besoins.",
          icon: "mdi:map-marker-outline",
        },
        {
          title: "Un seul interlocuteur",
          description:
            "De la conception à la mise en ligne, vous échangez directement avec la personne qui construit votre site.",
          icon: "mdi:account-outline",
        },
        {
          title: "Référencement local",
          description:
            "Vos pages sont rédigées et structurées pour apparaître dans les recherches liées à votre métier et votre ville.",
          icon: "mdi:map-search-outline",
        },
        {
          title: "Le site vous appartient",
          description:
            "Aucun abonnement obligatoire : le code, le contenu et le nom de domaine restent les vôtres.",
          icon: "mdi:file-check-outline",
        },
      ],
    },
    areas: {
      tagline: "Zone d'intervention",
      title:
        "Des sites conçus pour les entreprises de l'Hérault et d'Occitanie",
      subtitle:
        "Que vous soyez artisan à Béziers, commerçant à Pézenas ou indépendant à Montpellier, votre site est pensé pour être visible dans les recherches locales de votre secteur.",
      cities: [
        "Péret",
        "Béziers",
        "Pézenas",
        "Clermont-l'Hérault",
        "Montpellier",
        "Agde",
        "Sète",
        "Lodève",
      ],
    },
    faq: {
      tagline: "Questions fréquentes",
      title: "Avant de vous lancer",
      subtitle: "Les questions qu'on me pose le plus souvent.",
      items: [
        {
          question: "Combien de temps faut-il pour créer mon site ?",
          answer:
            "Comptez en moyenne 2 à 4 semaines entre le premier échange et la mise en ligne, selon la complexité du projet et votre disponibilité pour les retours.",
        },
        {
          question: "Dois-je fournir les textes et les photos ?",
          answer:
            "Si vous les avez, oui. Sinon, je peux vous accompagner dans la rédaction et vous orienter vers des banques d'images ou un photographe local.",
        },
        {
          question: "Pourrai-je modifier le site moi-même après la livraison ?",
          answer:
            "Oui, selon la formule choisie, vous avez accès à une interface simple pour mettre à jour vos textes, photos et tarifs sans compétence technique.",
        },
        {
          question: "Travaillez-vous uniquement avec des artisans ?",
          answer:
            "Non. J'accompagne aussi les commerçants, professions libérales et petites entreprises qui ont besoin d'un site clair et fonctionnel.",
        },
      ],
    },
    cta: {
      title: "Prêt à donner une vraie présence à votre activité ?",
      subtitle: "Parlons de votre projet, sans engagement.",
    },
  },
  services: [
    {
      id: "site-vitrine",
      name: "Site Vitrine",
      slug: "site-vitrine",
      description:
        "Parfait pour les artisans et indépendants qui veulent être présents sur internet sans se ruiner.",
      icon: "mdi:monitor",
      from: "À partir de ",
      price: "890 €",
      features: [
        "Site 1 à 3 pages",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO",
        "Nom de domaine .fr offert pendant 1 an",
      ],
      buttonText: "Choisir cette formule",
      isPopular: false,
    },
    {
      id: "site-pro",
      name: "Site Pro",
      slug: "site-pro",
      description:
        "Idéal pour les TPE qui veulent un site complet avec catalogue et blog.",
      icon: "mdi:images",
      from: "À partir de ",
      price: "1990 €",
      features: [
        "Site jusqu'à 8 pages",
        "Galerie photos / catalogue",
        "Blog intégré",
        "Mise à jour autonome du contenu",
        "Formation à la mise à jour",
      ],
      buttonText: "Choisir cette formule",
      isPopular: true,
    },
    {
      id: "site-devis",
      name: "Sur Mesure",
      slug: "Sur-mesure",
      description:
        "Vous avez besoin de fonctionnalités spécifiques ? Nous créons la solution adaptée.",
      icon: "mdi:offer",
      from: "",
      price: "Sur devis",
      features: [
        "Site e-commerce",
        "Espace client",
        "Prise de rendez-vous en ligne",
        "Design exclusif",
        "Maintenance",
      ],
      isPopular: false,
      buttonText: "Demander un devis",
    },
  ],
  includedFeatures: {
    tagline: "Inclus dans toutes nos formules",
    title: "Tout ce dont vous avez besoin pour réussir en ligne",
    subtitle:
      "Pas de mauvaise surprise. Chaque site bénéficie de ces avantages.",
    features: [
      {
        title: "Design responsive",
        description:
          "Votre site s'adapte parfaitement aux mobiles, tablettes et ordinateurs.",
        icon: "mdi:smartphone",
        iconClass: "bg-green-500/10 text-green-500",
      },
      {
        title: "Hébergement sécurisé",
        description:
          "Serveurs en Europe, certificat SSL, sauvegardes automatiques et sécurité renforcée.",
        icon: "mdi:shield-check",
        iconClass: "bg-blue-500/10 text-blue-500",
      },
      {
        title: "Référencement local",
        description:
          "Optimisation pour Google et les recherches locales dans votre ville et votre métier.",
        icon: "mdi:search",
        iconClass: "bg-purple-500/10 text-purple-500",
      },
      {
        title: "Support client",
        description:
          "Une équipe réactive pour répondre à vos questions et vous accompagner.",
        icon: "mdi:headphones",
        iconClass: "bg-orange-500/10 text-orange-500",
      },
    ],
  },
  faqItems: {
    tagline: "FAQ",
    title: "Questions sur les tarifs",
    subtitle: "Les réponses aux questions les plus fréquentes.",
    items: [
      {
        question: "Y a-t-il des frais cachés ?",
        answer:
          "Non. Le prix affiché est le prix total pour la création du site. L'hébergement et le nom de domaine sont offerts la première année. Ensuite, comptez environ 150 €/an pour le renouvellement (hébergement + domaine).",
      },
      {
        question: "Puis-je payer en plusieurs fois ?",
        answer:
          "Oui, nous proposons un paiement en 2 ou 3 fois sans frais. 50 % à la commande, 50 % à la mise en ligne.",
      },
      {
        question: "Qu'est-ce qui n'est pas inclus dans le prix ?",
        answer:
          "La rédaction des textes (si vous ne nous les fournissez pas), les photos professionnelles, et les achats d'extensions ou licences tierces spécifiques sont facturés en supplément.",
      },
      {
        question: "Combien coûte la maintenance après la livraison ?",
        answer: "Nous proposons un forfait maintenance à partir de 19 €/mois.",
      },
    ],
  },
} as const;
