export default class Airport {
  /* eslint no-underscore-dangle: 0 */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setters
  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else { throw TypeError('Name must be a string'); }
  }

  set code(x) {
    if (typeof x === 'string') {
      this._code = x;
    } else { throw TypeError('Code must be a string'); }
  }
}

Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};
