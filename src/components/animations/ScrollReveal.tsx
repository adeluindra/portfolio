"use client";

import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger children individually (seconds between each). */
  stagger?: number;
  /** Vertical offset before reveal. */
  y?: number;
  delay?: number;
  duration?: number;
  /** Element to render as. Defaults to a div. */
  as?: ElementType;
}

/**
 * Wrapper that reveals its content on scroll.
 * When `stagger` is provided, its direct children animate one after another.
 */
export function ScrollReveal({
  children,
  className,
  stagger,
  y,
  delay,
  duration,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLElement>({ stagger, y, delay, duration });

  return (
    <Tag
      ref={ref}
      // Hide initially (container for single reveal, children for stagger) so
      // there's no flash before GSAP sets the starting state. Reduced-motion
      // users have it set back to visible immediately by the hook.
      className={cn(stagger ? "[&>*]:opacity-0" : "opacity-0", className)}
    >
      {children}
    </Tag>
  );
}
