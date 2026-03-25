/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['www.otomert.com.tr', 'otomert.com.tr'],
    unoptimized: true,
  },
}

module.exports = nextConfig
