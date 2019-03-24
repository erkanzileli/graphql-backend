export default `
type Author {
  firstName: String
  lastName: String
}

type Query {
  authors: [Author]
}

type Mutation {
  createAuthor(firstName: String!, lastName: String!): Author
}
`
