import React from "react"
import Layout from "containers/layout"
// import { useStaticQuery, graphql } from "gatsby"
import WorkItem from "components/work/work-item"
import FeaturedWork from "components/work/featured"

const Works: React.FC = () => {
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
      <Layout>
        <div>
          <div className="py-8">
            <FeaturedWork/>
          </div>
          <div className="py-20">
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
        </div>
      </Layout>
    </>
  )
}

export default Works