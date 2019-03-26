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
  context: ({ req }) => ({
    db: connection.db('fake-db'),
    token: req.headers.authorization || ''
  }),
  engine: {
    apiKey: 'service:erkanzileli-4599:m0p1ZxPRnJ-ws8QER61mtA',
    generateClientInfo: ({ request }) => {
      const headers = request.http & request.http.headers
      if (headers) {
        return {
          clientName: headers['apollo-client-name'],
          clientVersion: headers['apollo-client-version']
        }
      } else {
        return {
          clientName: 'Unknown Client',
          clientVersion: 'Unversioned'
        }
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
