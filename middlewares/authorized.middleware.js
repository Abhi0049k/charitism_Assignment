const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1] || req.headers?.authorization;
    try {
        if (!token) return res.status(404).send({ msg: 'Token Missing' });
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.email = decode.email;
        next();
    } catch (err) {
        res.status(404).send({ msg: err.message });
    }
}

module.exports = authorization;