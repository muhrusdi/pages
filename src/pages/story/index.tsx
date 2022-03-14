import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Layout } from "@/containers/layout"
import { AlbumSection } from "@/components/utils"
import { StaticImage } from "gatsby-plugin-image"

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
        <div className="grid grid-cols-4 gap-4 grid-rows-2">
          <div className="col-span-2 row-span-2 relative">
            <div className="absolute inset-0 z-20 flex justify-center items-center">
              <h2 className="text-6xl font-black">2022</h2>
            </div>
            <div className="absolute z-10 inset-0 rounded-lg bg-black opacity-60"></div>
            <StaticImage
              className="rounded-lg w-full h-full"
              placeholder="blurred"
              src="https://images.unsplash.com/photo-1647115419371-05d289639892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="rounded-lg"
              placeholder="blurred"
              src="https://images.unsplash.com/photo-1647125207824-ba16705f83fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="rounded-lg"
              placeholder="blurred"
              src="https://images.unsplash.com/photo-1647252394448-4c91ae36a3dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div>
            <StaticImage
              className="rounded-lg"
              placeholder="blurred"
              src="https://images.unsplash.com/photo-1647251532593-0e852a2f0abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
        {/* {data?.storyCollection.items.map((item, key) => (
          <div key={key}>
            {item.title}
            <AlbumSection className="grid grid-cols-3 gap-4">
              {item.galleryCollection.items.map((childItem, childKey) => (
                <div key={childKey} className="rounded-md overflow-hidden h-60">
                  <img
                    className="object-cover w-full h-full"
                    src={childItem.url}
                  />
                </div>
              ))}
            </AlbumSection>
          </div>
        ))} */}
      </div>
    </Layout>
  )
}

export default Story
