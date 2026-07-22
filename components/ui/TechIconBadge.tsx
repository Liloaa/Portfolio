"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type TechIconBadgeProps = {
  name: string;
  icon: IconType;
  index: number;
};

export default function TechIconBadge({ name, icon: Icon, index }: TechIconBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col items-center gap-3"
    >
      <div
        className="w-16 h-16 rounded-2xl border border-border bg-background-soft
                   flex items-center justify-center
                   group-hover:border-accent/50 group-hover:bg-background-elevated
                   transition-colors duration-300"
      >
        <Icon className="w-7 h-7 text-foreground-muted group-hover:text-accent transition-colors duration-300" />
      </div>
      <span className="text-foreground-subtle text-sm">{name}</span>
    </motion.div>
  );
}