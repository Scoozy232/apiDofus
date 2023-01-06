const express = require('express');
const router = express.Router(); // router intégré au framework

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const soapCtrl = require('../controllers/soap');

/**
 * @swagger
 * components:
 *   schemas:
 *     Dollar:
 *       type: object
 *       properties:
 *         number:
 *           type: string
 *           description: Le nombre transformer
 *       example:
 *         number: ten dollar
 */
/**
 * @swagger
 *  tags:
 *    name: Dollar
 *    description: Operations CRUD de l'api Soap
 */

/**
 * @swagger
 * /soap/{number}:
 *   get:
 *     summary: transforme un nombre en dollar
 *     tags: [Dollar]
 *     parameters:
 *       - in : path
 *         name: number
 *         description: Le nombre à transformer
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Transforme le nombre en dollar
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dollar'
 *       500:
 *         description: Some server error
 */
router.get('/:number', [], soapCtrl.getDollars);


module.exports = router;
