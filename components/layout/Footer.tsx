import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-container mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
        <p className="text-foreground-subtle text-sm">
          © 2026 Mahatoky Luciana RAZAKA — Informatique générale
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Liloaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-subtle hover:text-accent transition-colors duration-200"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/Luciana Rzk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-subtle hover:text-accent transition-colors duration-200"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}