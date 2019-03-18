import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true })

// Use connect method to connect to the Server
client.connect(function (err) {
  if (err) {
    console.error('err', err)
  } else {
    console.log('Connected successfully to server')
  }
})

export default client
