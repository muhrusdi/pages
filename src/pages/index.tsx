import React from "react"
import Layout from "containers/layout"
import { useStaticQuery, graphql } from "gatsby"
import LatestBlog from "components/blog/lastest"
import BlogItem from "components/blog/blog-item"
import WorkItem from "components/work/work-item"
import Newsletter from "components/newsletter"

const Home: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 3
        sort: {fields: frontmatter___publishedOn, order: DESC}
        filter: {frontmatter: {isPublished: {eq: true}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              publishedOn
              seoTitle
              abstract
              featuredImage
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
  `)

  const [firstBlog, ...blogRest] = data.allMdx.edges

  return (
    <Layout>
      <div>
        <div className="py-8">
          <LatestBlog data={firstBlog.node}/>
        </div>
        <div className="py-14 sm:py-20">
          <div className="text-center mb-4 max-w-2xl container">
            <span className="uppercase font-bold text-indigo-500">Blogs</span>
            <h4 className="font-black mt-2 text-3xl">Our Articles</h4>
          </div>
          <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
              blogRest.map(({node}, key) => (
                <li key={key}>
                  <BlogItem data={node}/>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="py-20">
          <div className="text-center mb-4">
            <span className="uppercase font-bold text-indigo-500">Works</span>
            <h4 className="font-black mt-2 text-3xl">Our Projects</h4>
          </div>
          <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <li>
              <WorkItem/>
            </li>
            <li>
              <WorkItem/>
            </li>
            <li>
              <WorkItem/>
            </li>
          </ul>
        </div>
        <Newsletter/>
      </div>
    </Layout>
  )
}

export default Home