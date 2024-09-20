const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls console.log with the correct arguments', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.callCount).to.be.equal(1);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleSpy.callCount).to.be.equal(1);

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
