import { mergeTypes } from 'merge-graphql-schemas'

import book from './book'
import author from './author'

const typeDefs = [author, book]

export default mergeTypes(typeDefs, { all: true })
