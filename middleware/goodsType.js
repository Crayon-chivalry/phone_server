/**
 * 热门、新品、猜你喜欢
 * @type {Model<Document>}
 */

const Goods = require('../models/goods/goods')

module.exports = function(type) {
  if(type === 'hot') {
    return Goods.find({
      hot: true
    })
  }
  else if(type === 'new') {
    return Goods.find({
      new: true
    })
  }
  else if(type === 'like') {
    return Goods.find({
      like: true
    })
  } else {
    return Promise.reject('出错了,商品类型错误')
  }
}