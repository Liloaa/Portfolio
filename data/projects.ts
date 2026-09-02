import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "e-laitier",
    number: "01",
    title: "E-Laitier",
    description:
      "Plateforme e-commerce de vente de produits laitiers, du catalogue au paiement mobile, avec back-office d'administration complet.",
    longDescription: [
      "E-Laitier est une application web complète de vente en ligne spécialisée dans les produits laitiers, développée dans le cadre d'un projet universitaire en groupe de 4 personnes.",
      "La plateforme couvre l'ensemble du parcours d'achat : consultation du catalogue avec recherche, gestion du panier, passage de commande avec choix de l'adresse de livraison, et simulation de paiement mobile (MVola / Orange Money), modes de paiement courants à Madagascar.",
      "L'accent a été mis sur la séparation claire des rôles — visiteur, client connecté et administrateur — avec une authentification JWT et des permissions différenciées côté API Django.",
    ],
    role: "Développement full-stack de la partie client connecté, de l'API Django jusqu'à l'interface Angular. Et la finalisation du projet.",
    tech: ["Django", "Angular", "REST API", "JWT", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/matams-labs/produits-laitiers-django/tree/feature/version-finale",
  },
  {
    slug: "frauddetection",
    number: "02",
    title: "FraudDetection",
    description:
      "Système de détection automatique de transactions bancaires suspectes, avec analyse par machine learning, alertes en temps réel et rapports de conformité.",
    longDescription: [
      "FraudDetection est une application web de détection de fraude bancaire développée dans le cadre d'un projet universitaire en groupe de 4 personnes, en L3 Informatique Générale à l'ENI de Fianarantsoa.",
      "L'application analyse automatiquement les transactions bancaires pour identifier les comportements suspects : montants inhabituels par rapport à l'historique du compte, localisation incohérente, ou fréquence anormale. Lorsqu'une fraude potentielle est détectée, une alerte est générée instantanément et poussée en temps réel sur le dashboard de l'équipe de conformité via SignalR. Des rapports sont également produits pour le suivi et l'audit.",
    ],
    role: "Développement du backend et de la couche API : conception du schéma de base de données, configuration d'Entity Framework Core avec PostgreSQL, implémentation des endpoints REST (transactions, filtres, import CSV), seed data, et mise en place de l'architecture Feature Folders partagée entre les membres de l'équipe.",
    tech: ["ASP.NET Core", "ML.NET", "PostgreSQL", "SignalR", "C#", "Entity Framework"],
    githubUrl: "https://github.com/Liloaa/FraudDetection",
  },
  {
    slug: "ges-etudiant",
    number: "03",
    title: "GES-Étudiant",
    description:
      "Système de gestion académique des élèves permettant de centraliser les informations scolaires, les inscriptions, les classes, les matières et les notes au sein d'un établissement.",
    longDescription: [
      "Une application web de gestion académique conçue pour centraliser et faciliter le suivi des élèves au sein d'un établissement scolaire. Le système permet de gérer les élèves, les enseignants, les niveaux, les salles, les matières, les inscriptions et les résultats scolaires.",
      "L'application intègre également un système d'authentification avec différents rôles (Administrateur, Enseignant et Élève), offrant à chaque utilisateur un espace adapté à ses responsabilités. Les élèves peuvent notamment consulter leurs informations et leurs notes, tandis que les administrateurs et enseignants participent à la gestion académique.",
    ],
    role: "Conception et développement de l'application, modélisation de la base de données, création des fonctionnalités CRUD, gestion de l'authentification et des rôles, ainsi que développement du système de gestion des inscriptions et des notes.",
    tech: ["PHP", "Laravel", "Vue.js", "Inertia.js", "MySQL", "Tailwind CSS", "Git"],
    githubUrl: "https://github.com/Liloaa/ges_academique",
  },
  {
    slug: "applications-mobiles - VavakaFamindrapo",
    number: "04",
    title: "VavakaFamindrapo",
    description:
      "Numérisation de livres de prières catholiques malgaches en application mobile, avec navigation, recherche et gestion des favoris.",
    longDescription: [
      "VavakaFamindrapo est une application mobile multiplateforme qui transforme des livres de prières catholiques malgaches physiques en expérience numérique intuitive.",
      "L'application permet de naviguer entre trois livres de prières, de rechercher une prière par son titre, son contenu ou son numéro de page, d'afficher les images associées à certaines prières, et de sauvegarder ses prières favorites directement sur l'appareil.",
      "Le contenu est géré dynamiquement via une API REST : de nouvelles prières ou de nouveaux livres peuvent être ajoutés à tout moment sans que l'utilisateur ait besoin de réinstaller l'application.",
    ],
    role: "Conception et développement complet de l'application — architecture de la base de données, développement de l'API backend, et développement de l'interface mobile Flutter.",
    tech: ["Flutter", "Dart", "Node.js", "Express", "PostgreSQL", "Supabase", "REST API", "Git", "GitHub", "Render"],
    githubUrl: "https://github.com/Liloaa/applications-mobiles",
  },
];