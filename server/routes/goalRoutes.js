const express = require('express');
const router = express.Router();
const { 
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
 } = require('../controllers/goalController');

 const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, createGoals);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

// router.get('/', getGoals);
// router.post('/', createGoals);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;