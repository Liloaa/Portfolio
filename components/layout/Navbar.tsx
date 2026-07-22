"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "#about", label: "Profil" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Parcours" },
  { href: "#skills", label: "Outils" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêche le scroll du fond quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

          {/* Liens desktop */}
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

          {/* Actions desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-5 py-2 rounded-full
                         border border-border text-foreground text-sm font-medium
                         hover:border-accent hover:text-accent transition-colors duration-200"
            >
              CV
            </a>
            <ThemeToggle />
          </div>

          {/* Actions mobile : toggle thème + bouton hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         border border-border text-foreground
                         hover:border-accent hover:text-accent transition-colors duration-200"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <span className="font-display font-medium text-foreground text-lg">
                Menu
              </span>
              <button
                onClick={closeMenu}
                aria-label="Fermer le menu"
                className="w-9 h-9 flex items-center justify-center rounded-full
                           border border-border text-foreground
                           hover:border-accent hover:text-accent transition-colors duration-200"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col px-6 py-10 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-foreground text-2xl font-display py-3 border-b border-border hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="/cv.pdf"
                download
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full
                           bg-accent text-background text-sm font-medium"
              >
                Télécharger le CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}