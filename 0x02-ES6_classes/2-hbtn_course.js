/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._validateStudents(value);
    this._students = value;
  }
}
