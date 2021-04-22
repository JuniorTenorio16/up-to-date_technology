const Joi = require('joi');

const location = Joi.object({
    address: Joi.string().required(),
    lat: Joi.number().required(),
    lng: Joi.number().required()
});

module.exports = location;