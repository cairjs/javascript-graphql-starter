import * as dotenv from 'dotenv'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

dotenv.config() // Load the environment variables

const { ApolloServer } = require('apollo-server')

const port = process.env.PORT

const server = new ApolloServer({
    typeDefs,
    resolvers
  })

server.listen(
  { port: port },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${port}`
    )
)
