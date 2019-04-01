const MongoClient = require('mongodb').MongoClient
const faker = require('faker')

faker.locale = 'tr'

faker.seed(42)

var fakeDatas = []

for (var i = 0; i < 950; i++) {
  fakeDatas.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  })
}

const uri =
  'mongodb+srv://api:qe1oDfp3VkyEEBw5@graphql-backend-mongo-cluster-pej2l.mongodb.net/test?retryWrites=true'

const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect(err => {
  if (err) {
    console.error('err', err)
  } else {
    client
      .db('fake-db')
      .collection('users')
      .insertMany(fakeDatas)
  }
  client.close()
})
