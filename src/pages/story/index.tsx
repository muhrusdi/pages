import React from "react"
import { useQuery, gql } from "@apollo/client"
import Layout from "containers/layout"
import { AlbumSection } from "components/utils"

const Story: React.FC = () => {
  const STORY_COLLECTION = gql`
    query GetWorkCollection {
      storyCollection {
        items {
          sys {
            id
          }
          title
          description
          galleryCollection {
            items {
              url
            }
          }
        }
      }
    }
  `

  const { loading, data } = useQuery(STORY_COLLECTION)
  return (
    <Layout>
      <div>
        {
          data?.storyCollection.items.map((item, key) => (
            <div key={key}>
              {item.title}
              <AlbumSection className="grid grid-cols-3 gap-4">
                {item.galleryCollection.items.map((childItem, childKey) => (
                  <div key={childKey} className="rounded-md overflow-hidden h-60">
                    <img className="object-cover w-full h-full" src={childItem.url}/>
                  </div>
                ))}
              </AlbumSection>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Story