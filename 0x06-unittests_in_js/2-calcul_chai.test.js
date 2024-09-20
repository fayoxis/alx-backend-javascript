const {expect} = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it.each`
      a     | b     | expected
      ${2.0}| ${2.0}| ${4}
      ${2.3}| ${1.8}| ${4}
      ${-2.0}|${-2.0}|${-4}
      ${-2.3}|${-1.8}|${-4}
      ${-2.0}|${2.0} | ${0}
      ${2.0}|${-2.0}| ${0}
      ${0.0}| ${0.0}| ${0}
    `('returns $expected for $a + $b', ({a, b, expected}) => {
      expect(calculateNumber('SUM', a, b)).to.equal(expected);
    });
  });

  describe('SUBTRACT', () => {
    it.each`
      a     | b     | expected
      ${2.0}| ${2.0}| ${0}
      ${2.3}| ${1.8}| ${0}
      ${-2.0}|${-2.0}|${0}
      ${-2.3}|${-1.8}|${0}
      ${-2.0}|${2.0} |${-4.0}
      ${2.0}|${-2.0}|${4.0}
      ${0.0}| ${0.0}| ${0}
    `('returns $expected for $a - $b', ({a, b, expected}) => {
      expect(calculateNumber('SUBTRACT', a, b)).to.equal(expected);
    });
  });

  describe('DIVIDE', () => {
    it.each`
      a      | b      | expected
      ${8.0} | ${2.0} | ${4.0}
      ${-7.0}| ${2.0} | ${-3.5}
      ${7.0} |${-2.0} | ${-3.5}
      ${-7.0}|${-2.0} | ${3.5}
      ${2.0} | ${2.0} | ${1}
      ${-2.0}|${-2.0} | ${1}
      ${2.6} | ${3.0} | ${1}
      ${2.4} | ${2.0} | ${1}
      ${0.0} | ${5.0} | ${0}
      ${0.0} |${-5.0} | ${-0}
      ${5.0} | ${0}   | ${'Error'}
      ${5.0} | ${0.2} | ${'Error'}
      ${5.0} |${-0.2} | ${'Error'}
      ${-5.0}| ${0}   | ${'Error'}
      ${-5.0}| ${0.2} | ${'Error'}
      ${-5.0}|${-0.2} | ${'Error'}
      ${0.0} | ${0.0} | ${'Error'}
    `('returns $expected for $a / $b', ({a, b, expected}) => {
      expect(calculateNumber('DIVIDE', a, b)).to.equal(expected);
    });
  });
});
