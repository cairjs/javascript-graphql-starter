import CairGraphQLServer from '@cairjs/core/lib'
import resolvers from './components/resolvers'
import models from './components/models'

const port = process.env.PORT

const { server } = CairGraphQLServer({ resolvers, models })

server.listen(
  { port },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${port}`
    )
)
