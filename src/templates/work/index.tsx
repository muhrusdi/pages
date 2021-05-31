import React from "react"
import { useQuery, gql } from "@apollo/client"
// import Layout from "containers/layout"
// import { useStaticQuery, graphql } from "gatsby"
import WorkItem, { WorkItemLoading } from "components/work/work-item"
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

  const WORK_COLLECTION = gql`
    query GetWorkCollection {
      workCollection {
        items {
          sys {
            id
          }
          title
          description
          featuredImage {
            url
          }
        }
      }
    }
  `

  const { loading, data: dataWorks } = useQuery(WORK_COLLECTION)

  return (
    <>
        <div>
          <div className="py-8">
            <FeaturedWork/>
          </div>
          <div className="py-20">
            <ul className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {
                loading ? (
                  <>
                    <li>
                      <WorkItemLoading/>
                    </li>
                    <li>
                      <WorkItemLoading/>
                    </li>
                    <li>
                      <WorkItemLoading/>
                    </li>
                  </>
                ) : null
              }
              {
                dataWorks ? (
                  dataWorks.workCollection.items.map((data, i) => (
                    <li key={i}>
                      <WorkItem data={data}/>
                    </li>
                  ))
                ) : null
              }
            </ul>
          </div>
        </div>
    </>
  )
}

export default Works