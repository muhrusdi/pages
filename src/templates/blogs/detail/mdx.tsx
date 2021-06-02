import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "containers/layout"
import { Header, ArticleStyled } from "./index"
import CodeBlock from "components/codeblock"

type Props = {
  pageContext: {
    data: any
  }
}

const shortcodes = {
  Link,
  pre: CodeBlock
}

const DetailBlogMDX: React.FC<Props> = ({pageContext}) => {
  const {data} = pageContext
  return (
    <Layout>
      <div>
        <Header title={data.frontmatter.seoTitle} description={data.frontmatter.abstract} date={data.frontmatter.publishedOn} featuredImage={data.frontmatter.featuredImage}/>
        <div className="sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-24">
          <ArticleStyled className="prose prose-xl">
            <MDXProvider components={shortcodes}>
              <MDXRenderer frontmatter={data.frontmatter}>{data.body}</MDXRenderer>
            </MDXProvider>
          </ArticleStyled>
        </div>
      </div>
    </Layout>
  )
}

export default DetailBlogMDX