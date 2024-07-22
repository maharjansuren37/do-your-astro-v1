const express = require('express');
const router = express.Router();

const {
    getAstro,
    createAstro,
    updateAstro,
    deleteAstro
} = require('../controllers/astroController');

router.route('/').get(getAstro).post(createAstro);
router.route('/:id').put(updateAstro).post(deleteAstro);

module.exports = router;