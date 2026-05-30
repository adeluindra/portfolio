import { cn } from "@/lib/utils";

/**
 * Decorative aurora / gradient-glow background (docs/design.md → Hero).
 * Pure CSS, GPU-friendly (no JS), and purely decorative (aria-hidden).
 * Uses the design-system primary/secondary/accent tokens.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] dark:bg-primary/25" />
      <div className="absolute right-[5%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] dark:bg-accent/20" />
      <div className="absolute left-[5%] top-[40%] h-[24rem] w-[24rem] rounded-full bg-secondary/20 blur-[120px] dark:bg-secondary/15" />
    </div>
  );
}
