const asyncHandler = require('express-async-handler');

const Home = require('../models/homeModel');

const getHome = asyncHandler(async (req, res) => {
    const home = await Home.find();

    res.status(200).json(home);
});

const addHome = asyncHandler(async(req, res) => {
    const home = await Home.create({
        heroSection: {
            title: req.body.heroTitle,
            subtitle: req.body.heroSubtitle,
            image: req.body.heroImage
        },
        astroSection: {
            title: req.body.astroTitle,
            subtitle: req.body.astroSubtitle,
            image: req.body.astroImage
        },
        bookbinderySection: {
            title: req.body.bbTitle,
            subtitle: req.body.bbSubtitle,
            image: req.body.bbImage
        }
    });

    res.status(200).json(home);
});

const updateHome = asyncHandler(async(req, res) => {
    const home = await Home.findById(req.params.id);

    if (!home) {
        res.status(400);
        throw new Error('Home not found');
    }

    const updatedHome = await Home.findByIdAndUpdate(
        req.params.id,
        {
            heroSection: {
                title: req.body.heroTitle,
                subtitle: req.body.heroSubtitle,
                image: req.body.heroImage
            },
            astroSection: {
                title: req.body.astroTitle,
                subtitle: req.body.astroSubtitle,
                image: req.body.astroImage
            },
            bookbinderySection: {
                title: req.body.bbTitle,
                subtitle: req.body.bbSubtitle,
                image: req.body.bbImage
            }
        },
        {
            new: true
        }
    );

    res.status(200).json(updatedHome);
});

const deleteHome = asyncHandler(async(req, res) => {
    const home = await Home.findById(req.params.id);

    if (!home) {
        res.status(400);
        throw new Error('Home not found');
    }

    await goalModel.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getHome,
    addHome,
    updateHome,
    deleteHome
}