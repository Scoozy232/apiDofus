const request = require("request");

let responseNumber = 0;

exports.getStuffFullCrit = (req, res, next) => {
    console.log('Méthode getStuffFullCrit');

    let jsonToReturn = [];

    let amulette = 'https://fr.dofus.dofapi.fr/equipments/14094';
    let bouclier = 'https://fr.dofus.dofapi.fr/equipments/18700'
    let ceinture = 'https://fr.dofus.dofapi.fr/equipments/14094'
    let bottes = 'https://fr.dofus.dofapi.fr/equipments/13643'
    let coiffe = 'https://fr.dofus.dofapi.fr/equipments/21235'
    let cac = 'https://fr.dofus.dofapi.fr/weapons/21229'
    let cape = 'https://fr.dofus.dofapi.fr/equipments/21230'
    let anneau1 = 'https://fr.dofus.dofapi.fr/equipments/13642'
    let anneau2 = 'https://fr.dofus.dofapi.fr/equipments/15190'
    let monture = 'https://fr.dofus.dofapi.fr/pets/13465'
    let slot1 = 'https://fr.dofus.dofapi.fr/equipments/739'
    let slot2 = 'https://fr.dofus.dofapi.fr/equipments/6980'
    let slot3 = 'https://fr.dofus.dofapi.fr/equipments/7754'
    let slot4 = 'https://fr.dofus.dofapi.fr/equipments/694'
    let slot5 = 'https://fr.dofus.dofapi.fr/equipments/8698'
    let slot6 = 'https://fr.dofus.dofapi.fr/equipments/7043'

    request(amulette, (error, response, body) => {


        jsonToReturn.push(JSON.parse(body));
        if (sendResponse())
            return res.json(jsonToReturn);
    });
    request(bouclier, (error, response, body) => {


        jsonToReturn.push(JSON.parse(body));
        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(ceinture, (error, response, body) => {


        jsonToReturn.push(JSON.parse(body));
        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(bottes, (error, response, body) => {


        jsonToReturn.push(JSON.parse(body));
        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(coiffe, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(cac, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(cape, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(anneau1, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(anneau2, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(monture, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot1, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot2, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot3, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot4, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot5, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });
    request(slot6, (error, response, body) => {

        jsonToReturn.push(JSON.parse(body));

        if (sendResponse())
            return res.json(jsonToReturn);

    });

}

exports.getBestItem = (req, res, next) => {
    console.log('Méthode getBestItem');

    let url = 'https://fr.dofus.dofapi.fr/equipments/7113';

    request(url, (error, response, body) => {

        return res.json(JSON.parse(body));
    });

}

function sendResponse() {

    responseNumber++;

    if (responseNumber === 16){
        responseNumber = 0;
        return true;
    }

    return false;

}
