import React from "react"
import Layout from "containers/layout"
import { useStaticQuery, graphql } from "gatsby"
import BlogItem from "components/blog/blog-item"
import LatestBlog from "components/blog/lastest"

const Blogs: React.FC = () => {
  const data = useStaticQuery(graphql`
    fragment Blog on Mdx {
      frontmatter {
        title
        publishedOn
        seoTitle
        abstract
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
      featured: allMdx(
        limit: 1
        sort: {fields: frontmatter___publishedOn, order: DESC}
        filter: {frontmatter: {isPublished: {eq: true}, featured: {eq: true}}}
      ) {
        edges {
          node {
            ...Blog
          }
        }
      }
      allMdx(
        sort: {fields: frontmatter___publishedOn, order: DESC}
      ) {
        edges {
          node {
            ...Blog
          }
        }
      }
    }
  `)

  const [featured] = data.featured.edges
  console.log(process.env.NODE_ENV)
  return (
    <>
      <Layout>
        <div>
          <div className="py-8">
            <LatestBlog badge="Featured" data={featured.node}/>
          </div>
          <div className="mt-20">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {
                data.allMdx.edges.map(({node}, key) => {
                  return process.env.NODE_ENV !== "production" ? (
                    (
                      <li key={key}>
                        <BlogItem data={node}/>
                      </li>
                    )
                  ) : (
                    node.frontmatter.isPublished ? (
                      <li key={key}>
                        <BlogItem data={node}/>
                      </li>
                    ) : null
                  )
                })
              }
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blogs