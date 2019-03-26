import { MongoClient } from 'mongodb'

const URL = `mongodb://localhost:27017`

const client = new MongoClient(URL, { useNewUrlParser: true })

client.connect(err => {
  if (err) {
    console.error('err', err)
  } else {
    console.log('Connected successfully to database server')
  }
})

export default client
