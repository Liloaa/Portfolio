import {
  SiPython,
  SiReact,
  SiFlutter,
  SiJavascript,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { IconType } from "react-icons";

export const skillCategories = [
  {
    title: "Développement",
    skills: ["Java", "Python", "JavaScript", "Flutter", "SQL", "Git"],
  },
  {
    title: "Données",
    skills: ["Analyse exploratoire", "Modélisation", "Visualisation", "Qualité des données"],
  },
  {
    title: "Méthode",
    skills: ["Conception produit", "Travail collaboratif", "Documentation"],
  },
];

export type TechIcon = {
  name: string;
  icon: IconType;
};

export const techIcons: TechIcon[] = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Flutter", icon: SiFlutter },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
];