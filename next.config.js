/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://api.themoviedb.org/3/:path*",
      },
    ]
  },
}

module.exports = nextConfig
