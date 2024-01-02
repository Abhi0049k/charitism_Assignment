const { Router } = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controllers");
const authorization = require("../middlewares/authorized.middleware");

const router = Router();

router.use(authorization);
// Get all the todos
router.get('/', getTodos);

// Create a new todo
router.post('/', createTodo);

// Update the todo to completed
router.patch('/:id', updateTodo);

// Delete the todo
router.delete('/:id', deleteTodo);

module.exports = router;