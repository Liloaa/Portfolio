"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="max-w-container mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            number="03"
            label="Parcours"
            title="Formation & expériences"
          />
        </motion.div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
}