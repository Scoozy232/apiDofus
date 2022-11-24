const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    creationDate: {type: Date, required: false},
    modificationDate: {type: Date, required: false},
    active: {type: Boolean, required: false},
    dofusAcquired : {type : Array, required:false},
    donjonsDone : {type : Array, required:false}
});

module.exports = mongoose.model('User', userSchema);
