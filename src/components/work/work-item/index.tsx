import React from "react"
import { StaticImage } from "gatsby-plugin-image"
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

const WorkItem: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <StaticImage width={100} style={{height: 200}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-xl mt-6 font-bold">Lorem ipsum dolor, sit amet consectetur</h2>
          <BlogItemFooter className="flex flex-row-reverse justify-between mt-6">
            <a href="#" className="inline-block transition-all">
              <div className="flex items-center">
                <span>Show</span> <BiChevronRight size={24}/>
              </div>
            </a>
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