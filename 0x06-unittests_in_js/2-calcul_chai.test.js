const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  const testCases = [
    { operation: 'SUM', a: 1, b: 4, expected: 5 },
    { operation: 'SUM', a: 2.4, b: 4, expected: 6 },
    { operation: 'SUM', a: 4, b: 2.4, expected: 6 },
    { operation: 'SUM', a: 1.4, b: 4.5, expected: 6 },
    { operation: 'SUBTRACT', a: 5, b: 3, expected: 2 },
    { operation: 'SUBTRACT', a: 2, b: 4.5, expected: -3 },
    { operation: 'SUBTRACT', a: 4.5, b: 2, expected: 3 },
    { operation: 'SUBTRACT', a: 1.4, b: 4.5, expected: -4 },
    { operation: 'DIVIDE', a: 8, b: 4, expected: 2 },
    { operation: 'DIVIDE', a: 9.5, b: 2, expected: 5 },
    { operation: 'DIVIDE', a: 2, b: 9.5, expected: 0.2 },
    { operation: 'DIVIDE', a: 1.4, b: 4.5, expected: 0.2 },
    { operation: 'DIVIDE', a: 1.4, b: 0, expected: 'Error' },
  ];

  testCases.forEach(({ operation, a, b, expected }) => {
    it(`should return ${expected} for ${operation} ${a} ${b}`, () => {
      expect(calculateNumber(operation, a, b)).to.equal(expected);
    });
  });
});
