import React from "react"
import { useQuery, gql } from "@apollo/client"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { TooltipIcon } from "components/utils/"
import techIcons from "components/utils/tech-icons"
import { Grid, IconList, ImageStyled, Articles } from "./styled"

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
        screenshotCollection {
          items {
            url
            title
            description
          }
        }
      }
    }
  `

  const { data, loading } = useQuery(WORK_COLLECTION, {
    variables: { id: props.slug}
  })

  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-3">
        <div className="col-span-3">
          {
            loading ? (
              <ImageStyled as="div" className="bg-blueGray-900 w-full rounded-lg"/>
            ) : <ImageStyled className="object-cover object-top w-full rounded-lg" src={data?.work.featuredImage.url} alt={data?.work.title} />
          }
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
          {
            data?.work.link ? (
              <div className="mt-4">
                <a href={data?.work.link} target="_blank" rel="noreferrer" className="bg-indigo-600 text-white text-center block py-3 uppercase font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all px-4">Visit</a>
              </div>
            ) : (
              <div className="mt-4">
                <button disabled className="bg-gray-300 disabled cursor-default text-gray-500 text-center w-full py-3 uppercase font-semibold text-sm rounded-lg px-4">Visit</button>
              </div>
            )
          }
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div>
            <h1 className="font-bold text-3xl">{data?.work.title}</h1>
            <p className="text-blueGray-400 text-xl mt-4 leading-relaxed">{data?.work.description}</p>
          </div>
          <Articles className="mt-10 prose-lg">
            {documentToReactComponents(data?.work.content.json)}
          </Articles>
          {
            data?.work.screenshotCollection.items.length ? (
              <div className="mt-14">
                <h4 className="text-xl font-bold">Screenshot</h4>
                <Grid className="grid grid-cols-2 sm:grid-cols-3 mt-6 gap-6">
                  {
                    data?.work.screenshotCollection.items.map((item, i) => (
                      <a href={item.url} rel="noreferrer" target="_blank" key={i} className="block bg-blueGray-900">
                        <img className="w-full object-cover h-full" src={item.url} alt={item.title}/>
                      </a>
                    ))
                  }
                </Grid>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default Detail