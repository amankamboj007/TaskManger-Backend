const dotenv = require('dotenv')

dotenv.config()

const config = {
    port: process.env.PORT,
    baseUrl: '/api/v1.0',
    mongo_url: process.env.DB_URI,
    jwt: {
        secret: process.env.JWT_SECRET,
        options: { expiresIn: 86400 }
    },
    bcrypt: {
        salt: process.env.salt
    }
}

module.exports = config