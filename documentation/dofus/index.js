const getDofus = require('./get-dofus');
const getAllDofus = require('./getAll-dofus');
const createDofus = require('./create-dofus');
const updateDofus = require('./update-dofus');
const deleteDofus = require('./delete-dofus');

module.exports = {
    paths:{
        '/dofus':{
            ...getAllDofus,
            ...createDofus
        },
        '/dofus/{id}':{
            ...getDofus,
            ...updateDofus,
            ...deleteDofus
        }
    }
}