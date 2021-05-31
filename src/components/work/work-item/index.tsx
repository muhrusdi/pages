import React from "react"
import { Link } from "@reach/router"
// import { StaticImage } from "gatsby-plugin-image"
import { Root, Trigger } from "@radix-ui/react-tooltip"
import { BiChevronRight } from "react-icons/bi"
import { BlogItemFooter } from "components/utils"
import { SiGatsby, SiNextDotJs, SiReact, SiStyledComponents, SiTailwindcss, SiTypescript } from "react-icons/si"
import { TechIcon, TooltipContentStyled, TooltipArrowStyled } from "./styled"

const TooltipIcon = ({icon, text}) => (
  <Root>
    <Trigger>
      {icon}
    </Trigger>
    <TooltipContentStyled side="top" className="bg-gray-900 text-xs py-1 px-2 rounded-md">
      {text}
      <TooltipArrowStyled/>
    </TooltipContentStyled>
  </Root>
)

const WorkItem: React.FC = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <img style={{height: 200}} className="rounded-lg w-full" src={data.featuredImage.url} alt=""/>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-xl mt-6 font-bold">{data.title}</h2>
          <BlogItemFooter className="flex flex-row-reverse justify-between mt-6">
            <Link to={`/work/${data.sys.id}`} className="inline-block transition-all">
              <div className="flex items-center">
                <span>Show</span> <BiChevronRight size={24}/>
              </div>
            </Link>
            <TechIcon className="flex transition-all items-center">
              <div>
                <TooltipIcon
                  icon={<SiTypescript/>}
                  text="Typescript"
                />
              </div>
              <div>
                <TooltipIcon
                  icon={<SiReact/>}
                  text="React"
                />
              </div>
              <div>
                <TooltipIcon
                  icon={<SiNextDotJs/>}
                  text="Nextjs"
                />
              </div>
              <div>
                <TooltipIcon
                  icon={<SiGatsby/>}
                  text="Gatsbyjs"
                />
              </div>
              <div>
                <TooltipIcon
                  icon={<SiTailwindcss/>}
                  text="Tailwindcss"
                />
              </div>
              <div>
                <TooltipIcon
                  icon={<SiStyledComponents/>}
                  text="Styled Components"
                />
              </div>
            </TechIcon>
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