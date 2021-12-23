const mongoose = require('mongoose')
const config = require('../config/config')


const connectMongo = mongoose.connect(config.mongo_url)




module.exports = {
    connectMongo
}