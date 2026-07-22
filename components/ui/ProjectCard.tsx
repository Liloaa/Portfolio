"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block h-full rounded-2xl border border-border bg-background-soft p-8 md:p-10
                   hover:border-accent/50 hover:bg-background-elevated
                   transition-colors duration-300"
      >
        <span className="text-accent font-body text-sm">{project.number}</span>

        <h3 className="font-display font-medium text-2xl md:text-3xl text-foreground mt-4 mb-4
                       group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-foreground-muted leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-foreground-subtle border border-border rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}