// import db from '/config/db'

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res
    .status(200)
    .send({ message: 'YAY! Congratulations! Your first endpoint is working' })
})

app.listen(3001)
console.log('app running on port ', 30)
