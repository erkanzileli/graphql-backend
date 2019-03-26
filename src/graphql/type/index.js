import { mergeTypes } from 'merge-graphql-schemas'

import book from './book'
import user from './user'

const typeDefs = [book, user]

export default mergeTypes(typeDefs, { all: true })
