/**
 * 读取 json 文件数据
 */

const fs = require('fs')

exports.reads = function(dbpath, callback) {
  fs.readFile(dbpath, (err, data) => {
    if(err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}