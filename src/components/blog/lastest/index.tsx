import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"

const Latest: React.FC = () => {
  return (
    <div className="md:flex -mx-4 items-center">
      <div className="w-full md:w-1/2 px-4">
        <div>
          <span className="inline-block rounded-full text-xs uppercase py-1 px-4 bg-gray-600">Latest from the blog</span>
          <h2 className="text-4xl sm:text-5xl mt-6 font-black">Lorem ipsum dolor, sit amet consectetur</h2>
          <p className="mt-8 text-lg text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
          <a href="#" className="mt-10 inline-block text-lg">
            <div className="flex items-center">
              <span>Read more</span> <BiChevronRight size={24}/>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 px-4 hidden md:block">
        <div>
          <StaticImage width={100} style={{height: 300}} layout="fullWidth" className="rounded-lg" src="https://images.unsplash.com/photo-1612831660296-0cd5841b89fb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Latest