const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it.each([
      [2.0, 2.0, 4],
      [2.3, 1.8, 4],
      [-2.0, -2.0, -4],
      [-2.3, -1.8, -4],
      [-2.0, 2.0, 0],
      [2.0, -2.0, 0],
      [0.0, 0.0, 0]
    ])('Sum: %f + %f = %i', (a, b, expected) => {
      expect(calculateNumber('SUM', a, b)).to.equal(expected);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it.each([
      [2.0, 2.0, 0],
      [2.3, 1.8, 0],
      [-2.0, -2.0, 0],
      [-2.3, -1.8, 0],
      [-2.0, 2.0, -4.0],
      [2.0, -2.0, 4.0],
      [0.0, 0.0, 0]
    ])('Subtract: %f - %f = %f', (a, b, expected) => {
      expect(calculateNumber('SUBTRACT', a, b)).to.equal(expected);
    });
  });

  describe('type == "DIVIDE"', () => {
    it.each([
      [8.0, 2.0, 4.0],
      [-7.0, 2.0, -3.5],
      [7.0, -2.0, -3.5],
      [-7.0, -2.0, 3.5],
      [2.0, 2.0, 1],
      [-2.0, -2.0, 1],
      [2.6, 3.0, 1],
      [2.4, 2.0, 1],
      [0.0, 5.0, 0],
      [0.0, -5.0, -0]
    ])('Divide: %f / %f = %f', (a, b, expected) => {
      expect(calculateNumber('DIVIDE', a, b)).to.equal(expected);
    });

    it.each([
      [5.0, 0],
      [5.0, 0.2],
      [5.0, -0.2],
      [-5.0, 0],
      [-5.0, 0.2],
      [-5.0, -0.2],
      [0.0, 0.0]
    ])('Divide: %f / %f = "Error"', (a, b) => {
      expect(calculateNumber('DIVIDE', a, b)).to.equal('Error');
    });
  });
});
