"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { Pagination } from "@/components/ui/Pagination";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectsExplorerProps {
  projects: Project[];
}

const ALL = "All";
/** Projects shown per page before pagination kicks in. */
const PAGE_SIZE = 6;

/**
 * Client-side project browser with text search and tech-stack filtering.
 * Filtering happens in-memory (the full list is small and static), so there's
 * no network round-trip — results update instantly as the user types or picks
 * a tech tag (docs/sitemap.md → Projects: Search, Filter by Tech Stack).
 */
export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState<string>(ALL);
  const [page, setPage] = useState(1);

  // Unique, sorted list of every tech across all projects (+ an "All" option).
  const techOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesTech =
        activeTech === ALL || project.techStack.includes(activeTech);
      if (!matchesTech) return false;

      if (!q) return true;
      const haystack = [
        project.title,
        project.summary,
        project.description,
        ...project.techStack,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [projects, query, activeTech]);

  const hasActiveFilters = query.trim() !== "" || activeTech !== ALL;

  // Reset to the first page whenever the result set changes (new search/filter).
  useEffect(() => {
    setPage(1);
  }, [query, activeTech]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  // Guard against a stale page beyond the current range.
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const paginated = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  function goToPage(next: number) {
    setPage(next);
    // Bring the top of the results into view after a page change.
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div>
      {/* Search */}
      <div className="relative mx-auto max-w-md">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
          className="px-10"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        ) : null}
      </div>

      {/* Tech-stack filter chips */}
      <div
        role="group"
        aria-label="Filter projects by technology"
        className="mt-6 flex flex-wrap justify-center gap-2"
      >
        {techOptions.map((tech) => {
          const isActive = tech === activeTech;
          return (
            <button
              key={tech}
              type="button"
              onClick={() => setActiveTech(tech)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* Result count + reset */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtered.length} project{filtered.length === 1 ? "" : "s"}
          {hasActiveFilters ? " found" : ""}
        </p>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveTech(ALL);
            }}
            className="text-sm font-medium text-primary transition-colors hover:underline"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Results */}
      <div className="mt-6">
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
            No projects match your search. Try a different keyword or tech.
          </p>
        ) : (
          <>
            <ProjectGrid projects={paginated} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
              className="mt-12"
            />
          </>
        )}
      </div>
    </div>
  );
}
