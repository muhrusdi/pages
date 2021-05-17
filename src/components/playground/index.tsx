import React from "react"
import "@reach/tabs/styles.css"
import getTheme, { PlyStyled } from "./theme"
import Ply from "@agney/playground"


const Playground: React.FC = () => {
  const snippet = {
    markup: `<div>test</div>`,
    css: ``,
    javascript: ``,
  }
  return (
    <PlyStyled>
      <Ply
        id="playground"
        mode="dark"
        initialSnippet={snippet}
        defaultEditorTab="markup"
        transformJs
        theme={getTheme()}
      />
    </PlyStyled>
  )
}

export default Playground