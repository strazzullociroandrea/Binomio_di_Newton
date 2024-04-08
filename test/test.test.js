import { expect } from 'chai';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { calcoloCoefficiente } = require('../binomioNewton.cjs');

describe("Testing binomio di Newton e triangolo di Tartaglia", function () {
    it("1. Calcolo del coefficiente di 5 su 3 ", async function () {
        expect(await calcoloCoefficiente(5, 3)).to.equal(19);//test errato
    });
});

import { calcoloGenerale } from '../binomioNewton.cjs';

describe("Testing calcoloGenerale function", function () {
    it("should calculate correctly for given exponent", async function () {
        const expectedResults = {
            0: "a^3 + 3ab + b^3",
            1: "a^2 + 2ab + b^2",
            2: "a + b"

        };
        for (const exponent of Object.keys(expectedResults)) {
            const expectedResult = expectedResults[exponent];
            const result = await calcoloGenerale(exponent);
            expect(result).to.equal(expectedResult);
        }
    });
});
