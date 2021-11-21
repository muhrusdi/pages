// import {PrismicLink} from "apollo-link-prismic"
import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import fetch from "cross-fetch"

const httpLink = new HttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/gyshnlhzhaow",
  fetch
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_TOKEN}`,
    }
  }
})

const link = from([authLink, httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
