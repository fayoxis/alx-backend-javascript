const { expect } = require('chai');

describe('Testing numbers', () => {
  [1, 2, 3, 4, 5, 6, 7].forEach(num => {
    it(`${num} is equal to ${num}`, () => {
      expect(num === num).to.be.true;
    });
  });

  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });
});
