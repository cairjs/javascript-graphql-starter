import Model from '@cairjs/core/lib/Model'
import resolvers from './resolvers'
import schema from './schema'

export default Model({
  name: 'User',
  schema,
  resolvers
})
