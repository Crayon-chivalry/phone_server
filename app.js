const express = require('express')
const path = require('path')
const cors = require('cors')
const router = require('./router/router')

const app = express()

app.use(cors())

app.use('/public', express.static(path.join(__dirname, './public')))

app.use(router)

app.listen(3000, () => {
  console.log('running...')
})