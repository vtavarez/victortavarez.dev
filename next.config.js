/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }
        ],
      },
    ]
  },
  images: {
    domains: ['cdn.sanity.io'],
  }
}

module.exports = nextConfig
