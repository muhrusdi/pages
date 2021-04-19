import React from "react"
import Layout from "containers/layout"
import { Link } from "gatsby"
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
          <div className="mt-0 sm:mt-14 py-0 sm:py-20">
            <div className="uppercase flex justify-between items-center mb-4">
              <div>
                <span className="font-bold">Blog</span>
              </div>
              <div>
                <Link to="/blogs" className="text-xs text-indigo-500 transition-all hover:text-indigo-700">View All</Link>
              </div>
            </div>
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