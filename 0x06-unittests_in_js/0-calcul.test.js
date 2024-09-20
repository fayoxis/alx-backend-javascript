const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  [
    [1.0, 2.0, 3],
    [1.0, 2.4, 3],
    [1.4, 2.4, 3],
    [1.4, 2.0, 3],
    [1.0, 2.5, 4],
    [2.6, 2.5, 6],
    [2.6, 2.0, 5],
    [2.499999, 3.499999, 5]
  ].forEach(([a, b, expected]) => {
    it(`returns ${expected} for ${a} and ${b}`, () => {
      assert.strictEqual(calculateNumber(a, b), expected);
    });
  });
});
