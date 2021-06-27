import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "../codeblock"

const MdxRender: React.FC = ({data}) => {
  const shortcodes = {
    Link,
    pre: CodeBlock
  }

  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer frontmatter={data.frontmatter}>{data.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxRender