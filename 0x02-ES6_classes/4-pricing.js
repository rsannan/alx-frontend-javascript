// eslint-disable-next-line
import Currency from './3-currency';

export default class Pricing {
  /* eslint no-underscore-dangle: 0 */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter
  set amount(x) {
    if (typeof x === 'number') {
      this._amount = x;
    } else { throw TypeError('Amount must be a number'); }
  }

  set currency(x) {
    if (typeof x === 'object') {
      this._currency = x;
    } else { throw TypeError('Currency must be an object'); }
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
