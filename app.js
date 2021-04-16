const express = require('express');
const app = express();

const routeCalculate = require('./routes/calculate');
const routeHealth = require('./routes/health');

app.use('/calculate', routeCalculate);
app.use('/health', routeHealth);

module.exports = app;