/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  },
  transpilePackages: ['three'],
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
}

module.exports = nextConfig
