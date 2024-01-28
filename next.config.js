/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ecolife.posthemes.com", "i.postimg.cc"],
  },
};

module.exports = nextConfig;
