const express = require('express');
const router = express.Router(); // router intégré au framework

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const soapCtrl = require('../controllers/soap');

// routes CRUD disponibles
router.get('/:number', [], soapCtrl.getDollars);


module.exports = router;
