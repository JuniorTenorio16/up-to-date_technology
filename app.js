const express = require('express');
const app = express();
const routeCalculate = require('./routes/calculate');

app.use('/calculate', routeCalculate);

module.exports = app;