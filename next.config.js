/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/DSA_Visualizer',
  assetPrefix: '/DSA_Visualizer/',
}

module.exports = nextConfig

