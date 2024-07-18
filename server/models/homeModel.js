const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    home: {
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
    },
    astroSection: {
        
    } ,
    bookbinderySection: {

    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Home', homeSchema);