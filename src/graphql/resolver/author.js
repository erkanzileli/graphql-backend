export default {
  Query: {
    authors: () => [
      {
        firstName: 'Azra',
        lastName: 'Kohen'
      }
    ]
  },
  Mutation: {
    createAuthor (parent, args, context, info) {
      const { firstName, lastName } = args
      return {
        firstName: firstName,
        lastName: lastName
      }
    }
  }
}
