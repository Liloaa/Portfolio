"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center border-b border-border overflow-hidden pt-16"
    >
      <div className="max-w-container mx-auto px-6 md:px-10 w-full py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="text-accent font-body text-sm md:text-base tracking-wide uppercase mb-6"
          >
            Étudiante en L3 à l'Ecole Nationale d'Informatique ENI · Informatique générale
          </motion.p>

          {/* Titre asymétrique */}
          <motion.h1
            variants={item}
            className="font-display font-medium text-hero text-foreground max-w-4xl"
          >
            Mahatoky Luciana RAZAKA — je conçois des solutions utiles, de l&apos;idée au code.
          </motion.h1>

          {/* Sous-texte */}
          <motion.p
            variants={item}
            className="text-foreground-muted text-lg md:text-xl max-w-xl mt-8 leading-relaxed"
          >
            Je développe des expériences numériques claires et solides, avec
            une curiosité particulière pour les données, les applications
            mobiles et les systèmes qui simplifient le quotidien.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 flex gap-4">
            <Button href="#projects" variant="primary">
              Voir mes projets
            </Button>
            <Button href="/cv.pdf" variant="ghost" download>
              Télécharger le CV
            </Button>
          </motion.div>
        </motion.div>

        {/* Badge circulaire décalé — élément asymétrique */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex
                     w-40 h-40 rounded-full bg-accent items-center justify-center
                     shadow-[0_0_60px_-10px_theme(colors.accent.DEFAULT)]"
        >
          <span className="font-display font-bold text-background text-xl text-center leading-tight">
            L3
            <br />
            2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}