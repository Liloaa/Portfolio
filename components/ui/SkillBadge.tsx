type SkillBadgeProps = {
  label: string;
};

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full border border-border text-foreground-muted text-sm font-body hover:border-accent hover:text-accent transition-colors duration-200">
      {label}
    </span>
  );
}