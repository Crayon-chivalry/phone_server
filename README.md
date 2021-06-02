# phone_server
# 手机商城后台接口数据

## init
```shell
npm install
```

## 恢复 mongoDB 数据到本地，（前提已安装mongoDB）
```shell
mongorestore -h <hostname><:port> -d dbname <path>
```
### 如：
```shell
mongorestore -h 127.0.0.1:27017 -d phonedb C:\Users\211\Desktop\phone_server\mongoDB\phonedb
```

## 启动服务
```shell
node app.js
```