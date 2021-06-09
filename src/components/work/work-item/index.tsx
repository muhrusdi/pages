import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { BlogItemFooter, TooltipIcon } from "components/utils"
// import { SiGatsby, SiNextDotJs, SiReact, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TechIcon } from "./styled"
import techIcons from "components/utils/tech-icons"
import { SiGithub } from "react-icons/si"
import { FiArrowRight } from "react-icons/fi"

const WorkItem: React.FC = ({data}) => {
  // const icons = ["Typescript", "React", "Tailwindcss"]
  return (
    <div>
      <div>
        <div>
          <img style={{height: 200}} className="rounded-lg w-full object-cover" src={data.featuredImage.url} alt=""/>
        </div>
      </div>
      <div>
        <div>
          <Link to={`/work/${data.sys.id}`} className="transition-all mt-4 inline-block hover:text-indigo-500">
            <h2 className="text-xl font-bold">{data.title}</h2>
          </Link>
          <BlogItemFooter className="flex mt-2">
            <TechIcon className="flex transition-all items-center pr-4">
              {
                data.techsCollection.items.map((item, i) => (
                  <div key={i}>
                    <TooltipIcon
                      icon={techIcons[item.name].icon}
                      text={techIcons[item.name].name}
                    />
                  </div>
                ))
              }
            </TechIcon>
            {
              data.category?.title ? (
                <div className="py-1 px-2 border rounded-md text-xs uppercase text-blueGray-400 font-medium border-blueGray-500">
                  <span>{data.category?.title}</span>
                </div>
              ) : null
            }
          </BlogItemFooter>
        </div>
      </div>
    </div>
  )
}

const WorkItemMini = ({data}) => (
  <div className="border border-blueGray-700 rounded-lg">
    <div className="p-3 pb-0">
      <h4>{data.name}</h4>
      <p className="text-sm text-blueGray-400 mt-1 line-clamp-2">{data.description}</p>
    </div>
    <ul className="flex py-2 pb-3 px-3 -mx-1 mt-1 items-center justify-between">
      <li className="px-1">
        <a href={data.github} target="_blank" rel="noreferrer" className="uppercase text-xs text-blueGray-400 hover:text-indigo-500 transition-all">
          <SiGithub size={16}/>
        </a>
      </li>
      <li className="px-1">
        {
          data.preview ? (
            <a href={data.preview} target="_blank" rel="noreferrer" className="block uppercase text-xs text-indigo-500">
              <button>
                <FiArrowRight/>
              </button>
            </a>
          ) : (
            <button className="uppercase text-xs text-blueGray-400 cursor-default">
              <FiArrowRight/>
            </button>
          )
        }
      </li>
    </ul>
  </div>
)

WorkItem.Mini = WorkItemMini

export default WorkItem

export const WorkItemLoading: React.FC = () => (
  <div className="bg-blueGray-900 rounded-lg" style={{height: 200}}></div>
)