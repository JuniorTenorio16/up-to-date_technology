const express = require('express');
const router = express.Router();
const googleapi = require('../src/service/googleapi.js');
const calculate = require('../src/helpers/calculate');

const calculateRoute = async(req, res) => {
    const address = req.params.address;
    response = await googleapi.getGeoLocation(address.replace(' ', '+'));
    if(response == false) {
        res.status(501).send({
            mesagem: 'Problema ao processar a sua requisição.'
        });
    } else if(response.length == 1){
        res.status(400).send({
            mesagem: 'Sintaxe invalida, necessario adicionar dois ou mais endereços nos parametros.'
        });
    }
    result = await calculate.treeLocation(response);
    res.status(200).send({
        mesagem: result
    });
}
router.get('/:address', calculateRoute);

module.exports = router;