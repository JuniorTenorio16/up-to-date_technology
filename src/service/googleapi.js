require('dotenv').config();
const axios = require("axios");

const url = process.env.GOOGLEAPI_URL;
const path = process.env.GOOGLEAPI_GEOCODING_PATH;
const gkey = process.env.GOOGLEAPI_KEY;

async function getGeoLocation(params){
    try {
        const response = await axios.get(encodeURI(url+path+params+'&key='+gkey));
        const results = response.data.results;
        let data = [];
        results.forEach(address => {
            let location = {};
            location.address = address.formatted_address;
            location.lat = address.geometry.location.lat;
            location.lng = address.geometry.location.lng;
            data.push(location);
        });
        return data;
    } catch (err) {
        console.error("ops! ocorreu um erro" + err);
        return false;
    }
}

module.exports = { getGeoLocation };