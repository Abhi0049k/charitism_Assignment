const jwt = require('jsonwebtoken');

const authorization = (req, res, next)=>{
    const token = req.headers.authorization;
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.email = decode.email;
        next();
    }catch(err){
        res.status(404).send({msg: err.message});
    }
}

module.exports = authorization;