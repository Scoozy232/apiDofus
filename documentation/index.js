const basicInfo = require('./basicInfo');
const servers = require('./server');
const components = require('./components');
const tags = require('./tags');
const dofus = require('./dofus');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...dofus
};