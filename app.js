const express = require('express'); // framework
const helmet = require('helmet'); // Configure HTTP Headers
const bodyParser = require('body-parser'); // Parse the body in an object req.body
const mongoose = require('mongoose'); // Database
const cors = require('cors') //cors
const swaggerUI = require("swagger-ui-express"); //swagger
const swaggerJsDoc = require("swagger-jsdoc");
const compression = require('compression'); // Compression for quick server response


const app = express(); // creation de l'application grace au framework
app.use(cors())
app.use(helmet());
app.use(compression());

// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, UserID, Email');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// ID et pw à cacher dans des variables d'environnement
const dbID = process.env.DB_ID;
const dbPW = process.env.DB_PW;
const DB = 'mongodb+srv://' + dbID + ':' + dbPW + '@cluster0.y10v2kc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB'))
    .catch((err) => {
        console.log('MongoDB erreur de connexion', err)
    });

app.use(bodyParser.json());

// import des routes
const objectRoutes = require('./routes/donjon');
const userRoutes = require('./routes/user');
const dofusRoutes = require('./routes/dofus');
const questRoutes = require('./routes/quest');
const soapRoutes = require('./routes/soap');
const externalRoutes = require('./routes/external');


app.use('/api/donjon', objectRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/dofus', dofusRoutes);
app.use('/api/quest', questRoutes);
app.use('/api/soap', soapRoutes);
app.use('/api/external', externalRoutes);


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Dofus API",
        version: "1.0.0",
        description: "A simple Dofus API",
        contact: {
            name: "Florian Aubin & Emma Loisel",
            email: "prenom.nom@Ynov.com",
            url: "https://github.com/Scoozy232/apiDofus.git",
          },
      },

      servers: [
        {
            url: "http://localhost:3001/api",
            description: "Server en local",
        },
        {
            url: "https://dofus-api-ynvz.onrender.com/api",
            description: "Server deployer",
        },
      ],
    },
    apis: [`${__dirname}/routes/*.js`],
  };

  const specs = swaggerJsDoc(options);
  app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

  app.get("/healthz", (req, res) => {
    res.json({ message: "OK" });
    console.log("ok")
  });
  


// exportation pour être utilisé par d'autres fichiers
module.exports = app;


