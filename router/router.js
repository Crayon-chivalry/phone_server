const express = require('express')
const router = express.Router()
// db
const Homedb = require('../middleware/homedb')
const Detailsed = require('../models/detailed/detailed')
// 中间件
const goodsType = require('../middleware/goodsType')

// 首页轮播图、推荐、横幅数据
router.get('/', (req, res) => {
  Homedb.then(data => {
    res.status(200).json({
      swiper: data[0],
      recommend: data[1],
      banner: data[2]
    })
  }).catch(err => {
    res.status(500).json({
      err_code: 500,
      message: err
    })
  })
})

// 首页商品列表
router.get('/goods', (req, res) => {
  goodsType(req.query.type).then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(500).json({
      err_code: 500,
      message: err
    })
  })
})

// 商品详细数据
router.get('/details', (req, res) => {
  let iid = req.query.iid
  console.log(iid)
  Detailsed.find({
    iid: iid
  }).then(data => {
    res.status(200).json(data)
  }).catch(err => {
    res.status(500).json({
      err_code: 500,
      message: err
    })
  })
})

module.exports = router