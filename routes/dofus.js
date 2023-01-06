const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const dofusCtrl = require('../controllers/dofus');

/**
 * @swagger
 * components:
 *   schemas:
 *     Dofus:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: L'id d'un dofus
 *         nom:
 *           type: string
 *           description: Nom du dofus
 *         niveau:
 *           type: integer
 *           description: Le niveau necessaire pour avoir le dofus
 *         propriete:
 *           type: string
 *           description: propriete du dofus
 *         donjon:
 *           type: array
 *           description: Donjon a faire pour avoir le dofus
 *         difficulte:
 *           type: integer
 *           description: difficulte pour avoir le dofus
 *         stat_native:
 *           type: string
 *           description: Stat du dofus
 *         succes:
 *           type: array
 *           description: Les succes du dofus
 *         createDate:
 *           type: string
 *           format: date
 *           description: Date de création du dofus
 *         updateDate:
 *           type: string
 *           format: date
 *           description: Date de modification du dofus
 *         isActive:
 *           type: boolean
 *           description: Dofus est actif ou pas
 *       example:
 *         id: 1
 *         nom: Abyssal
 *         niveau: 100
 *         propriete: ..., donne 1 PM. ...
 *         donjon: [{idDonjon : "1"}, {idDonjon : "2"}]
 *         difficulte: 9
 *         stat_native: 200 vitalité
 *         succes: [{nom : "Abyssal"}, {nom : "Plouf !"}]
 *         createDate: 2020-03-10T04:05:06.157Z
 *         updateDate: null
 *         isActive: true
 */
/**
 * @swagger
 *  tags:
 *    name: Dofus
 *    description: Operations CRUD Dofus
 */

/**
 * @swagger
 * /dofus:
 *   get:
 *     summary: Retourne tous les Dofuss
 *     tags: [Dofus]
 *     responses:
 *       200:
 *         description: La liste de tous les Dofuss
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Dofus'
 */
router.get('/', [auth, logger], dofusCtrl.getObjectList);

/**
 * @swagger
 * /dofus/{id}:
 *   get:
 *     summary: retourne un Dofus par son id
 *     tags: [Dofus]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id du Dofus
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Affiche le Dofus en fonction de son id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dofus'
 *       400:
 *         description: Le Dofus n'a pas été trouvé
 */
router.get('/:id', [logger, auth], dofusCtrl.getObject);

module.exports = router;
