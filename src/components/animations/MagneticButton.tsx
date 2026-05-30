"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type ElementType,
} from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Strength of the magnetic pull (0–1). */
  strength?: number;
  as?: ElementType;
}

/**
 * Wraps content so it subtly follows the cursor on hover (magnetic effect),
 * then springs back on leave. Disabled under prefers-reduced-motion and on
 * touch devices (no hover).
 */
export function MagneticButton({
  children,
  className,
  strength = 0.4,
  as: Tag = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <Tag ref={ref} className={cn("inline-flex will-change-transform", className)}>
      {children}
    </Tag>
  );
}
