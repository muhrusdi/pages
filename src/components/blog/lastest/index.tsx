import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"

const Latest: React.FC = ({badge, data}) => {
  return (
    <div className="md:flex -mx-4 items-center">
      <div className="w-full md:w-1/2 px-4">
        <div>
          <span className="inline-block rounded-full text-xs uppercase py-1 px-4 bg-gray-600">{badge}</span>
          <h2 className="text-4xl sm:text-5xl mt-6 font-black">{data.frontmatter.seoTitle}</h2>
          <p className="mt-8 text-lg text-gray-400">{data.frontmatter.abstract}</p>
          <a href="#" className="mt-10 inline-block text-lg">
            <div className="flex items-center">
              <span>Read more</span> <BiChevronRight size={24}/>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 px-4 hidden md:block">
        <div>
          <img width={100} style={{height: 300}} className="rounded-lg w-full" src={data.frontmatter.featuredImage} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Latest

Latest.defaultProps = {
  badge: "Latest from the blog"
}