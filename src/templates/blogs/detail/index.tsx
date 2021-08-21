import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { formatDate } from "utils"
import { ArticleStyled } from "components/utils"
import Layout from "containers/layout"

const ImageStyled = styled(GatsbyImage)`
  height: 200px;
  @media (min-width: 640px) {
    height: 500px;
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
  return (
    <Layout>
      <Header title={data.seoTitle} description={data.abstract} date={data.createdAt} featuredImage={data.featuredImage}/>
      <div className="sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-24">
        <ArticleStyled className="prose prose-xl">
          {renderRichText(data.body)}
        </ArticleStyled>
      </div>
    </Layout>
  )
}

export default DetailBlog