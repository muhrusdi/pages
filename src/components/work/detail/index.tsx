import React from "react"
import { useQuery, gql } from "@apollo/client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import { TooltipIcon } from "components/utils/"
import techIcons from "components/utils/tech-icons"

const IconList = styled.ul({
  svg: {
    height: 20,
    width: 20
  }
})

const ImageStyled = styled.img`
  height: 200px;
  @media (min-width: 640px) {
    height: 400px;
  }
`

const Detail: React.FC = (props) => {
  const WORK_COLLECTION = gql`
    query GetWork($id: String!) {
      work(id: $id) {
        title
        sys {
          id
        }
        description
        featuredImage {
          url
        }
        content {
          json
        }
        techsCollection {
          items {
            ... on TechIcon {
              name
            }
          }
        }
        link
        category {
          ... on WorkCategory {
            title
          }
        }
      }
    }
  `

  const { data } = useQuery(WORK_COLLECTION, {
    variables: { id: props.slug}
  })

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-3">
        <div className="col-span-3">
          <ImageStyled className="object-cover w-full rounded-lg" src={data?.work.featuredImage.url} alt={data?.work.title} />
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div>
            <h4 className="uppercase text-sm font-bold text-blueGray-500">Tech</h4>
            <IconList className="mt-4 flex -mx-2 items-center">
              {
                data?.work.techsCollection.items.map((item, i) => (
                  <li className="px-2" key={i}>
                    <TooltipIcon
                      icon={techIcons[item.name].icon}
                      text={techIcons[item.name].name}
                    />
                  </li>
                ))
              }
              </IconList>
          </div>
          <div className="py-3 px-4 mt-6 text-center block uppercase text-sm rounded-lg text-blueGray-400 font-medium bg-blueGray-900">
            <span>{data?.work.category.title || "Loading"}</span>
          </div>
          <div className="mt-4">
            <a href={data?.work.link} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white text-center block py-3 uppercase font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all px-4">Visit</a>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div>
            <h1 className="font-bold text-3xl">{data?.work.title}</h1>
            <p className="text-blueGray-400 text-xl mt-4 leading-relaxed">{data?.work.description}</p>
          </div>
          <div className="mt-10 prose-lg">
            {documentToReactComponents(data?.work.content.json)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail