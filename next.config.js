"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('next').NextConfig} */
var nextConfig = {
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
exports.default = nextConfig;
