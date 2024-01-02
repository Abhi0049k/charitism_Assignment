const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userValidation = require("../validations/user.validation");
const User = require("../models/user.model");

const register = async (req, res, next) => {
    let { email, password } = req.body;
    try {
        const check = userValidation.safeParse({ email, password });
        if (!check.success) return next({ status: 422, msg: 'Invalid Input' });
        const userExists = await User.find({ email });
        if (userExists.length > 0) return next({ status: 409, msg: 'User Already Exists' });
        password = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).send({ msg: 'Account Created' });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const check = userValidation.safeParse({ email, password });
        if (!check.success) return next({ status: 422, msg: 'Invalid Input' });
        const userDetails = await User.findOne({ email });
        if (!userDetails) return next({ status: 404, msg: "User Doesn't Exist" });
        const result = await bcrypt.compare(password, userDetails.password);
        if (!result) return next({ status: 404, msg: "User Not Found" });
        const token = jwt.sign({ email: userDetails.email }, process.env.JWT_SECRET_KEY);
        res.status(200).send({ token });
    } catch (err) {
        next(err);
    }
}

module.exports = { register, login };
