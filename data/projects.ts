import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "e-laitier",
    number: "01",
    title: "E-Laitier",
    description:
      "Une plateforme pensée pour structurer le suivi et les échanges autour de la filière laitière.",
    tech: ["Java", "SQL"],
  },
  {
    slug: "frauddetection",
    number: "02",
    title: "FraudDetection",
    description:
      "Exploration d'approches de détection de fraude, entre préparation des données et lecture de signaux utiles.",
    tech: ["Python", "Analyse de données"],
  },
  {
    slug: "ges-etudiant",
    number: "03",
    title: "GES-Étudiant",
    description:
      "Un outil de gestion académique conçu pour rendre l'information étudiante plus accessible et mieux organisée.",
    tech: ["Java", "SQL"],
  },
  {
    slug: "applications-mobiles",
    number: "04",
    title: "Applications mobiles",
    description:
      "Des interfaces mobiles orientées vers des parcours simples, une logique robuste et une prise en main fluide.",
    tech: ["Flutter"],
  },
];