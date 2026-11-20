import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Single small stylesheet: inlining it removes the only render-blocking request (mobile LCP).
  experimental: { inlineCss: true },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
