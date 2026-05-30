import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { ProjectsExplorer } from "@/components/project/ProjectsExplorer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of web development projects by Moh Syafiq Ade Luwindra, built with Next.js, Laravel, TypeScript, and more.",
};

/**
 * All-projects listing page (/projects).
 * Lists every project with client-side search and tech-stack filtering
 * (docs/sitemap.md → Projects).
 */
export default function ProjectsPage() {
  return (
    <div className="py-20 sm:py-28">
      <Container>
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>

        <SectionHeading
          eyebrow="Projects"
          title="All projects"
          description="Everything I've built — from client work and internships to personal experiments."
        />

        <ScrollReveal className="mt-14">
          <ProjectsExplorer projects={PROJECTS} />
        </ScrollReveal>
      </Container>
    </div>
  );
}
