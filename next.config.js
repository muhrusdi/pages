/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "https://jsonplaceholder.typicode.com",
      },
    ]
  },
}

module.exports = nextConfig
