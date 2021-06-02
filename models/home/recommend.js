const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/phonedb', {useNewUrlParser:true,useUnifiedTopology:true })

const Schema = mongoose.Schema

const recommendSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('recommend',recommendSchema)