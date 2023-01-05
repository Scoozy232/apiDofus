const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const dofusCtrl = require('../controllers/dofus');

// routes CRUD disponibles
router.get('/', [auth, logger], dofusCtrl.getObjectList);
router.get('/:id', [logger, auth], dofusCtrl.getObject);

module.exports = router;
