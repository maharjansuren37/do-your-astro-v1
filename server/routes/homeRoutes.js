const express = require('express');
const router = express.Router();

const {
    getHome,
    addHome
} = require('../controllers/homeController');

router.route('/').get(getHome).post(addHome);

module.exports = router;