/**
 *
 * @type {Model<Document>}
 * 处理 mongodb 不同集合的数据
 * 整合首页的轮播图、推荐、横幅
 */


const Swiper = require('../models/home/swiper')
const Recommend = require('../models/home/recommend')
const Banner = require('../models/home/banner')

const swiper = new Promise((resolve, reject) => {
  Swiper.find((err, data) => {
    if(err) return reject(err)
    resolve(data)
  })
})

const recommend = new Promise((resolve, reject) => {
  Recommend.find((err, data) => {
    if(err) return reject(err)
    resolve(data)
  })
})

const banner = new Promise((resolve, reject) => {
  Banner.find((err, data) => {
    if(err) return reject(err)
    resolve(data)
  })
})

module.exports = Promise.all([swiper, recommend, banner])