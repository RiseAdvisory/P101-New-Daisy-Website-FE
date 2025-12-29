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
        hostname: '**',
      },
    ],
    domains: ['localhost'],
  },
  reactStrictMode: false,
};

export default nextConfig;
