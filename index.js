const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');
const connection = require('./configs/db');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to Charitism Assignment' });
})

app.use('/user', userRouter);

app.use('/todo', todoRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).send({ Error: err.msg || 'Internal Server Error' })
})

app.use('/*', (req, res) => {
    res.status(404).send({ Error: 'Route not found' });
})

app.listen(PORT, () => {
    connection();
    console.log(`App is running at Port: ${PORT}`)
})