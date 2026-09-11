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
  email: "contact@occicode.fr",
  gtagId: "G-DJ9P3L1MN8",
  socials: {
    facebook: "https://www.facebook.com/occicode",
    instagram: "https://www.instagram.com/occicode",
  },
  navLinks: [
    { text: "Accueil", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Tarifs", href: "/tarifs" },
    { text: "À propos", href: "/a-propos" },
    { text: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { text: "Mentions légales", href: "/mentions-legales" },
    { text: "Politique de confidentialité", href: "/confidentialite" },
  ],
  tarifs: {
    tagline: "Tarifs",
    title: "Des prix adaptés aux petites entreprises",
    subtitle: "Le site est entièrement à vous.",
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
