/**
 * Route template — wraps every page and is given a fresh key by Next.js on each
 * navigation, so it remounts and replays the `page-transition` animation.
 *
 * Pure CSS (no JS), so it never delays render or causes a flash of invisible
 * content. The global `prefers-reduced-motion` rule in globals.css disables the
 * animation for users who opt out of motion.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
