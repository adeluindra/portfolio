"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { useMounted } from "@/hooks/useMounted";

/**
 * Toggles between light and dark themes.
 * Renders a stable placeholder until mounted to avoid hydration mismatch,
 * since the resolved theme is only known on the client.
 */
export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun aria-hidden="true" />
        ) : (
          <Moon aria-hidden="true" />
        )
      ) : (
        // Reserve space before mount to prevent layout shift.
        <span className="size-5" aria-hidden="true" />
      )}
    </Button>
  );
}
