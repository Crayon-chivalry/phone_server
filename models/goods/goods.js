const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/phonedb', {useNewUrlParser:true,useUnifiedTopology:true })

const Schema = mongoose.Schema

const goodsSchema = new Schema({
  iid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  collections: {
    type: Number,
    required: true
  },
  goodsImg: {
    type: String,
    required: true
  },
  hot: {
    type: Boolean,
    required: true
  },
  new: {
    type: Boolean,
    required: true
  },
  like: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('goods', goodsSchema)

// const Hot = mongoose.model('goods', goodsSchema)

// let hot = new Hot({
//   iid: "meizu17p",
//   title: "魅族17 Pro 12GB+256GB 定白 骁龙865 旗舰5G手机 27W无线充 6400W后置主摄 90Hz屏幕 支持NFC 智能游戏手机",
//   price: 3699,
//   collections: 25141,
//   goodsImg: "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/swiper/swiper1.jpg",
//   hot: false,
//   new: false,
//   like: true
// })

// hot.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })
// // Goods.find(function (err, ret) {
// //   if (err) {
// //     console.log('查询失败')
// //   } else {
// //     console.log(ret)
// //   }
// // })