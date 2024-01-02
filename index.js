const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');
const authorization = require('./middlewares/authorized.middleware');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send({msg: 'Welcome to Charitism Assignment'});
})

app.use('/user', userRouter);

app.use('/todo', authorization, todoRouter);

app.use((err, req, res, next)=>{
    res.status(err.status || 500).send({Error: err.msg || 'Internal Server Error'})
})

app.listen(PORT, ()=>{
    console.log(`App is running at Port: ${PORT}`)
})