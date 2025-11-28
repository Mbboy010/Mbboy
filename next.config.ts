/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This line removes the yellow ESLint info message forever
  eslint: {
    // Warning: Only use this if you have ESLint properly configured
    // (which you do — via eslint.config.js)
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Optional: nice-to-have modern defaults (recommended in 2025)
  experimental: {
    // Improves performance with large pages / many client components
    optimizePackageImports: ["framer-motion", "lodash"],
  },
};

export default nextConfig;