/** @type {import('next').NextConfig} */
const nextConfig = {
  // your config options here (if any)
  reactStrictMode: true,
  images: {
    // If you are using external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
