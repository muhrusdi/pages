import { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
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
