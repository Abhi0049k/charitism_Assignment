const { Router } = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controllers");

const router = Router();

// Get all the todos
router.get('/', getTodos);

// Create a new todo
router.post('/', createTodo);

// Update the todo to completed
app.patch('/:id', updateTodo);

// Delete the todo
app.delete('/:id', deleteTodo);

module.exports = router;