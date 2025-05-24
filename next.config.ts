import { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import rehypeMdxCodeProps from "rehype-mdx-code-props"

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeMdxCodeProps],
  },
})

const nextConfig: NextConfig = {
  transpilePackages: ["shiki"],
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
