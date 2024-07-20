const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();

const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use('/api/home', require('./routes/homeRoutes'));

app.use('/api/astro', require('/routes/astroRoutes'));

app.use('/api/bookbindery',require('./routes/bookRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})

