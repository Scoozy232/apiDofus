const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
    name: {type: String, required: true},
    level: {type: Number, required: true},
    property: {type: String, required: false},
    donjon: {type: Array, required: false},
    difficulty: {type: Number, required: true},
    success: {type: [String], required: true},
    obtained: {type: Boolean, required: true},
    stat: {type: String, required: true},
    createDate: {type: Date, required: false},
    updateDate: {type: Date, required: false},
    active: {type: Boolean, required: false}
});

module.exports = mongoose.model('Dofus', objectSchema);
