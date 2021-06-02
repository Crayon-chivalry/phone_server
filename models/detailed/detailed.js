const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/phonedb', {useNewUrlParser:true,useUnifiedTopology:true })

const Schema = mongoose.Schema

const detailedSchema = new Schema({
    iid: {
      type: String,
      required: true,
    },
    title: {
    type: String,
    required: true,
  },
    price: {
      type: Number,
      required: true,
    },
    swiper: {
      type: Array,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    sales: {
      type: Number,
      required: true,
    },
    collections: {
      type: Number,
      required: true,
    },
    service: {
      type: Array,
      required: true,
    },
    comments_number: {
      type: Number,
      required: true,
    },
    comments_rate: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    commentsText: {
      type: String,
      required: true,
    },
    detailsImg: {
      type: Array,
      required: true,
    }
})

module.exports = mongoose.model('detailed', detailedSchema)

// let hot = new Detailed({
//   iid: "meizu17p",
//   title: "魅族17 Pro 12GB+256GB 定白 骁龙865 旗舰5G手机 27W无线充 6400W后置主摄 90Hz屏幕 支持NFC 智能游戏手机",
//   price: 3699,
//   swiper: [
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/swiper/swiper1.jpg",
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/swiper/swiper2.jpg",
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/swiper/swiper3.jpg"
//   ],
//   icon: "http://127.0.0.1:3000/public/img/phone_icon/meizu.svg",
//   sales: 68945,
//   collections: 25141,
//   service: ["99元免基础运费","预约送货","7天无理由退货"],
//   comments_number: 19547,
//   comments_rate: "97%",
//   userName: "花园宝宝",
//   commentsText: "这款手机上市以来一直都在关注，特别喜欢魅族这一次的设计。",
//   detailsImg: [
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/details/details1.jpg",
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/details/details2.jpg",
//     "http://127.0.0.1:3000/public/img/goods/meizu/meizu17p/details/details3.jpg"
//   ]
// })
//
// hot.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败')
//     console.log(err)
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })
// Goods.find(function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })