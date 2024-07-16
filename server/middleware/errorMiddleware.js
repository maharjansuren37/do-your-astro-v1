const dotenv = require('dotenv').config();

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => {
    // let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    // let message = err.message;

    // if (err.message === 'CastError' && errorHandler.kind === 'ObjectId') {
    //     statusCode = 404;
    //     message = "Resource not found";
    // }

    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });

    // res.status(statusCode).json({
    //     message,
    //     stack: process.env.NODE_ENV === 'production' ? null : err.stack
    // });
}

module.exports = { notFound, errorHandler };