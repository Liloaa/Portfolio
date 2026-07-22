"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="max-w-container mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              number="01"
              label="Profil"
              title="Apprendre vite, construire avec méthode."
            />
          </motion.div>

          {/* Bloc texte + photo côte à côte */}
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-20">
            {/* Photo discrète */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="shrink-0"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/images/profile.jpeg"
                  alt="Portrait"
                  fill
                  sizes="144px"
                  className="object-cover transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Texte éditorial */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-foreground-muted text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Mon parcours en informatique générale me permet d&apos;aborder un
              projet dans son ensemble : besoin utilisateur, données, logique
              applicative et interface. Je cherche des environnements où la
              rigueur technique se met au service d&apos;un problème concret.
            </motion.p>
          </div>

          {/* Grille de compétences en colonnes aérées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((category, i) => (
              <motion.div key={category.title} variants={fadeUp} custom={i + 3}>
                <h3 className="text-foreground-subtle text-sm uppercase tracking-wide mb-5">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}