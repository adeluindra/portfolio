import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionHeadingProps {
  /** Small overline label above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/**
 * Consistent section heading: eyebrow + title + description, centered.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Anchor id used for navbar scrolling and active-section tracking. */
  id: string;
  children: ReactNode;
  /** Set false to remove the centered container (full-bleed sections). */
  contained?: boolean;
}

/**
 * Semantic <section> wrapper with consistent vertical rhythm and scroll margin
 * so anchored navigation lands below the sticky navbar.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, contained = true, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  )
);
Section.displayName = "Section";

export { Section };
