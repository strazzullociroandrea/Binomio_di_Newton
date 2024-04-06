import { expect } from 'chai';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { calcoloCoefficiente } = require('../binomioNewton.cjs');

describe("Testing binomio di Newton e triangolo di Tartaglia", function () {
    it("1. Calcolo del coefficiente di 5 su 3 ", async function () {
        expect(await calcoloCoefficiente(5, 3)).to.equal(19);//test errato
    });
});
