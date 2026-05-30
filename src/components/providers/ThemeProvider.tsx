"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

/**
 * Wraps the app with next-themes to provide:
 * - Light / Dark mode
 * - System preference detection
 * - Theme persistence (localStorage)
 *
 * Used in the root layout. Must be a Client Component.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
