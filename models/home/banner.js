const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/phonedb', {useNewUrlParser:true,useUnifiedTopology:true })

const Schema = mongoose.Schema

const bannerSchema = new Schema({
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('banner', bannerSchema)
