import React from "react";
import { ApolloProvider } from "@apollo/client";
import {client} from "./client";

type Props = {
  element: React.ReactNode
}

export const wrapRootElement: React.FC<Props> = ({ element }) => (
 <ApolloProvider client={client}>{element}</ApolloProvider>
);