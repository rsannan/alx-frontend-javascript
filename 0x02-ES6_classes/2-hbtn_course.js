export default class HolbertonCourse {
  constructor(name, length, students) {
  /* eslint no-underscore-dangle: 0 */
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setter
  set name(x) {
    if (typeof x === 'string') {
      this._name = x;
    } else { throw TypeError('Name must be a string'); }
  }

  set length(x) {
    if (typeof x === 'number') {
      this._length = x;
    } else { throw TypeError('Length must be a number'); }
  }

  set students(x) {
    if (Array.isArray(x) === true) {
      x.forEach((item) => {
        if (typeof item !== 'string') {
          throw TypeError('Student Array should contain strings');
        } else { this._students = x; }
      });
    } else { throw TypeError('Student should be an array'); }
  }
}
