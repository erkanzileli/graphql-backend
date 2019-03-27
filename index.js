import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import types from './src/graphql/type/index'
import resolvers from './src/graphql/resolver/index'
import connection from './src/config/db'

const PORT = process.env.PORT || 4000

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
    apiKey: 'service:erkanzileli-4599:m0p1ZxPRnJ-ws8QER61mtA'
  }
})

const app = express()

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: PORT }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
})
