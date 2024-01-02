const Todo = require("../models/todo.model");
const todoValidation = require("../validations/todo.validation");

const getTodos = async (req, res, next) => {
    try {
        const { email } = req.body;
        const todos = await Todo.find({ email });
        res.status(200).send(todos);
    } catch (err) {
        next({ msg: err.message, status: 401 });
    }
}

const createTodo = async (req, res, next) => {
    let { email, title, description } = req.body;
    try {
        description = description || '';
        const check = todoValidation.safeParse({ title, description });
        if (!check.success) return next({ status: 422, msg: 'Invalid Input' });
        const newTodo = new Todo({ title, description, email });
        await newTodo.save();
        res.status(201).send({ msg: 'New Todo Added' });
    } catch (err) {
        console.log(err);
        next({ msg: err.message });
    }
}

const updateTodo = async (req, res, next) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
        const todo = await Todo.findOne({ _id: id, email });
        if (!todo) return next({ msg: 'You are not Authorized', status: 403 });
        await Todo.findOneAndUpdate({ email, _id: id }, { completed: true });
        res.status(200).send({ msg: 'Todo Updated' });
    } catch (err) {
        next({ msg: err.message });
    }
}

const deleteTodo = async (req, res, next) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
        const todo = await Todo.findOne({ _id: id, email });
        if (!todo) return next({ msg: 'You are not Authorized', status: 403 });
        await Todo.findByIdAndDelete(id);
        res.status(200).send({ msg: 'Todo Deleted' });
    } catch (err) {
        next({ msg: err.message });
    }
}

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
