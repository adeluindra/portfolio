"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

/**
 * Fades and slides its content in on mount (no scroll trigger).
 * Used for above-the-fold content like the hero, which is visible immediately.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, delay, ease: EASE }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
