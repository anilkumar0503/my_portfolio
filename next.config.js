/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/my_portfolio' : '',
  assetPrefix: isProd ? '/my_portfolio' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
