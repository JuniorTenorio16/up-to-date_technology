const calculate = require('../../src/helpers/calculate');

describe("calculateEuclidiano()", () => {
    it("calculate distance", async () => {
        const result = await calculate.calculateEuclidiano(-22.9039608,-22.9507179,-43.1703536,-43.1876502,5);
        expect(result).toEqual(0.04985377389897498);
    });
});

describe("treeLocation()", () => {
    it("order response", async () => {
       const mock = await [
          {
            address: 'Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil',
            lat: -22.8973551,
            lng: -43.1802782
          },
          {
            address: 'Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil',
            lat: -22.9039608,
            lng: -43.1703536
          },
          {
            address: 'R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil',
            lat: -22.9507179,
            lng: -43.1876502
          }
        ];

        const mockResult = [
            {
            "route": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil & Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
            "distance": 0.011921952761606592
            },
            {
            "route": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil & R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
            "distance": 0.04985377389897498
            },
            {
            "route": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil & R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
            "distance": 0.05386960931583117
            }
        ]
        const result = await calculate.treeLocation(mock)
        expect(result).toEqual(mockResult);
    });
});