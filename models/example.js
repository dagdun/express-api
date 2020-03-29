const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exampleSchema = new Schema({
  name: String,
  updateTime: Date,
  createTime: Date,
})

const exampleModel = mongoose.model('example', exampleSchema)

module.exports = exampleModel
