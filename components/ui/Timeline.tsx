"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";

type TimelineProps = {
  items: Experience[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-10 first:pt-0"
        >
          <span className="text-accent font-body text-sm md:text-base">
            {item.period}
          </span>

          <div>
            <h3 className="font-display font-medium text-xl md:text-2xl text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-foreground-muted leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}