import React from "react"
import styled from "styled-components"
import CheatsheetItem from "components/cheatsheet/item"
import { ArticleStyled } from "components/utils"
import MdxRender from "components/mdx-render"

const CheatsheetContent = styled(ArticleStyled)`
  & > pre {
    margin: 0 !important;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

export const CheatsheetMenus = ({data, slug}) => (
  <ul className="mt-6">
    {
      data?.cheatsheets.edges.map(({node}, i) => (
        <CheatsheetItem key={i} data={node.childMdx} selected={slug === node.childMdx.fields.slug}/>
      ))
    }
  </ul>
)

const CheatsheetContainer: React.FC = ({dataCheatsheets, data, slug}) => (
  <div className="sm:flex">
    <div className="w-60 flex-none hidden sm:block">
      <div>
        <input type="text" className="bg-blueGray-900 rounded-md w-full px-4 py-3" placeholder="Search" />
      </div>
      <CheatsheetMenus data={dataCheatsheets} slug={slug}/>
    </div>
    <div className="sm:pl-14 w-full" style={{width: "calc(100% - 240px)"}}>
      <div>
        <h1 className="text-4xl sm:text-5xl font-black">{data.frontmatter.title}</h1>
        <h4 className="text-xl leading-relaxed mt-6">{data.frontmatter.abstract}</h4>
      </div>
      <CheatsheetContent className="prose prose-lg mt-8">
        <MdxRender data={data}/>
      </CheatsheetContent>
    </div>
  </div>
)

export default CheatsheetContainer