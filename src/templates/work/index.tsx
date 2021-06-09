import React from "react"
import { useQuery, gql } from "@apollo/client"
// import Layout from "containers/layout"
// import { useStaticQuery, graphql } from "gatsby"
import WorkItem, { WorkItemLoading } from "components/work/work-item"
import FeaturedWork from "components/work/featured"

const Works: React.FC = () => {
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
          techsCollection {
            items {
              ... on TechIcon {
                name
              }
            }
          }
          category {
            ... on WorkCategory {
              title
            }
          }
        }
      }
      openSourceCollection {
        items {
          name
          description
          github
          preview
        }
      }
    }
  `

  const { loading, data: dataWorks } = useQuery(WORK_COLLECTION)

  return (
    <>
        <div>
          <div className="mt-8">
            <FeaturedWork/>
          </div>
          <div className="mt-32">
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
          <div className="mt-32">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Open Source Contribute</h2>
            </div>
            <ul className="grid grid-cols-1 mt-8 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {
                dataWorks?.openSourceCollection.items.map((item, i) => (
                  <li key={i}>
                    <WorkItem.Mini data={item}/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </>
  )
}

export default Works