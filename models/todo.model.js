const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
