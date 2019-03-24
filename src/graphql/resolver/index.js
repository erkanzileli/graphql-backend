import deepmerge from 'deepmerge'

import book from './book'
import author from './author'

export default deepmerge.all([author, book])
