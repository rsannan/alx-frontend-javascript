export default class Currency {
  /* eslint no-underscore-dangle: 0 */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(x) {
    if (typeof x === 'string') {
      this._code = x;
    } else { throw TypeError('Code must be a string'); }
  }

  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else { throw TypeError('Name must be a string'); }
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
