const res = require('express/lib/response')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateAccessToken = (data) => {
    try {
        return jwt.sign(data, config.jwt.secret, config.jwt.options)
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

const verifyAcessToken = (req, res, next) => {
    try {
        let token = req.headers.token
        if (token) {
            req.tokenData = decodeToken(token, config.jwt.secret)
            if (req.tokenData._id) {
                next()
            } else {
                res.send('unAutherized').status(401)
            }
        } else {
            res.send('unAutherized').status(401)

        }
    } catch (error) {
        res.send(error || 'ERROR').status(401)

    }
}

const decodeToken = (token, secret) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        res.send(error || 'ERROR').status(400)
    }
}

module.exports = {
    generateAccessToken,
    verifyAcessToken,
    decodeToken
}