type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
};

export default function SectionHeading({ number, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <p className="text-accent font-body text-sm tracking-wide uppercase mb-4">
        {number} / {label}
      </p>
      <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground max-w-3xl">
        {title}
      </h2>
    </div>
  );
}