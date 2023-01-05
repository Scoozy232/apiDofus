const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const donjonCtrl = require('../controllers/donjon');

// routes CRUD disponibles
router.get('/', [auth, logger], donjonCtrl.getObjectList);
router.get('/:id', [logger, auth], donjonCtrl.getObject);

module.exports = router;
