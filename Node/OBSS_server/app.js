// 导入基本配置
const express = require('express')

// 数据验证
const joi = require('@hapi/joi')
const config = require('./config')

//导入路由
const userRouter = require('./router/user')

//创建app实例
const app = express()

/**
 * 响应数据的中间件
 * status = 0 为成功；
 * 默认 status 的值为 1
 */
app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 解析Token中间件
const expressJWT = require('express-jwt')
// 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/users\//] }))


app.use('/users', userRouter)

// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})

// 监听3333端口，并启动
app.listen(3333, function () {
    console.log('api server running at http://127.0.0.1:3333')
})