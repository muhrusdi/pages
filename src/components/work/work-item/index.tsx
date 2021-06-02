import React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { BlogItemFooter, TooltipIcon } from "components/utils"
// import { SiGatsby, SiNextDotJs, SiReact, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TechIcon } from "./styled"
import techIcons from "components/utils/tech-icons"

const WorkItem: React.FC = ({data}) => {
  // const icons = ["Typescript", "React", "Tailwindcss"]
  return (
    <div>
      <div>
        <div>
          <img style={{height: 200}} className="rounded-lg w-full" src={data.featuredImage.url} alt=""/>
        </div>
      </div>
      <div>
        <div>
          <Link to={`/work/${data.sys.id}`} className="block transition-all">
            <h2 className="text-xl mt-6 font-bold">{data.title}</h2>
          </Link>
          <BlogItemFooter className="flex mt-4">
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
            <div className="py-1 px-2 border rounded-md text-xs uppercase text-blueGray-400 font-medium border-blueGray-500">
              <span>{data.category.title}</span>
            </div>
          </BlogItemFooter>
        </div>
      </div>
    </div>
  )
}

export default WorkItem

export const WorkItemLoading: React.FC = () => (
  <div className="bg-blueGray-900 rounded-lg" style={{height: 200}}></div>
)