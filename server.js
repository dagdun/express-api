require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { response } = require('./middlewares/response')
const route = require('./routes/index')

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(response)
app.use('/v1.0', route)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
