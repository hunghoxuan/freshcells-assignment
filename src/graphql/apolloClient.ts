import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GRAPHQL_SERVER } from '../config/constants'

const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache(),
})

export default apolloClient
