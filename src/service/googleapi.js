const axios = require("axios");

const url = "https://maps.googleapis.com";

const path = '/maps/api/geocode/json?';
const api = axios.create({
    baseURL: url,
});

async function getGeoLocation(params){
    return axios.get(encodeURI(url+path+params+'&key=AIzaSyDbDgzohjahyjDF9ryw0Aj6LDoEmVf1fG4'))
   .then((response) => {
    const results = response.data.results;
    let data = [];
    results.forEach(address => {
        let location = {};
        location.address = address.formatted_address
        location.lat = address.geometry.location.lat;
        location.lng = address.geometry.location.lng;
        data.push(location);
    });
    return data;
   })
   .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        return false;
   })
}

module.exports = { getGeoLocation };