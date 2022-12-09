const mongoose = require('mongoose');

const donjonSchema = mongoose.Schema({
    id: {type: String, required:true},
    nom: {type: String, required:true},
    niveau: {type: Number, required:true},
    succes: {type: [String], required:true},
    difficulte: {type: String, required:true},
    conseil: {type: String, required:true},
    quetes: {type: Array, required:true},
    createDate: {type: Date, required: false},
    updateDate: {type: Date, required: false},
    isActive: {type: Boolean, required: false},
    
    //done: {type: Boolean, required:true}
});

module.exports = mongoose.model('Donjon', donjonSchema);
