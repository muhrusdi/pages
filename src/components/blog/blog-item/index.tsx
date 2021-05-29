import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BiChevronRight } from "react-icons/bi"
import { BlogItemFooter } from "components/utils"
import { formatDate } from "utils"

const BlogItem: React.FC = ({data}) => {
  return (
    <div>
      <div>
        <div>
          <GatsbyImage width={100} style={{height: 200}} className="rounded-lg w-full" image={getImage(data.frontmatter.featuredImage)} alt=""/>
          {/* <StaticImage width={100} style={{height: 200}} layout="fullWidth" className="rounded-lg" src={data.frontmatter.featuredImage} alt=""/> */}
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-xl mt-6 font-bold line-clamp-2">{data.frontmatter.title}</h2>
          <p className="mt-6 text-gray-400 line-clamp-2">{data.frontmatter.abstract}</p>
          <BlogItemFooter className="flex flex-row-reverse justify-between mt-6">
            <Link to={`/blog/${data.fields.slug}`} className="inline-block transition-all">
              <div className="flex items-center">
                <span>Read more</span> <BiChevronRight size={24}/>
              </div>
            </Link>
            <span className="text-gray-400 transition-all">{formatDate(data.frontmatter.publishedOn)}</span>
          </BlogItemFooter>
        </div>
      </div>
    </div>
  )
}

export default BlogItem