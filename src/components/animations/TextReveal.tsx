"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Element to render the text in (e.g. "h1", "p"). Defaults to "span". */
  as?: ElementType;
  delay?: number;
  /** Stagger between words in seconds. */
  stagger?: number;
}

/**
 * Reveals text word-by-word with a fade-up stagger on mount.
 * Words are wrapped in inline-block spans so transforms don't break layout.
 * Falls back to plain visible text under prefers-reduced-motion.
 */
export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.08,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wordEls = el.querySelectorAll("[data-word]");

    if (prefersReducedMotion()) {
      gsap.set(wordEls, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordEls,
        { opacity: 0, y: "0.6em" },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: EASE,
          delay,
          stagger,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, text]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <span data-word className="inline-block opacity-0 will-change-transform">
            {word}
          </span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
