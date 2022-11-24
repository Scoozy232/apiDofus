const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
    creationDate: {type: Date, required: false},
    modificationDate: {type: Date, required: false},
    active: {type: Boolean, required: false},
    name: {type: String, required:true},
    level: {type: Number, required:true},
    success: {type: [String], required:true},
    technicalDifficulty: {type: String, required:true},
    linkedQuests: {type: Array, required:true},
    done: {type: Boolean, required:true}
});

module.exports = mongoose.model('Donjon', objectSchema);
