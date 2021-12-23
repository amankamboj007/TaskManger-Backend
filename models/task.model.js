const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    listId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})
module.exports = mongoose.model('task', taskSchema, 'task')