export default {
  Query: {
    users: async (parent, args, context, info) => {
      return context.db
        .collection('users')
        .find({})
        .toArray()
    }
  },
  User: {
    fullName: user => {
      return `${user.firstName} ${user.lastName}`
    }
  }
}
