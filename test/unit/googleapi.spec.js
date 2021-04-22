const googleapi = require('../../src/service/googleapi');
const axios = require('axios');

jest.mock('axios');
const mockResponseGoogleAPI = {
    "data":{
        "results": [
         {
             "address_components": [
                 {
                     "long_name": "1",
                     "short_name": "1",
                     "types": [
                         "street_number"
                     ]
                 },
                 {
                     "long_name": "Avenida Rio Branco",
                     "short_name": "Av. Rio Branco",
                     "types": [
                         "route"
                     ]
                 },
                 {
                     "long_name": "Centro",
                     "short_name": "Centro",
                     "types": [
                         "political",
                         "sublocality",
                         "sublocality_level_1"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "Rio de Janeiro",
                     "types": [
                         "administrative_area_level_2",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "RJ",
                     "types": [
                         "administrative_area_level_1",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Brazil",
                     "short_name": "BR",
                     "types": [
                         "country",
                         "political"
                     ]
                 },
                 {
                     "long_name": "20090-003",
                     "short_name": "20090-003",
                     "types": [
                         "postal_code"
                     ]
                 }
             ],
             "formatted_address": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
             "geometry": {
                 "bounds": {
                     "northeast": {
                         "lat": -22.8967705,
                         "lng": -43.1797575
                     },
                     "southwest": {
                         "lat": -22.897878,
                         "lng": -43.1805343
                     }
                 },
                 "location": {
                     "lat": -22.8973551,
                     "lng": -43.1802782
                 },
                 "location_type": "ROOFTOP",
                 "viewport": {
                     "northeast": {
                         "lat": -22.8959752697085,
                         "lng": -43.1787969197085
                     },
                     "southwest": {
                         "lat": -22.8986732302915,
                         "lng": -43.1814948802915
                     }
                 }
             },
             "partial_match": true,
             "place_id": "ChIJa8BFOVp_mQARx6BKGN0xHpM",
             "types": [
                 "premise"
             ]
         },
         {
             "address_components": [
                 {
                     "long_name": "122",
                     "short_name": "122",
                     "types": [
                         "street_number"
                     ]
                 },
                 {
                     "long_name": "Praça Marechal Âncora",
                     "short_name": "Praça Mal. Âncora",
                     "types": [
                         "route"
                     ]
                 },
                 {
                     "long_name": "Centro",
                     "short_name": "Centro",
                     "types": [
                         "political",
                         "sublocality",
                         "sublocality_level_1"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "Rio de Janeiro",
                     "types": [
                         "administrative_area_level_2",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "RJ",
                     "types": [
                         "administrative_area_level_1",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Brazil",
                     "short_name": "BR",
                     "types": [
                         "country",
                         "political"
                     ]
                 },
                 {
                     "long_name": "20021-200",
                     "short_name": "20021-200",
                     "types": [
                         "postal_code"
                     ]
                 }
             ],
             "formatted_address": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
             "geometry": {
                 "location": {
                     "lat": -22.9039608,
                     "lng": -43.1703536
                 },
                 "location_type": "ROOFTOP",
                 "viewport": {
                     "northeast": {
                         "lat": -22.9026118197085,
                         "lng": -43.1690046197085
                     },
                     "southwest": {
                         "lat": -22.9053097802915,
                         "lng": -43.1717025802915
                     }
                 }
             },
             "partial_match": true,
             "place_id": "ChIJn3Nx_eOBmQARSsqe9fhWRcI",
             "plus_code": {
                 "compound_code": "3RWH+CV Centro, Rio de Janeiro - State of Rio de Janeiro, Brazil",
                 "global_code": "589R3RWH+CV"
             },
             "types": [
                 "street_address"
             ]
         },
         {
             "address_components": [
                 {
                     "long_name": "34",
                     "short_name": "34",
                     "types": [
                         "street_number"
                     ]
                 },
                 {
                     "long_name": "Rua Dezenove de Fevereiro",
                     "short_name": "R. Dezenove de Fevereiro",
                     "types": [
                         "route"
                     ]
                 },
                 {
                     "long_name": "Botafogo",
                     "short_name": "Botafogo",
                     "types": [
                         "political",
                         "sublocality",
                         "sublocality_level_1"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "Rio de Janeiro",
                     "types": [
                         "administrative_area_level_2",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Rio de Janeiro",
                     "short_name": "RJ",
                     "types": [
                         "administrative_area_level_1",
                         "political"
                     ]
                 },
                 {
                     "long_name": "Brazil",
                     "short_name": "BR",
                     "types": [
                         "country",
                         "political"
                     ]
                 },
                 {
                     "long_name": "22280-030",
                     "short_name": "22280-030",
                     "types": [
                         "postal_code"
                     ]
                 }
             ],
             "formatted_address": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
             "geometry": {
                 "location": {
                     "lat": -22.9507179,
                     "lng": -43.1876502
                 },
                 "location_type": "RANGE_INTERPOLATED",
                 "viewport": {
                     "northeast": {
                         "lat": -22.9493689197085,
                         "lng": -43.1863012197085
                     },
                     "southwest": {
                         "lat": -22.9520668802915,
                         "lng": -43.1889991802915
                     }
                 }
             },
             "partial_match": true,
             "place_id": "Ek9SLiBEZXplbm92ZSBkZSBGZXZlcmVpcm8sIDM0IC0gQm90YWZvZ28sIFJpbyBkZSBKYW5laXJvIC0gUkosIDIyMjgwLTAzMCwgQnJhemlsIhoSGAoUChIJZQ6QZO9_mQARNMTuJNhQt5wQIg",
             "types": [
                 "street_address"
             ]
         }
     ],
     "status": "OK"
 }
};
const mockLocation = [
    {
      "address": 'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
      "lat": -22.8973551,
      "lng": -43.1802782
    },
    {
      "address": 'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
      "lat": -22.9039608,
      "lng": -43.1703536
    },
    {
      "address": 'R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil',
      "lat": -22.9507179,
      "lng": -43.1876502
    }
];
describe("Request with three address", () => {
    it('it', async () => {
        axios.get.mockResolvedValue(mockResponseGoogleAPI);
        const params = 'address=​ Av. Rio Branco, 1 ​ Centro, Rio de Janeiro ​ RJ,20090​ 003; Praça Mal. Âncora, 122 ​ Centro, Rio de Janeiro ​ RJ, 20021​ 200; Rua 19 de Fevereiro, 34 ​ Botafogo, Rio de Janeiro ​ RJ, 22280​ 030';
        const location = await googleapi.getGeoLocation(params);
        expect(mockLocation).toStrictEqual(location);
    });
});
describe('Request error GoogleAPI', () => {
    it('it', async () => {
        axios.get.mockResolvedValue([]);
        const params = 'address=​ Av. Rio Branco, 1 ​ Centro, Rio de Janeiro ​ RJ,20090​ 003; Praça Mal. Âncora, 122 ​ Centro, Rio de Janeiro ​ RJ, 20021​ 200';
        const location = await googleapi.getGeoLocation(params);
        console.log(location);
        expect(location).toBeFalsy();
    });
});