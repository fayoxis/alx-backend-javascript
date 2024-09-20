const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 when dividing 0 by a non-zero number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
