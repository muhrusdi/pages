import React from "react"
import { ApolloProvider } from "@apollo/client"
import ContextProvider from "@/contexts"
import { client } from "./client"
import { Layout } from "@/containers/layout"

type Props = {
  element: React.ReactNode
  props: any
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <ApolloProvider client={client}>
    <ContextProvider>{element}</ContextProvider>
  </ApolloProvider>
)

export const wrapPageElement: React.FC<Props> = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
