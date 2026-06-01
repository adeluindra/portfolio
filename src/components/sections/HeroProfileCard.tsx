"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";
import { SITE_CONFIG, PROFILE_IMAGE } from "@/lib/constants";

/** Tech tags shown at the bottom of the card. */
const TECH_TAGS = ["React", "Next.js", "TypeScript", "Tailwind", "Node"];

/**
 * Hero profile card styled as a code-editor window (see
 * docs/PRD_Card_Design_Animations.md):
 *  - Title bar with traffic-light dots + path label
 *  - Gradient-bordered avatar
 *  - Syntax-highlighted `const dev = {…}` block
 *  - Tech tags
 *
 * Motion:
 *  A. Entrance — opacity/scale in on mount
 *  B. Floating — continuous gentle vertical bob
 *  C. 3D tilt — follows the cursor, springs back on leave
 * All motion is disabled under prefers-reduced-motion.
 */
export function HeroProfileCard() {
  const floatRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const floatEl = floatRef.current;
    const cardEl = cardRef.current;
    if (!floatEl || !cardEl) return;

    if (prefersReducedMotion()) {
      gsap.set(cardEl, { opacity: 1, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // A. Entrance
      gsap.fromTo(
        cardEl,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: EASE }
      );

      // B. Floating (continuous) — applied to a wrapper so it never fights
      // with the tilt rotation on the card itself.
      gsap.to(floatEl, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    // C. 3D tilt — only on devices that actually hover.
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    const handleMove = (event: MouseEvent) => {
      const rect = cardEl.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width; // 0 → 1
      const py = (event.clientY - rect.top) / rect.height; // 0 → 1
      gsap.to(cardEl, {
        rotateY: (px - 0.5) * 20, // -10° → 10°
        rotateX: -(py - 0.5) * 20, // 10° → -10°
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleLeave = () => {
      gsap.to(cardEl, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: EASE,
        overwrite: "auto",
      });
    };

    if (supportsHover) {
      cardEl.addEventListener("mousemove", handleMove);
      cardEl.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      ctx.revert();
      cardEl.removeEventListener("mousemove", handleMove);
      cardEl.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md [perspective:1000px]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 blur-3xl"
      />

      <div ref={floatRef} className="will-change-transform">
        <div
          ref={cardRef}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-card/70 shadow-2xl backdrop-blur-md opacity-0 [transform-style:preserve-3d]"
        >
          <div className="flex h-full flex-col p-5 sm:p-6">
            {/* Title bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#ff5f57]" />
                <span className="size-3 rounded-full bg-[#febc2e]" />
                <span className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                ~/portfolio
              </span>
            </div>

            {/* Avatar with gradient border */}
            <div className="mt-6 size-40 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px] shadow-lg">
              <div className="relative size-full overflow-hidden rounded-[14px] bg-card">
                <Image
                  src={PROFILE_IMAGE}
                  alt={`${SITE_CONFIG.name} — ${SITE_CONFIG.role}`}
                  fill
                  priority
                  sizes="160px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Code block */}
            <pre className="mt-6 font-mono text-xs leading-relaxed sm:text-sm">
              <code>
                <span className="text-accent">const</span>{" "}
                <span className="text-secondary">dev</span>
                <span className="text-muted-foreground"> = {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-primary">name</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-emerald-400">&quot;{SITE_CONFIG.name}&quot;</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-primary">stack</span>
                <span className="text-muted-foreground">: [</span>
                <span className="text-emerald-400">&quot;Next.js&quot;</span>
                <span className="text-muted-foreground">, </span>
                <span className="text-emerald-400">&quot;TS&quot;</span>
                <span className="text-muted-foreground">],</span>
                {"\n"}
                {"  "}
                <span className="text-primary">focus</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-emerald-400">&quot;frontend + fullstack&quot;</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                {"  "}
                <span className="text-primary">available</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-amber-400">true</span>
                <span className="text-muted-foreground">,</span>
                {"\n"}
                <span className="text-muted-foreground">{"};"}</span>
              </code>
            </pre>

            {/* Tech tags */}
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
