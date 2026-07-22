import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  download?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium text-sm transition-colors duration-200";

  const styles = {
    primary: "bg-accent text-background hover:bg-accent-hover",
    ghost:
      "border border-border text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <Link href={href} download={download} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}