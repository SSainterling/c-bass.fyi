// next.config.mjs
import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable server actions
    serverActions: true,
    // Optimize package imports
    optimizePackageImports: [
      '@headlessui/react',
      '@heroicons/react',
      '@radix-ui/react-*',
    ],
    // Enable experimental React features
    typedRoutes: true,
  },
  
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,
  
  // Use SWC for minification (faster than Terser)
  swcMinify: true,
  
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Next.js image optimization domains (legacy, prefer remotePatterns)
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'cdn.dribbble.com',
      'm.media-amazon.com',
      'ik.imagekit.io',
      'miro.medium.com',
      'img.clerk.com',
      'i.ytimg.com',
      'store.storeimages.cdn-apple.com',
      'www.apple.com',
    ],
    // Enable WebP format for better performance
    formats: ['image/webp'],
    // Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Set image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false, // Set to true for debugging production builds
  compress: true, // Enable gzip compression
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Custom webpack configurations can be added here
    
    // Add support for loading markdown files
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        'babel-loader',
        '@mdx-js/loader',
      ],
    });
    
    return config;
  },
  
  // Enable HTTP/2 server push
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Configure redirects
  async redirects() {
    return [
      // Add any permanent redirects here
      // Example:
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },
  
  // Configure rewrites
  async rewrites() {
    return [
      // Add any rewrites here
    ];
  },
};

export default withContentlayer(nextConfig);
