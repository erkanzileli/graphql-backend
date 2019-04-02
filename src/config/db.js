import { MongoClient } from 'mongodb'

const uri =
  'mongodb+srv://api:qe1oDfp3VkyEEBw5@graphql-backend-mongo-cluster-pej2l.mongodb.net/test?retryWrites=true'

const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect(err => {
  if (err) {
    console.error('err', err)
  } else {
    console.log('Connected successfully to database server')
  }
})

export default client
