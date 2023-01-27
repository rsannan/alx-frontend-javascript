import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /* eslint no-underscore-dangle: 0 */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Setters
  set floors(x) {
    if (typeof x === 'number') {
      this._floors = x;
    } else { throw TypeError('Floors must be a number'); }
  }

  // Method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
