const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    }
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model('user', userSchema, 'user')