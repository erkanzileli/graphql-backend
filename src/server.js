import { ApolloServer, gql } from 'apollo-server-express'

import types from './graphql/type/index'
import resolvers from './graphql/resolver/index'
import connection from './config/db'

const typeDefs = gql`
  ${types}
`
export default new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    db: connection.db('fake-db'),
    token: req.headers.authorization || ''
  })
})
