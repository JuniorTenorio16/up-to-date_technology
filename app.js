const express = require('express');
const app = express();
const routeCalculate = require('./routes/calculate');

app.use('/calculate', routeCalculate);

app.use('/', (req, res) => {
    res.status(200).send({
        message: 'Bem-vindo a API que faz o calculo euclidiano entre dois pontos, por favor use o link conforme o exemplo no README.md do projeto'
    });
});

module.exports = app;