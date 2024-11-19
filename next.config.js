/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  

  images: { unoptimized: true },
// Optionally, generate routes for each locale
trailingSlash: true,


};

module.exports = nextConfig;
