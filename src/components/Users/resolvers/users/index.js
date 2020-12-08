import resolver from '@cairjs/core/lib/resolvers/resolver'

export default resolver({
  name: 'users',
  type: 'User',
  isList: true,
  nullable: true,
  resolve: async (_, args, { prisma }) => {
    return prisma.user.findMany({
      orderBy: [{ id: 'desc' }]
    })
  }
})
