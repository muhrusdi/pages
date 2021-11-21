import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { BsChevronRight } from "react-icons/bs"
import CheatsheetContainer from "@/components/cheatsheet/container"
import Layout from "@/containers/layout"

const CheatSheet: React.FC = ({pageContext}) => {
  const dataCheatsheets = useStaticQuery(graphql`
    query {
      cheatsheets: allFile(
        sort: {fields: childMdx___frontmatter___publishedOn, order: DESC}
        filter: {
          sourceInstanceName: { eq: "cheatsheets" }
        }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                abstract
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

const {data, slug} = pageContext

  return (
    <Layout>
      <div>
        <ul className="flex items-center -mx-1">
          <li className="px-1">
            <Link to="/" className="w-8 h-8 rounded-md bg-blueGray-900 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="7" width="4" height="4" rx="1.2" fill="url(#paint0_linear-710411)"/>
              <rect x="7" y="13" width="4" height="4" rx="1.2" fill="url(#paint1_linear-294494)"/>
              <rect x="13" y="7" width="4" height="4" rx="1.2" fill="url(#paint2_linear-508078)"/>
              <rect x="13" y="13" width="4" height="4" rx="1.2" fill="url(#paint3_linear-004582)"/>
              <defs>
              <linearGradient id="paint0_linear-710411" x1="6.5" y1="7" x2="11" y2="11.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399"/>
              <stop offset="1" stopColor="#059669"/>
              </linearGradient>
              <linearGradient id="paint1_linear-294494" x1="6.5" y1="13" x2="11" y2="17.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBBF24"/>
              <stop offset="1" stopColor="#D97706"/>
              </linearGradient>
              <linearGradient id="paint2_linear-508078" x1="12.5" y1="7" x2="17" y2="11.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F472B6"/>
              <stop offset="1" stopColor="#7C3AED"/>
              </linearGradient>
              <linearGradient id="paint3_linear-004582" x1="12.5" y1="13" x2="17" y2="17.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F472B6"/>
              <stop offset="1" stopColor="#7C3AED"/>
              </linearGradient>
              </defs>
              </svg>
            </Link>
          </li>
          <li className="px-1">
            <BsChevronRight size={12}/>
          </li>
          <li className="px-1">
            <Link to="/cheatsheet">Cheatsheet</Link>
          </li>
          <li className="px-1">
            <BsChevronRight size={12}/>
          </li>
          <li className="px-1">
            <span>{data.frontmatter.title}</span>
          </li>
        </ul>
        <div className="mt-6">
          <CheatsheetContainer data={data} dataCheatsheets={dataCheatsheets} slug={slug}/>
        </div>
      </div>
    </Layout>
  )
}

export default CheatSheet