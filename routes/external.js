const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const externalCtrl = require('../controllers/external');

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       properties:
 *         ankamaId:
 *           type: integer
 *           description: L'id de l équipement
 *         name:
 *           type: string
 *           description: Nom de l équipement
 *         level:
 *           type: integer
 *           description: Le niveau de l'équipement
 *         type:
 *           type: string
 *           description: Type d'équipement
 *         imgUrl:
 *           type: string
 *           description: Image de l'équipement
 *         url:
 *           type: string
 *           description: Lien vers l'équipement
 *         description:
 *           type: string
 *           description: Description de l'équipement
 *         statistics:
 *           type: array
 *           description: Statistiques de l'équipement
 *         characteristics:
 *           type: array
 *           description: caractéristiques de l'équipement
 *         recipe:
 *           type: array
 *           description: Ingrédients pour fabriquer l'équipement
 *         setId:
 *           type: integer
 *           description: Panoplie de l'item
 *       example:
 *         ankamaId: 21229
 *         name: Baguette de Torkélonia
 *         level: 200
 *         type: Baguette
 *         imgUrl: https://s.ankama.com/www…/game/items/200/4137.png
 *         url: https://www.dofus.com/fr…1229-baguette-torkelonia
 *         description: À force d'être menés à l…l'intention qui compte.
 *         statistics: [{vitalité : [{min: 301},{max: 350}]}, {force : [{min: 41},{max: 60}]}]
 *         characteristics: [{PA : "6 (1 utilisation par tour)"}, {Portée : "3 à 6"}, {CC : "1/10 (+10)"}]
 *         recipe: [{ Scorie d'Obsidiantre: [{ankamaId: 11333},{url: https://www.dofus-touch.com/fr/mmorpg/encyclopedie/ressources/11333-scorie-obsidiantre},{imgUrl: https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/52/51492.w48h48.png},{type: Pierre brute},{level: 185},{quantity: 8}]}]
 *         setId: 472
 */
/**
 * @swagger
 *  tags:
 *    name: Equipment
 *    description: Operations CRUD Dofus
 */

/**
 * @swagger
 * /external/stuffDoCrit:
 *   get:
 *     summary: Retourne tous les equipements
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: La liste de tous les equipements
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 */
router.get('/stuffDoCrit', [logger], externalCtrl.getStuffFullCrit);

module.exports = router;
