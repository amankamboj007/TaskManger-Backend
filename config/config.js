const dotenv = require('dotenv')

dotenv.config()

const config = {
    port: process.env.PORT,
    baseUrl: '/api/v1.0',
    mongo_url: process.env.DB_URI
}

module.exports = config