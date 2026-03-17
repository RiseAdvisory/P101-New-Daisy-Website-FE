import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects moved to middleware for locale-aware routing (Phase 2)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.trythedaisy.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
