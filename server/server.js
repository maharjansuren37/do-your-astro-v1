const path = require('path');
const express = require('express');

const dotenv = require('dotenv').config();
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send({message: "Hello from the server"});
})

app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})

