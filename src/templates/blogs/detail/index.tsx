import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { formatDate } from "@/utils"
import { ArticleStyled } from "@/components/utils"
import { Layout } from "@/containers/layout"
import SEO from "@/components/seo"

const ImageStyled = styled(GatsbyImage)`
  height: 200px;
  @media (min-width: 640px) {
    height: 500px;
  }
`
const GatsbyImageStyled = styled(GatsbyImage)`
  img {
    margin: 0;
  }
`

export const Header: React.FC = ({title, featuredImage, date}) => (
  <header className="text-center mt-12">
    <div>
      <h1 className="text-4xl sm:text-5xl font-black leading-tight sm:leading-12">{title}</h1>
      <ul className="mt-10">
        <li>
          <span className="text-blueGray-400">{formatDate(date, "EEEE, dd MMM yyyy")}</span>
        </li>
      </ul>
      <ImageStyled className="object-cover rounded-lg mt-14 w-full" image={getImage(featuredImage)} alt=""/>
    </div>
  </header>
)


const DetailBlog: React.FC = ({pageContext}) => {
  const {data } = pageContext
  // const renderOption = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       const { gatsbyImageData } = node.data.target
  //       console.log(gatsbyImageData)
  //       if (!gatsbyImageData) {
  //         // asset is not an image
  //         return null
  //       }
  //       return <GatsbyImageStyled layout="fullWidth" image={getImage(gatsbyImageData)} alt="" />
  //     },
  //   }
  // }

  return (
    <Layout>
      <SEO title="Blog - Muhammad Rusdi" description="Here you‘ll find my collected writing on topics ranging from design and coding."/>
      <Header title={data.seoTitle} description={data.abstract} date={data.createdAt} featuredImage={data.featuredImage}/>
      <div className="sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-24">
        <ArticleStyled className="prose prose-xl contentful" dangerouslySetInnerHTML={{__html: data?.body?.childMarkdownRemark?.html}}/>
      </div>
    </Layout>
  )
}

export default DetailBlog