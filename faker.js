import { MongoClient } from 'mongodb'
var faker = require('faker')

faker.locale = 'tr'

faker.seed(42)

var fakeDatas = []

for (var i = 0; i < 50; i++) {
  fakeDatas.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  })
}

const URL = `mongodb://localhost:27017`

const client = new MongoClient(URL, { useNewUrlParser: true })

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
