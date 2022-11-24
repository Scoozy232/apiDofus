const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
    creationDate: {type: Date, required: false},
    modificationDate: {type: Date, required: false},
    active: {type: Boolean, required: false},
    name: {type: String, required: false},
    required: {type: Array, required: false},
    peopleAdvise: {type: Number, required: false}
});

module.exports = mongoose.model('Quest', objectSchema);
