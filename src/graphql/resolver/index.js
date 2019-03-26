import deepmerge from 'deepmerge'

import book from './book'
import user from './user'

export default deepmerge.all([book, user])
