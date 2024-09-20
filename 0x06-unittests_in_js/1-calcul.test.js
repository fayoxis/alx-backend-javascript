const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  const testCases = {
    SUM: [
      ['SUM', 2.0, 2.0, 4],
      ['SUM', -2.0, -2.0, -4],
      ['SUM', -2.0, 2.0, 0],
      ['SUM', 0.0, 0.0, 0]
    ],
    SUBTRACT: [
      ['SUBTRACT', 2.0, 2.0, 0],
      ['SUBTRACT', -2.0, -2.0, 0],
      ['SUBTRACT', -2.0, 2.0, -4.0],
      ['SUBTRACT', 2.0, -2.0, 4.0],
      ['SUBTRACT', 0.0, 0.0, 0]
    ],
    DIVIDE: [
      ['DIVIDE', 8.0, 2.0, 4.0],
      ['DIVIDE', -7.0, 2.0, -3.5],
      ['DIVIDE', 7.0, -2.0, -3.5],
      ['DIVIDE', -7.0, -2.0, 3.5],
      ['DIVIDE', 2.0, 2.0, 1],
      ['DIVIDE', -2.0, -2.0, 1],
      ['DIVIDE', 2.6, 3.0, 1],
      ['DIVIDE', 2.4, 2.0, 1],
      ['DIVIDE', 0.0, 5.0, 0],
      ['DIVIDE', 0.0, -5.0, -0],
      ['DIVIDE', 5.0, 0, 'Error'],
      ['DIVIDE', 5.0, 0.2, 'Error'],
      ['DIVIDE', 5.0, -0.2, 'Error'],
      ['DIVIDE', -5.0, 0, 'Error'],
      ['DIVIDE', -5.0, 0.2, 'Error'],
      ['DIVIDE', -5.0, -0.2, 'Error'],
      ['DIVIDE', 0.0, 0.0, 'Error']
    ]
  };

  for (const [operation, cases] of Object.entries(testCases)) {
    describe(operation, () => {
      it(`should return the correct ${operation.toLowerCase()} result`, () => {
        cases.forEach(([op, a, b, expected]) => {
          assert.strictEqual(calculateNumber(op, a, b), expected);
        });
      });
    });
  }
});
