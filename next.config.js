/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://dummyjson.com/:path*",
      },
    ]
  },
}

module.exports = nextConfig
