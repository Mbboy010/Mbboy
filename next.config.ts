import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ disables sharp for local dev on Termux
  },
};

export default nextConfig;