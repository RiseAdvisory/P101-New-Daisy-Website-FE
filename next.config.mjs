import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/features/business',
        permanent: true,
      },
      // Redirect customer pages to business
      {
        source: '/customer',
        destination: '/business',
        permanent: true,
      },
      {
        source: '/features/customer',
        destination: '/features/business',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
      },
      {
        protocol: 'https',
        hostname: '*.media.strapiapp.com',
      },
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
