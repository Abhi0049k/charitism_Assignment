const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send({msg: 'Welcome to Charitism Assignment'});
})

app.listen(PORT, ()=>{
    console.log(`App is running at Port: ${PORT}`)
})