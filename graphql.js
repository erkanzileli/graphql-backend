import { ApolloServer, gql } from 'apollo-server'
import types from './src/graphql/type/index'
import resolvers from './src/graphql/resolver/index'
import connection from './src/config/db'

const typeDefs = gql`
  ${types}
`
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    db: connection.db('fake-db')
  })
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
