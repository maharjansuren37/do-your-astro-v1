const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc get goals
// @route GET
// @access Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json(goals);
});

const createGoals = asyncHandler(async (req, res) => {
    if (!req.body.text || !req.body.name) {
        res.status(400);
        throw new Error("Please add a text!")
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });

    res.status(200).json(goal);
    
});

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401)
        throw new Error('User not found');
    }

    // maker sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401)
        throw new Error('User not found');
    }

    // maker sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized');
    }

    // await Goal.deleteOne({ _id: req.params.id});

    await goal.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGoals,
    createGoals,
    updateGoal,
    deleteGoal
};