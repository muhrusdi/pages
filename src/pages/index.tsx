import React from "react"
import Layout from "containers/layout"
// import { useStaticQuery, graphql } from "gatsby"
import Nav from "components/navigation"
import LatestBlog from "components/blog/lastest"
import BlogItem from "components/blog/blog-item"

const Blogs = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMdx {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Nav/>
      <Layout>
        <div>
          <div className="py-14 mt-20">
            <LatestBlog/>
          </div>
          <div className="mt-14 py-20">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <li>
                <BlogItem/>
              </li>
              <li>
                <BlogItem/>
              </li>
              <li>
                <BlogItem/>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blogs