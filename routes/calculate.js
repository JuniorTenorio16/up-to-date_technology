const express = require('express');
const router = express.Router();
const googleapi = require('../src/service/googleapi.js');
const calculate = require('../src/helpers/calculate');

const calculateRoute = async(req, res) => {
    const address = req.params.address;
    response = await googleapi.getGeoLocation(address);
    if(response == false) {
        res.status(501).send({
            message: 'Problema ao processar a sua requisição.'
        });
        return false;
    } else if(response.length == 1){
        res.status(400).send({
            message: 'Sintaxe invalida, necessario adicionar dois ou mais endereços nos parametros.'
        });
        return false;
    }
    result = await calculate.treeLocation(response);
    res.status(200).send({
        message: result
    });
}
router.get('/:address', calculateRoute);

module.exports = router;