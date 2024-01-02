const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connection established with mongodb');
    }catch(err){
        console.log('Something went wrong with mongodb connection');
    }
}

module.exports = connection;