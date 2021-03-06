/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.it', 'www.1lo.pl'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
