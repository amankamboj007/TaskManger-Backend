const bcrypt = require('bcrypt')
const config = require('../config/config')

const generatePassword = (password) => {
    return bcrypt.hash(password, parseInt(config.bcrypt.salt))

}

const comparePassword = (password,hash)=>{
    return bcrypt.compare(password,hash)
}

module.exports = {
    generatePassword,
    comparePassword
}