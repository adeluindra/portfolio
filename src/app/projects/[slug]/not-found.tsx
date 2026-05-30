import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Friendly 404 shown when a project slug doesn't exist.
 */
export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl font-display">
          Project not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft aria-hidden="true" />
              Back to all projects
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
