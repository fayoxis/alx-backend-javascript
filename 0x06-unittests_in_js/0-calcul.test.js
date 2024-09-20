const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('handles floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounds down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounds down a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounds down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounds up b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounds up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounds up a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('handles floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
