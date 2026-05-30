"use client";

import { useEffect } from "react";

/**
 * Route template — wraps every page and is given a fresh key by Next.js on each
 * navigation, so it remounts and replays the `page-transition` animation.
 *
 * The CSS animation (no JS) never delays render or causes a flash of invisible
 * content. The global `prefers-reduced-motion` rule in globals.css disables the
 * animation for users who opt out of motion.
 *
 * Scroll reset: in this version of Next.js, `<Link>` maintains scroll position
 * and skips non-visible/animated elements when finding a scroll target (see
 * node_modules/next/dist/docs/.../link.md → `scroll`). Because every page's
 * content starts hidden (page-transition + ScrollReveal use opacity: 0), Next's
 * detection can't find a visible top element and keeps the previous scroll
 * offset — landing deep-linked navigations (e.g. "View all projects") at the
 * bottom of the new page. Resetting on mount fixes this, while the hash guard
 * preserves in-page anchor navigation like "Back to home" → /#projects.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return <div className="page-transition">{children}</div>;
}
