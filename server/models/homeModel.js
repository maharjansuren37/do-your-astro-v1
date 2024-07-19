const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    heroSectionTitle: {
        type: String,
    },
    heroSectionSubtitle: {
        type: String
    },
    heroSectionImage: {
        type: String
    },
    astroSectionTitle: {
        type: String
    },
    astroSectionDesc: {
        type: String
    },
    astroSectionImage: {
        type: String
    },
    bookbinderySectionTitle: {
        type: String
    },
    bookBinderySectionDesc: {
        type: String
    },
    bookBinderySectionImage: {
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Home', homeSchema);