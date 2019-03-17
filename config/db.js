const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'test'

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true })

// Use connect method to connect to the Server
client.connect(function (err) {
  console.log('err', err)
  // assert.strict.equal(null, err)
  console.log('Connected successfully to server')

  // const db =
  client.db(dbName)
  // console.log(db)
  client.close()
})
