const asyncHandler = require('express-async-handler');

const Home = require('../models/homeModel');

const getHome = asyncHandler(async (req, res) => {
    const home = await Home.find();

    res.status(200).json(home);
});

const addHome = asyncHandler(async(req, res) => {
    const home = await Home.create({
        title: req.body.title,
    });

    res.status(200).json(home);
});

module.exports = {
    getHome,
    addHome
}