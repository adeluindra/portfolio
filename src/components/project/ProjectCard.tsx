import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Larger featured card spanning more grid columns in a bento layout. */
  featured?: boolean;
}

/**
 * A project card with thumbnail, title, description, tech stack, and links.
 * Hover: image zoom + gradient overlay + lift (docs/design.md → Project).
 * The whole card links to the detail page; external links stop propagation.
 */
export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5",
        featured && "lg:col-span-2"
      )}
    >
      {/* Thumbnail */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${project.title} details`}
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/0 to-card/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon aria-hidden="true" className="size-4" />
              Code
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              Live Demo
            </a>
          ) : null}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:gap-2"
          >
            Details
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
