import express from 'express'
import server from './src/server'

const PORT = process.env.PORT || 4000

const app = express()

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: PORT }, () => {
  console.log(
    `🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
})
