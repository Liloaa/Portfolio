// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0E17",   // fond principal, presque noir-bleu
          soft: "#0F1420",      // fond des cartes/sections alternées
          elevated: "#161C2C",  // fond des éléments en relief (cartes projet)
        },
        foreground: {
          DEFAULT: "#F4F6FA",   // texte principal (titres)
          muted: "#94A3B8",     // texte secondaire (descriptions)
          subtle: "#5C6B82",    // texte tertiaire (labels, dates)
        },
        accent: {
          DEFAULT: "#22D3EE",   // cyan électrique — CTA, liens, highlights
          hover: "#67E8F9",     // survol
          muted: "#0E7490",     // version assombrie (bordures, icônes discrètes)
        },
        border: {
          DEFAULT: "#1E2536",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // titres impactants
        body: ["var(--font-body)", "sans-serif"],        // texte courant
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;