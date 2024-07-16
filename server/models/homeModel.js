const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [false]
    },
    subtitle: {
        type: String,
        required: [false]
    },
    img: {
        type: String,
        required: [false]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Home', homeSchema);