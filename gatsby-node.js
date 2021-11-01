/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
  
const path = require("path")
const slugify = require("slugify")
const fs = require("fs-extra")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const aliases = {
  containers: path.resolve(__dirname, "src/containers"),
  components: path.resolve(__dirname, "src/components"),
  templates: path.resolve(__dirname, "src/templates"),
  images: path.resolve(__dirname, "src/images"),
  layout: path.resolve(__dirname, "src/containers/layout"),
  hooks: path.resolve(__dirname, "src/hooks"),
  types: path.resolve(__dirname, "src/types"),
  contexts: path.resolve(__dirname, "src/contexts"),
  utils: path.resolve(__dirname, "src/utils"),
}


exports.onCreateWebpackConfig = ({actions, stage, plugins}) => { //stage, getConfig, rules, loaders, actions
  actions.setWebpackConfig({
    resolve: {
      alias: aliases
    },
    // plugins: [
    //   new MonacoWebpackPlugin({
    //     languages: ["css", "typescript", "javascript", "html"],
    //     filename: "static/chunks/[name].worker.js",
    //   })
    // ]
  });

  // if (stage === "develop" || stage === "build-javascript") {
  //   actions.setWebpackConfig({
  //     plugins: [new CaseSensitivePathsPlugin()],
  //   });
  // }
}

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const mdxResults = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                publishedOn
                seoTitle
                abstract
                isPublished
                featuredImage {
                  url
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                  }
                }
              }
              fields {
                slug
              }
              body
              slug
              excerpt
            }
          }
        }
      }
      allContentfulArticle {
        edges {
          node {
            title
            createdAt
            isPublished
            seoTitle
            body {
              childMarkdownRemark {
                html
              }
            }
            abstract {
              abstract
            }
            featuredImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
      cheatsheets: allFile(filter: { sourceInstanceName: { eq: "cheatsheets" } }) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                publishedOn
                abstract
                isPublished
              }
              fields {
                slug
              }
              body
              slug
              excerpt
            }
          }
        }
      }
    }
  `)

  const createMdxPage = (node) => {
    const { slug } = node.fields
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/blogs/detail/mdx.tsx`),
      context: {
        slug,
        data: node
      },
    })
  }

  const createBlogPage = (node) => {
    const slug = slugify(node.title, {lower: true, remove: /[*+~.()'"!:@]/g})
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/blogs/detail/index.tsx`),
      context: {
        slug,
        data: node
      },
    })
  }

  const createCheatsheetPage = (node) => {
    const { slug } = node.fields
    createPage({
      path: `/cheatsheet/${slug}`,
      component: path.resolve(`./src/templates/cheatsheets/detail/index.tsx`),
      context: {
        slug,
        data: node
      },
    })
  }


  mdxResults.data.allFile.edges.forEach(({ node }) => {
    createMdxPage(node.childMdx)
  })
  
  mdxResults.data.allContentfulArticle.edges.forEach(({ node }) => {
    createBlogPage(node)
  })

  mdxResults.data.cheatsheets.edges.forEach(({ node }) => {
    createCheatsheetPage(node.childMdx)
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, printTypeDefinitions } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter @dontInfer {
      title: String!
      publishedOn: String!
      isPublished: Boolean!
      featured: Boolean!
      seoTitle: String!
      abstract: String!
      featuredImage: File @link(by: "url")
      embeddedImagesLocal: [File] @fileByRelativePath
    }
    `);

  // printTypeDefinitions({ path: "./typeDefs.txt" });
}

exports.onCreateNode = ({ node, actions, createNodeId, cache, store }) => {
  const { createNodeField, createNode  } = actions
  if (node.internal.type === `Mdx`) {
    const slug = slugify(node.frontmatter.title, {lower: true, remove: /[*+~.()'"!:@]/g})
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.featuredImage
  ) {
    try {
      return createRemoteFileNode({
        url: node.frontmatter.featuredImage,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store
      });
    } catch (error) {
      console.error(error);
    }
  }
}

// exports.onPostBuild = () => {
//   const publicDir = path.join(__dirname, "public");
//   const docsDir = path.join(__dirname, "docs");
//   // if (fs.existsSync) {
//   //   fs.rmdirSync(docsDir, {recursive: true})
//   // }
//   fs.removeSync(docsDir)
//   fs.copySync(publicDir, docsDir, { overwrite: true });
// }