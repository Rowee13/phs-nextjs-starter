import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    // experimental: {
    //     typedRoutes: true,
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        unoptimized: true, // Required for static export
    },
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
}

export default nextConfig
