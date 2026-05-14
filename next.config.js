/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/my_portfolio',
  assetPrefix: '/my_portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
