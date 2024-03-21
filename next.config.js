/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: 'api.sanity.io/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      }
    ]
  },
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
