const asyncHandler = require('express-async-handler');

const Home = require('../models/homeModel');

const getHome = asyncHandler(async (req, res) => {
    const home = await Home.find();

    res.status(200).json(home);
});

const addHome = asyncHandler(async(req, res) => {
    const home = await Home.create({
        heroSectionTitle: req.body.heroSectionTitle
    });

    res.status(200).json(home);
});

const updateHome = asyncHandler(async(req, res) => {
    // if (!req.body.text) {
    //     res.status(400);
    //     throw new Error("Please add a text");
    // }
});

const deleteHome = asyncHandler(async(req, res) => {
    // if (!req.body.text) {
    //     res.status(400);
    //     throw new Error("Please add a text");
    // }
});

module.exports = {
    getHome,
    addHome,
    updateHome,
    deleteHome
}