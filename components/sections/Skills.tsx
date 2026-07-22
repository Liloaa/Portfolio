"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIconBadge from "@/components/ui/TechIconBadge";
import { techIcons } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="max-w-container mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            number="04"
            label="Outils"
            title="Les technologies avec lesquelles je travaille."
          />
        </motion.div>

        <div className="flex flex-wrap gap-8 md:gap-10">
            {techIcons.map((tech, i) => (
              <TechIconBadge key={tech.name} name={tech.name} icon={tech.icon} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}