import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PROJECTS, getProjectBySlug } from "@/data/projects";

/**
 * Statically generate a page for every project at build time.
 */
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

/** Only render slugs returned by generateStaticParams; others 404. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.thumbnail }],
    },
  };
}

/**
 * Project detail / case-study page (/projects/[slug]).
 * Renders overview, problem, solution, features, gallery, and links.
 */
export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All projects
        </Link>

        {/* Header */}
        <header>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">
              {project.title}
            </h1>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <p className="mt-3 text-lg text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>

          {project.githubUrl || project.demoUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <Button asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                </Button>
              ) : null}
              {project.githubUrl ? (
                <Button asChild variant="outline">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon aria-hidden="true" />
                    View Code
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </header>

        {/* Cover image */}
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
          <Image
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Case study */}
        <div className="mt-12 space-y-10">
          {project.problem ? (
            <section>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </section>
          ) : null}

          {project.solution ? (
            <section>
              <h2 className="text-xl font-semibold">Solution</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </section>
          ) : null}

          {project.features && project.features.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.gallery && project.gallery.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold">Screenshots</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image) => (
                  <div
                    key={image.src + image.alt}
                    className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Container>
    </article>
  );
}
