const { Router } = require("express");
const { register, login } = require("../controllers/user.controllers");
require('dotenv').config();

const router = Router();

// Registration Route
router.post('/register', register);

// Login Route
router.post('/login', login);

module.exports = router;
