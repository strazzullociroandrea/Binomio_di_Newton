import { expect } from "chai";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { calcoloCoefficiente } = require("../binomioNewton.cjs");

describe("Testing binomio di Newton e triangolo di Tartaglia", function () {
  it("1. Calcolo del coefficiente di 5 su 3 ", async function () {
    expect(await calcoloCoefficiente(5, 3)).to.equal(19); //test errato
  });
});

import { calcolaGenerale } from "../binomioNewton.cjs";

describe("Testing calcolaGenerale function", function () {
  it("should calculate correctly for given exponent", async function () {
    const expectedResults = {
      3: "a^3 + 3ab + b^3",
      2: "a^2 + 2ab + b^2",
      1: "a + b",
    };
    for (const exponent of Object.keys(expectedResults)) {
      const expectedResult = expectedResults[exponent];
      const result = await calcolaGenerale(exponent);
      expect(result).to.equal(expectedResult);
    }
  });
});

import { calcoloSingolo } from "../binomioNewton.cjs";
import { generaTriangoloCoefficiente } from "../tartaglia.js";

describe("Testing funzione calcoloSingolo", function () {
  it("", async function () {
    expect(await calcoloSingolo(5, 5, "a^5", "b^0")).to.equal("a^5b^0");
  });
});

describe("Testing funzione generaTriangoloCoefficiente", function () {
  it("", async function () {
    expect(await generaTriangoloCoefficiente(5)).to.equal([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]); //test corretto, fino alla quinta riga
  });
});
