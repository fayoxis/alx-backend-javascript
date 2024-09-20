const sinon = require('sinon');
const { calculateNumber } = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber function', () => {
    const calculateNumberSpy = sinon.spy(calculateNumber);

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.callCount).to.be.equal(1);
    calculateNumberSpy.restore();
  });
});
