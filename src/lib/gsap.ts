"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralized GSAP setup.
 * Plugins are registered once here and reused across the app via custom hooks,
 * avoiding duplicate registration (docs/ai-rules.md → GSAP Rules).
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Default easing and durations shared by all animations to keep motion
 * consistent and professional (docs/animation-guide.md).
 */
export const EASE = "power3.out";
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1.2,
} as const;

/**
 * Whether the user has requested reduced motion.
 * Animations should be skipped or simplified when this is true.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
