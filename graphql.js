import { ApolloServer, gql } from 'apollo-server'
import types from './src/graphql/type/index'
import resolvers from './src/graphql/resolver/index'

const typeDefs = gql`
  ${types}
`
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
