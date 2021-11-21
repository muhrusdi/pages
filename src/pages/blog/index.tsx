import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogItem from "@/components/blog/blog-item"
import LatestBlog from "@/components/blog/lastest"
import { Layout } from "@/containers/layout"
import { transformBlog } from "@/utils"

const Blogs: React.FC = () => {
  const data = useStaticQuery(graphql`
    fragment Blog on Mdx {
      frontmatter {
        title
        publishedOn
        seoTitle
        abstract
        isPublished
        featuredImage {
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
      internal {
        type
      }
    }

    query {
      featured: allFile(
        limit: 1
        sort: { fields: childMdx___frontmatter___publishedOn, order: DESC }
        filter: {
          childMdx: {
            frontmatter: { isPublished: { eq: true }, featured: { eq: true } }
          }
          sourceInstanceName: { eq: "blogs" }
        }
      ) {
        edges {
          node {
            childMdx {
              ...Blog
            }
          }
        }
      }
      allFile(
        sort: { fields: childMdx___frontmatter___publishedOn, order: DESC }
        filter: { sourceInstanceName: { eq: "blogs" } }
      ) {
        edges {
          node {
            childMdx {
              ...Blog
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
            abstract {
              abstract
            }
            featuredImage {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const [featured] = data.featured.edges

  const composeBlogsSort = transformBlog(data)

  return (
    <Layout>
      <div>
        <div className="py-8">
          <LatestBlog badge="Featured" data={featured?.node.childMdx} />
        </div>
        <div className="mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {composeBlogsSort.map(({ node }, key) => {
              return process.env.NODE_ENV !== "production" ? (
                <li key={key}>
                  <BlogItem data={node.childMdx || node} />
                </li>
              ) : node?.childMdx?.frontmatter?.isPublished ||
                node.isPublished ? (
                <li key={key}>
                  <BlogItem data={node.childMdx || node} />
                </li>
              ) : null
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs
