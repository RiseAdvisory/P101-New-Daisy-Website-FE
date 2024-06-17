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
        destination: '/features/customer',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
