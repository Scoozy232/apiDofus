const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const donjonCtrl = require('../controllers/donjon');


/**
 * @swagger
 * components:
 *   schemas:
 *     Donjon:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: L'id d'un Donjon
 *         nom:
 *           type: string
 *           description: Nom du Donjon
 *         niveau:
 *           type: integer
 *           description: Le niveau necessaire pour faire le Donjon
 *         difficulte:
 *           type: string
 *           description: Propriete du Donjon
 *         quetes:
 *           type: array
 *           description: Quetes a faire dans le Donjon
 *         conseil:
 *           type: integer
 *           description: Conseils pour faire le Donjon
 *         succes:
 *           type: array
 *           description: Les succes du Donjon
 *         createDate:
 *           type: string
 *           format: date
 *           description: Date de création du Donjon
 *         updateDate:
 *           type: string
 *           format: date
 *           description: Date de modification du Donjon
 *         isActive:
 *           type: boolean
 *           description: Donjon est actif ou pas
 *       example:
 *         id: 1
 *         nom: Bataille de l'Aurore Pourpre
 *         niveau: 200
 *         difficulte: 10
 *         quetes: [{idQuete : "1"}, {idQuete : "2"}]
 *         conseil: Avoir du bouclier
 *         succes: [{nom : "Zombie"}, {nom : "Score 200"}]
 *         createDate: 2020-03-10T04:05:06.157Z
 *         updateDate: null
 *         isActive: true
 */
/**
 * @swagger
 *  tags:
 *    name: Donjon
 *    description: Operations CRUD Donjon
 */

/**
 * @swagger
 * /donjon:
 *   get:
 *     summary: Retourne tous les Donjons
 *     tags: [Donjon]
 *     responses:
 *       200:
 *         description: La liste de tous les Donjons
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Donjon'
 */
router.get('/', [auth, logger], donjonCtrl.getObjectList);


/**
 * @swagger
 * /donjon/{id}:
 *   get:
 *     summary: retourne un Donjon par son id
 *     tags: [Donjon]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id du Donjon
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Affiche le Donjon en fonction de son id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Donjon'
 *       400:
 *         description: Le Donjon n'a pas été trouvé
 */
router.get('/:id', [logger, auth], donjonCtrl.getObject);

module.exports = router;
