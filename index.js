import express from 'express'
import connection from './src/config/db'

const PORT = 3000

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  var docs = await connection.db('myDB')
    .collection('inventory')
    .find({})
    .toArray()
  return res.status(200).send(docs)
})

app.listen(PORT)

console.log('app running on:', `http://localhost:${PORT}`)
