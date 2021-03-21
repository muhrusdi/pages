// import {PrismicLink} from "apollo-link-prismic"
import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client"

const httpLink = new HttpLink({
  uri: "https://countries.trevorblades.com/",
});

const link = from([httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});