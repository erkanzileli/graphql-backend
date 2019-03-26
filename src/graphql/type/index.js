import { mergeTypes } from 'merge-graphql-schemas'

import authorization from './authorization'
import book from './book'
import user from './user'

const typeDefs = [authorization, book, user]

export default mergeTypes(typeDefs, { all: true })
