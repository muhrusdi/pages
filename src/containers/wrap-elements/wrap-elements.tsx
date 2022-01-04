import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "../../apollo/client"
import { Layout } from "@/containers/layout"
import { getCssText } from "@/styled"
import ContextProvider from "@/contexts"

type Props = {
  element: React.ReactNode
  props: any
}

type RenderBodyProps = {
  setHeadComponents?: any
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ApolloProvider client={client}>
    <ContextProvider>{element}</ContextProvider>
  </ApolloProvider>
)

export const wrapPageElement: React.FC<Props> = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onRenderBody = ({ setHeadComponents }: RenderBodyProps): any => {
  setHeadComponents([
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ])
}
