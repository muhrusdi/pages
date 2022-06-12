require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Muhammad Rusdi",
    description: "Front End Engineer, JAMstack Enthusiast",
    author: "@muhrusdi",
    siteUrl: "https://github.com/muhrusdi/pages",
    image:
      "https://res.cloudinary.com/muhrusdi/image/upload/v1624511269/muhrusdi-cover.jpg",
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: false,
    FAST_DEV: true,
    FAST_REFRESH: true,
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/src/data/docs`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Muhammad Rusdi",
        short_name: "muhrusdi",
        description: "Front End Engineer, JAMStack Enthusiast",
        start_url: "/",
        background_color: "#000",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/mhmmr-white-transparent.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/src/data/blogs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cheatsheets",
        path: `${__dirname}/src/data/cheatsheets`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
