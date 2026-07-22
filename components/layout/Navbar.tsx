"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "Profil" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#skills", label: "Outils" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-medium text-foreground text-lg"
        >
          RAZAKA Mahatoky Luciana
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground-muted text-sm hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full
                     border border-border text-foreground text-sm font-medium
                     hover:border-accent hover:text-accent transition-colors duration-200"
        >
          CV
        </a>

        {/* Menu mobile simplifié — juste un lien direct vers contact pour rester simple */}
        <a
          href="#contact"
          className="md:hidden text-foreground-muted text-sm hover:text-accent transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}