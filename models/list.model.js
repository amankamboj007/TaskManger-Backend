const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    }
})
module.exports = mongoose.model('list', listSchema, 'list')