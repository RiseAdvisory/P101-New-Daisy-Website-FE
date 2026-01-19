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
        permanent: false,
      },
      {
        source: '/features',
        destination: '/features/business',
        permanent: false,
      },
      // Redirect customer pages to business
      {
        source: '/customer',
        destination: '/business',
        permanent: false,
      },
      {
        source: '/features/customer',
        destination: '/features/business',
        permanent: false,
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
