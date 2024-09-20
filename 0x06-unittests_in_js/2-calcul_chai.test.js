const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    [
      [2, 2, 4],
      [2.3, 1.8, 4.1],
      [-2, -2, -4],
      [-2.3, -1.8, -4.1],
      [-2, 2, 0],
      [2, -2, 0],
      [0, 0, 0],
    ].forEach(([a, b, expected]) => {
      it(`should return ${expected} when adding ${a} and ${b}`, () => {
        expect(calculateNumber('SUM', a, b)).to.equal(expected);
      });
    });
  });

  describe('type == "SUBTRACT"', () => {
    [
      [2, 2, 0],
      [2.3, 1.8, 0.5],
      [-2, -2, 0],
      [-2.3, -1.8, -0.5],
      [-2, 2, -4],
      [2, -2, 4],
      [0, 0, 0],
    ].forEach(([a, b, expected]) => {
      it(`should return ${expected} when subtracting ${b} from ${a}`, () => {
        expect(calculateNumber('SUBTRACT', a, b)).to.equal(expected);
      });
    });
  });

  describe('type == "DIVIDE"', () => {
    [
      [8, 2, 4],
      [-7, 2, -3.5],
      [7, -2, -3.5],
      [-7, -2, 3.5],
      [2, 2, 1],
      [-2, -2, 1],
      [2.6, 3, 1],
      [2.4, 2, 1],
      [0, 5, 0],
      [0, -5, 0],
      [5, 0, 'Error'],
      [5, 0.2, 'Error'],
      [5, -0.2, 'Error'],
      [-5, 0, 'Error'],
      [-5, 0.2, 'Error'],
      [-5, -0.2, 'Error'],
      [0, 0, 'Error'],
    ].forEach(([a, b, expected]) => {
      it(`should return ${expected} when dividing ${a} by ${b}`, () => {
        expect(calculateNumber('DIVIDE', a, b)).to.equal(expected);
      });
    });
  });
});
