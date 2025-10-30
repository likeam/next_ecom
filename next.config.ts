import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    SITE_URL: process.env.SITE_URL || "http://localhost:3000",
  },
};

export default nextConfig;
