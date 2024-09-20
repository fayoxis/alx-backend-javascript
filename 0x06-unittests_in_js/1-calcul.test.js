const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return the sum of two positive numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('should return the sum of two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('should return the sum of a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('should return 0 when adding 0 to 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 0 when subtracting equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('should return 0 when subtracting equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('should return the difference between a negative and a positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('should return the difference between a positive and a negative number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('should return 0 when subtracting 0 from 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return the quotient of two positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('should return the quotient of two numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('should return the quotient of two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('should return 1 when dividing equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('should return 1 when dividing equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('should return the rounded down quotient', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('should return 0 when dividing 0 by a positive or negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('should return "Error" when dividing a positive or negative number by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('should return "Error" when dividing 0 by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
