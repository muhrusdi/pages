import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"
import { BlogItemFooter } from "components/utils"

const BlogItem = () => {
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
          <p className="mt-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio dolore consectetur eligendi.</p>
          <BlogItemFooter className="flex flex-row-reverse justify-between mt-6">
            <a href="#" className="inline-block transition-all">
              <div className="flex items-center">
                <span>Read more</span> <BiChevronRight size={24}/>
              </div>
            </a>
            <span className="text-gray-400 transition-all">12 Sept 2021</span>
          </BlogItemFooter>
        </div>
      </div>
    </div>
  )
}

export default BlogItem