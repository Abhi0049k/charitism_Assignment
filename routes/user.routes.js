const { Router } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userValidation = require("../validations/user.validation");
const User = require("../models/user.model");
const { register } = require("../controllers/user.controllers");
require('dotenv').config();

const router = Router();

// Registration Route
router.post('/register', register);

// Login Route
router.post('/login', login);

module.exports = router;
