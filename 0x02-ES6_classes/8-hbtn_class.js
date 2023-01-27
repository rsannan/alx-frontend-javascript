export default class HolbertonClass {
  /* eslint no-underscore-dangle: 0 */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Setters
  set size(x) {
    if (typeof x === 'number') {
      this._size = x;
    } else { throw TypeError('Size must be a number'); }
  }

  set location(x) {
    if (typeof x === 'string') {
      this._location = x;
    } else { throw TypeError('Location must be a string'); }
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    } if (hint === 'string') {
      return this.location;
    }
    return null;
  }
}
