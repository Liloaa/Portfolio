import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "e-laitier",
    number: "01",
    title: "E-Laitier",
    description:
      "Une plateforme pensée pour structurer le suivi et les échanges autour de la filière laitière.",
    longDescription: [
      "E-Laitier est une plateforme conçue pour aider les producteurs et intervenants de la filière laitière à mieux suivre leurs échanges et leur activité au quotidien.",
      "Le projet couvre la gestion des données de production, le suivi des transactions, et une interface pensée pour rester simple d'utilisation malgré la complexité des données manipulées.",
    ],
    role: "Conception de la base de données relationnelle et développement des fonctionnalités principales de suivi.",
    tech: ["Django", "Angular", "SQL"],
    githubUrl: "https://github.com/matams-labs/produits-laitiers-django/tree/feature/version-finale",
  },
  {
    slug: "frauddetection",
    number: "02",
    title: "FraudDetection",
    description:
      "Exploration d'approches de détection de fraude, entre préparation des données et lecture de signaux utiles.",
    longDescription: [
      "Ce projet explore différentes approches pour détecter des schémas de fraude à partir de jeux de données transactionnelles.",
      "L'accent a été mis sur la préparation et le nettoyage des données, une étape souvent sous-estimée mais déterminante pour la fiabilité des résultats.",
    ],
    role: "Analyse exploratoire des données, préparation du dataset, et implémentation des premiers modèles de détection.",
    tech: [".NET", "ASP.NET Core","ML.NET","Analyse de données", "PostgreSQL"],
    githubUrl: "https://github.com/Liloaa/FraudDetection",
  },
  {
    slug: "ges-etudiant",
    number: "03",
    title: "GES-Étudiant",
    description:
      "Un outil de gestion académique conçu pour rendre l'information étudiante plus accessible et mieux organisée.",
    longDescription: [
      "GES-Étudiant centralise les informations académiques des étudiants pour en simplifier la consultation et la mise à jour.",
      "L'objectif était de proposer une interface claire, pensée pour des utilisateurs non techniques (administration, enseignants).",
    ],
    role: "Développement de la logique métier et de l'interface de gestion des données étudiantes.",
    tech: ["Laravel", "Vue.js", "SQL"],
    githubUrl: "https://github.com/Liloaa/ges_academique",
  },
  {
    slug: "applications-mobiles",
    number: "04",
    title: "Applications mobiles",
    description:
      "Des interfaces mobiles orientées vers des parcours simples, une logique robuste et une prise en main fluide.",
    longDescription: [
      "Un ensemble d'applications mobiles développées pour explorer des parcours utilisateurs simples et efficaces.",
      "Chaque application a été pensée pour rester légère, avec une logique métier robuste malgré une interface volontairement épurée.",
    ],
    role: "Développement complet (interface et logique) avec Flutter.",
    tech: ["Flutter"],
    githubUrl: "https://github.com/Liloaa/applications-mobiles",
  },
];