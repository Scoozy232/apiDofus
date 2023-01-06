const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const questCtrl = require('../controllers/quest');


/**
 * @swagger
 * components:
 *   schemas:
 *     Quest:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: L'id d'une quête
 *         nom:
 *           type: string
 *           description: Nom de la quête
 *         niveau:
 *           type: integer
 *           description: Le niveau necessaire pour faire la quête
 *         prerequis:
 *           type: array
 *           description: Prérequis pour faire la quête
 *         NombrePersonne:
 *           type: string
 *           description: Nombre de personne conseiller pour faire la quête
 *         createDate:
 *           type: string
 *           format: date
 *           description: Date de création du Quest
 *         updateDate:
 *           type: string
 *           format: date
 *           description: Date de modification du Quest
 *         isActive:
 *           type: boolean
 *           description: Quest est actif ou pas
 *       example:
 *         id: 1
 *         nom: La danse de la dissonance
 *         niveau: 200
 *         prerequis: [{idQuete : "46"}, {idQuete : "52"}]
 *         NombrePersonne: 2
 *         createDate: 2020-03-10T04:05:06.157Z
 *         updateDate: null
 *         isActive: true
 */
/**
 * @swagger
 *  tags:
 *    name: Quest
 *    description: Operations CRUD Quest
 */

/**
 * @swagger
 * /Quest:
 *   get:
 *     summary: Retourne tous les Quests
 *     tags: [Quest]
 *     responses:
 *       200:
 *         description: La liste de tous les Quests
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Quest'
 */
router.get('/', [auth, logger], questCtrl.getObjectList);


/**
 * @swagger
 * /Quest/{id}:
 *   get:
 *     summary: retourne un Quest par son id
 *     tags: [Quest]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id du Quest
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Affiche le Quest en fonction de son id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 *       400:
 *         description: Le Quest n'a pas été trouvé
 */
router.get('/:id', [logger, auth], questCtrl.getObject);

module.exports = router;
