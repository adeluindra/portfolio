import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project to silence the multiple-lockfile
  // warning (a stray package-lock.json exists in the user's home directory).
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Don't preload every page's JS modules into memory on server start.
    // Reduces the dev server's initial RAM footprint (modules load on request
    // instead). See Next.js "Memory Usage" guide.
    preloadEntriesOnStart: false,
  },
};

export default nextConfig;
