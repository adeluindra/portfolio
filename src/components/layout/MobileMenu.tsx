"use client";

import { useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, CV_PATH } from "@/lib/constants";
import { SOCIALS } from "@/data/socials";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

/**
 * Full-screen slide-in navigation for mobile.
 * Locks body scroll while open and closes on link click or Escape.
 */
export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-dvh w-4/5 max-w-sm flex-col border-l border-border bg-card p-6 shadow-xl transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Menu
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X aria-hidden="true" />
          </Button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === `#${activeId}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-lg font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <Button asChild variant="primary" size="lg">
            <a href={CV_PATH} download onClick={onClose}>
              <Download aria-hidden="true" />
              Download CV
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="icon"
                aria-label={label}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <Icon aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
