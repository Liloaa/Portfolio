import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-container mx-auto px-6 md:px-10">
          {/* Retour */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-foreground-muted text-sm hover:text-accent transition-colors duration-200 mb-16"
          >
            <FiArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>

          {/* En-tête */}
          <span className="text-accent font-body text-sm">{project.number}</span>
          <h1 className="font-display font-medium text-4xl md:text-6xl text-foreground mt-4 mb-6 max-w-3xl">
            {project.title}
          </h1>
          <p className="text-foreground-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-16">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-foreground-subtle border border-border rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="border-t border-border" />

          {/* Contenu détaillé */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-display font-medium text-2xl text-foreground mb-2">
                Le projet
              </h2>
              {project.longDescription.map((paragraph, i) => (
                <p key={i} className="text-foreground-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-foreground-subtle text-sm uppercase tracking-wide mb-3">
                  Mon rôle
                </h3>
                <p className="text-foreground-muted leading-relaxed">{project.role}</p>
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-col gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground text-sm hover:border-accent hover:text-accent transition-colors duration-200"
                    >
                      <FiGithub className="w-4 h-4" />
                      Voir sur GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-background text-sm hover:bg-accent-hover transition-colors duration-200"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Voir la démo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Navigation entre projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-foreground-muted hover:text-accent transition-colors duration-200"
              >
                <FiArrowLeft className="w-4 h-4" />
                <div>
                  <p className="text-xs text-foreground-subtle mb-1">Projet précédent</p>
                  <p className="font-display font-medium text-foreground group-hover:text-accent">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-3 text-right text-foreground-muted hover:text-accent transition-colors duration-200"
              >
                <div>
                  <p className="text-xs text-foreground-subtle mb-1">Projet suivant</p>
                  <p className="font-display font-medium text-foreground group-hover:text-accent">
                    {nextProject.title}
                  </p>
                </div>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}