const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    heroSection: {
        title: String,
        subtitle: String,
        image: String
    },
    astroSection: {
        title: String,
        subtitle: String,
        image: String
    },
    bookbinderySection: {
        title: String,
        subtitle: String,
        image: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Home', homeSchema);