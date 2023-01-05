const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const questCtrl = require('../controllers/quest');

// routes CRUD disponibles
router.get('/', [auth, logger], questCtrl.getObjectList);
router.get('/:id', [logger, auth], questCtrl.getObject);

module.exports = router;
