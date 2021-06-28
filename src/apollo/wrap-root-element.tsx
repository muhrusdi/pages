import React from "react"
import { ApolloProvider } from "@apollo/client"
// import ContextProvider from "contexts"
import {client} from "./client"

type Props = {
  element: React.ReactNode
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
 <ApolloProvider client={client}>
   {/* <ContextProvider> */}
    {element}
   {/* </ContextProvider> */}
 </ApolloProvider>
);