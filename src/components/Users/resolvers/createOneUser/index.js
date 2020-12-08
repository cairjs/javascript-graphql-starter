import resolver from '@cairjs/core/lib/resolvers/resolver'

export default resolver({
  name: 'createOneUser',
  type: 'User',
  mutation: true,
  crud: true
})
