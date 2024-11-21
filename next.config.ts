import { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["gray-matter", { strict: true, throwOnError: true }],
      ["remark-frontmatter", { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    ppr: "incremental",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ["mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/muhrusdi/**",
      },
    ],
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

export default withMDX(nextConfig)
