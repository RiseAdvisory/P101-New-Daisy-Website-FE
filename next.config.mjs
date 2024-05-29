/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/business',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
