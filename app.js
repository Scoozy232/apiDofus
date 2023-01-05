const express = require('express'); // framework
const helmet = require('helmet'); // Configure HTTP Headers
const bodyParser = require('body-parser'); // Parse the body in an object req.body
const mongoose = require('mongoose'); // Database
const cors = require('cors') //cors
const swaggerUI = require("swagger-ui-express"); //swagger
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
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('MongoDB ERROR CONNECT', err)
    });

app.use(bodyParser.json());

// import des routes
const objectRoutes = require('./routes/donjon');
const userRoutes = require('./routes/user');
const dofusRoutes = require('./routes/dofus');
const questRoutes = require('./routes/quest');
const soapRoutes = require('./routes/soap');
const docs = require('./documentation');

app.use('/api/donjon', objectRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/dofus', dofusRoutes);
app.use('/api/quest', questRoutes);
app.use('/api/soap', soapRoutes);


app.use('/api/api-docs',swaggerUI.serve,swaggerUI.setup(docs));



// exportation pour être utilisé par d'autres fichiers
module.exports = app;


// navigator.storage et/ou window.sessionStorage et/ou window.localStorage et/ou cookies
