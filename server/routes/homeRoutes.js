const express = require('express');
const router = express.Router();

const {
    getHome,
    addHome,
    updateHome,
    deleteHome
} = require('../controllers/homeController');

router.route('/').get(getHome).post(addHome);
router.route('/:id').put(updateHome).delete(deleteHome);

module.exports = router;