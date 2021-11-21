import React from "react"
import { Header } from "./index"
import { ArticleStyled } from "@/components/utils"
import SEO from "@/components/seo"
import MdxRender from "@/components/mdx-render"
import { Layout } from "@/containers/layout"

type Props = {
  pageContext: {
    data: any
  }
}

const DetailBlogMDX: React.FC<Props> = ({pageContext}) => {
  const {data} = pageContext
  return (
    <Layout>
      <div>
        <SEO title={data.frontmatter.title} description={data.frontmatter.abstract} image={data.frontmatter.featuredImage?.url}/>
        <Header title={data.frontmatter.seoTitle} description={data.frontmatter.abstract} date={data.frontmatter.publishedOn} featuredImage={data.frontmatter.featuredImage}/>
        <div className="sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-24">
          <ArticleStyled className="prose prose-xl">
            {/* <h3>{data.frontmatter.abstract}</h3> */}
            <MdxRender data={data}/>
          </ArticleStyled>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBlogMDX