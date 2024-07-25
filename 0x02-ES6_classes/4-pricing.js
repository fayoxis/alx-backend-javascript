import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.setAmount(amount);
    this.setCurrency(currency);
  }

  setAmount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  getAmount() {
    return this._amount;
  }

  setCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  getCurrency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.getAmount()} ${this.getCurrency().name} (${this.getCurrency().code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
