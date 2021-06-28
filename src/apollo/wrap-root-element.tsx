import React from "react"
import { ApolloProvider } from "@apollo/client"
import ContextProvider from "contexts"
import {client} from "./client"
import Layout from "containers/layout"

type Props = {
  element: React.ReactNode
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
 <ApolloProvider client={client}>
   <ContextProvider>
    <Layout>
      {element}
    </Layout>
   </ContextProvider>
 </ApolloProvider>
)