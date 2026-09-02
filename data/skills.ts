import {
  SiPython,
  SiReact,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiDjango,
  SiAngular,
  SiPhp,
  SiSharp,
  SiVuedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export const skillCategories = [
  {
    title: "Développement",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "C#",
      "PHP",
      "Flutter",
      "SQL",
      "Git",
    ],
  },
  {
    title: "Frameworks",
    skills: ["Angular", "Django", "ASP.NET Core", "Vue.js"],
  },
  {
    title: "Données",
    skills: [
      "PostgreSQL",
      "Analyse exploratoire",
      "Modélisation",
      "Visualisation",
      "Qualité des données",
    ],
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
  { name: "TypeScript", icon: SiTypescript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "Django", icon: SiDjango },
  { name: "Angular", icon: SiAngular },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "PHP", icon: SiPhp },
  { name: "C#", icon: SiSharp },
];