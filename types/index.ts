export type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;       // description courte (carte)
  longDescription: string[]; // paragraphes détaillés (page projet)
  role: string;               // ta contribution
  challenges?: string;        // optionnel
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Experience = {
  period: string;
  title: string;
  description: string;
};