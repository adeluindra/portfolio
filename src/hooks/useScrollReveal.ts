"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, EASE, prefersReducedMotion } from "@/lib/gsap";

interface ScrollRevealOptions {
  /** Initial vertical offset in px before reveal. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Delay before the animation starts. */
  delay?: number;
  /** Stagger between direct children. If set, children animate individually. */
  stagger?: number;
  /** Viewport position that triggers the reveal (ScrollTrigger `start`). */
  start?: string;
}

/**
 * Reveals an element (or its children when `stagger` is set) on scroll using
 * GSAP ScrollTrigger. Respects prefers-reduced-motion by rendering content
 * immediately without animation.
 *
 * @returns a ref to attach to the target element.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  y = 32,
  duration = 0.8,
  delay = 0,
  stagger,
  start = "top 85%",
}: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(stagger ? el.children : el, { opacity: 1, y: 0 });
      return;
    }

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: EASE,
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [y, duration, delay, stagger, start]);

  return ref;
}
