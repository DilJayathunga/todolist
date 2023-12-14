const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    isComplete: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model('todos', TodoSchema)
module.exports = TodoModel