const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const externalCtrl = require('../controllers/external');

router.get('/stuffDoCrit', [logger], externalCtrl.getStuffFullCrit);

module.exports = router;
