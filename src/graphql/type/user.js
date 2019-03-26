export default `
type User {
  firstName: String
  lastName: String
  fullName: String
  email: String
  phone: String
}

type Query {
  users: [User]
}
`
