"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-container mx-auto px-6 md:px-10 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-body text-sm tracking-wide uppercase mb-8"
        >
          05 / Contact
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-medium text-3xl md:text-5xl lg:text-6xl text-foreground max-w-3xl leading-tight"
          >
            Un projet, une opportunité ou simplement une idée ? Parlons-en.
          </motion.h2>

          <motion.a
            href="mailto:mahatokylucianarazaka@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full
                       bg-accent text-background font-body font-medium
                       hover:bg-accent-hover transition-colors duration-200
                       whitespace-nowrap self-start lg:self-end"
          >
            <FiMail className="w-5 h-5" />
            Me contacter
          </motion.a>
        </div>
      </div>
    </section>
  );
}