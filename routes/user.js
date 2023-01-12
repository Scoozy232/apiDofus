const express = require('express');
const router = express.Router(); // router intégré au framework

// import des middlewares qui seront appelés avant la méthode finale
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// import des controllers
// ils contiennent les méthodes vers lesquelles doivent pointer les requêtes
const userCtrl = require('../controllers/user');


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: L'id de l'utilisateur
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur crypter
 *         name:
 *           type: string
 *           description: Nom / pseudo de l'utilisateur
 *         dofusAcquired:
 *           type: array
 *           description: Liste des dofus acquis par l'utilisateur
 *         donjonsDone:
 *           type: array
 *           description: Liste des donjons réamiser par l'utilisateur
 *         roles:
 *           type: array
 *           description: Liste des rôles de l'utilisateur
 *         createDate:
 *           type: string
 *           format: date
 *           description: Date de création du User
 *         updateDate:
 *           type: string
 *           format: date
 *           description: Date de modification du User
 *         isActive:
 *           type: boolean
 *           description: User est actif ou pas
 *       example:
 *         id: 1
 *         email: emma.loisel@ynov.com
 *         password: kjsdqhiuhqezfio8367¨£EF.89FE
 *         name: Emma
 *         dofusAcquired: [{idDofus : "1"}, {idDofus : "2"}]
 *         donjonsDone: [{idDonjon : "1"}]
 *         roles: [{role : "Admin"}, {role: "joueur"}]
 *         createDate: 2020-03-10T04:05:06.157Z
 *         updateDate: null
 *         isActive: true
 *     UserSignup:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur crypter
 *         name:
 *           type: string
 *           description: Nom / pseudo de l'utilisateur
 *       example:
 *         email: florian.aubin@ynov.com
 *         password: kjsdqhiuhqezfio8367¨£EF.89FE
 *         name: Flo
 *     UserSignin:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur crypter
 *       example:
 *         email: florian.aubin@ynov.com
 *         password: kjsdqhiuhqezfio8367¨£EF.89FE
 *     UserAuth:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: Token pour l'authentification
 *         User:
 *           type: array
 *           description: utilisateur retourné
 *       example:
 *         token: iojifnemoij.qspnviuzer.eqofispn
 *         User: [{id: 1}, {email: emma.loisel@ynov.com}, {password: kjsdqhiuhqezfio8367¨£EF.89FE}, {name: Emma}, {dofusAcquired: [{idDofus : "1"}, {idDofus : "2"}]}, {donjonsDone: [{idDonjon : "1"}]}, {roles: [{role : "Admin"}, {role: "joueur"}]}, {createDate: 2020-03-10T04:05:06.157Z}, {updateDate: null}, {isActive: true}]
 *     UserDofus:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de l'utilisateur
 *         dofusAcquired:
 *           type: array
 *           description: Liste des dofus de l'utilisateur
 *       example:
 *         id: 1
 *         dofusAcquired: [{idDofus : "2"},{idDofus : "2"},{idDofus : "3"}]
 *     UserDonjon:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Id de l'utilisateur
 *         donjonsDone:
 *           type: array
 *           description: Liste des donjons de l'utilisateur
 *       example:
 *         id: 1
 *         donjonsDone: [{idDonjon : "1"}, {idDonjon : "32"}]
 */
/**
 * @swagger
 *  tags:
 *    name: User
 *    description: Operations CRUD User
 */

/**
 * @swagger
 * /auth:
 *   get:
 *     summary: Retourne tous les Users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: La liste de tous les Users
 *         content:
 *           application/json:
 *             schema:
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', [auth, logger], userCtrl.getUserList);

router.get('/isConnected', [auth, logger], userCtrl.isConnected);

/**
 * @swagger
 * /auth/{id}:
 *   get:
 *     summary: retourne un User par son id
 *     tags: [User]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id du User
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Affiche le User en fonction de son id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: L'utilisateur n'a pas été trouvé
 */
router.get('/:id', [auth, logger], userCtrl.getUser);


/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Création d'un compte utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       200:
 *         description: L'utilisateur a bien été créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.post('/signup', [logger], userCtrl.createUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion de l'utilisateur
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignin'
 *     responses:
 *       200:
 *         description: L'utilisateur est bien connecté
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuth'
 *       500:
 *         description: Some server error
 */
router.post('/login', [logger], userCtrl.login);

/**
 * @swagger
 * /auth/{id}:
 *   put:
 *     summary: Modification de l'utilisateur par l'id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         decsription: L'utilisateur à bien été modifié
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: L'utilisateur n'a pas été trouvé.
 *       500:
 *         description: Some errors happend.
 *
 */
router.put('/:id', [auth, logger], userCtrl.updateUser);

/**
 * @swagger
 * /auth/dofus/{id}:
 *   put:
 *     summary: Modification des dofus d'un utilisateur
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDofus'
 *     responses:
 *       200:
 *         decsription: Les dofus de l'utilisateur on bien été modifier
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: L'utilisateur n'a pas été trouvé
 *       500:
 *         description: Some errors happend.
 *
 */
router.put('/dofus/:id', [auth, logger], userCtrl.addDofusToUser);

/**
 * @swagger
 * /auth/donjon/{id}:
 *   put:
 *     summary: Modification des donjons d'un utilisateur
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserDonjon'
 *     responses:
 *       200:
 *         decsription: Les donjons de l'utilisateur on bien été modifier
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: L'utilisateur n'a pas été trouvé
 *       500:
 *         description: Some errors happend.
 *
 */
router.put('/donjon/:id', [auth, logger], userCtrl.addDonjonToUser);

/**
 * @swagger
 *  /auth/{id}:
 *    delete:
 *      summary: Suppression d'un utilisateur
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: id de l'utilisateur
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: L'utilisateur à bien été supprimé
 *        404:
 *          description: L'utilisateur n'a pas été trouvé
 *
 */
router.delete('/:id', [auth, logger], userCtrl.deleteUser);

module.exports = router;
