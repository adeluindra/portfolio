"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CertificateCard } from "./CertificateCard";
import { gsap, EASE, DURATION, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import type { Certificate } from "@/types";

interface CertificateCarouselProps {
  certificates: Certificate[];
  /** Where the trailing "See all" card links to. */
  seeAllHref?: string;
}

/**
 * Horizontally scrollable row of certificate cards with snap scrolling and
 * prev/next controls. A trailing "See all certificates" card links to the full
 * listing, so the home section stays compact while every credential remains
 * reachable.
 *
 * Motion: arrow clicks use an eased GSAP tween (instead of native smooth
 * scroll) and cards subtly scale/fade based on their distance from the centre
 * of the viewport, so scrolling feels fluid rather than stiff. Both effects
 * are skipped for users who prefer reduced motion.
 */
export function CertificateCarousel({
  certificates,
  seeAllHref = "/certificates",
}: CertificateCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 8);
  }, []);

  // Scale/fade each card based on how far its centre is from the viewport
  // centre, giving a soft depth-of-field feel while scrolling.
  const updateDepth = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || prefersReducedMotion()) return;

    const items = el.querySelectorAll<HTMLElement>("[data-carousel-item]");
    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    const range = el.clientWidth / 1.4;

    items.forEach((item) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const t = Math.min(Math.abs(viewportCenter - itemCenter) / range, 1);
      gsap.set(item, {
        scale: 1 - t * 0.1,
        opacity: 1 - t * 0.45,
        force3D: true,
      });
    });
  }, []);

  // Throttle scroll work to one update per animation frame.
  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateArrows();
      updateDepth();
    });
  }, [updateArrows, updateDepth]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateArrows();
    updateDepth();

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, updateArrows, updateDepth]);

  const scrollByCards = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-carousel-item]");
    // Advance by one card (plus the flex gap) per click, falling back to most
    // of the viewport width if no card is measurable yet.
    const step = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth * 0.8;
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(el.scrollLeft + direction * step, max));

    if (prefersReducedMotion()) {
      el.scrollLeft = target;
      return;
    }

    // Eased tween for a smoother feel than the browser's native smooth scroll.
    // The scroll listener keeps arrows + depth in sync as scrollLeft animates.
    gsap.to(el, {
      scrollLeft: target,
      duration: DURATION.base,
      ease: EASE,
      overwrite: true,
    });
  }, []);

  if (certificates.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
        No certificates to show yet.
      </p>
    );
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Certificates carousel"
        tabIndex={0}
      >
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            data-carousel-item
            className="w-[270px] shrink-0 snap-start will-change-transform sm:w-[300px]"
          >
            <CertificateCard certificate={certificate} className="h-full" />
          </div>
        ))}

        {/* Trailing "see all" card */}
        <Link
          href={seeAllHref}
          data-carousel-item
          className="group flex w-[270px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/50 p-6 text-center transition-colors will-change-transform hover:border-primary/50 hover:bg-card sm:w-[300px]"
          aria-label="See all certificates"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-muted text-foreground transition-transform duration-300 group-hover:scale-110">
            <ArrowRight aria-hidden="true" className="size-6" />
          </span>
          <span className="text-base font-semibold">See all certificates</span>
        </Link>
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canScrollPrev}
          aria-label="Scroll to previous certificates"
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            !canScrollPrev && "cursor-not-allowed opacity-40 hover:scale-100 hover:bg-card"
          )}
        >
          <ArrowLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canScrollNext}
          aria-label="Scroll to next certificates"
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            !canScrollNext && "cursor-not-allowed opacity-40 hover:scale-100 hover:bg-card"
          )}
        >
          <ArrowRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
