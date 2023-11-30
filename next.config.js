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
        source: "/api/:path*",
        destination: "https://api.themoviedb.org/:path*",
      },
    ]
  },
}

module.exports = nextConfig
