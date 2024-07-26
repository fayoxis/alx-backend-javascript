/**
 *  shows the Holberton Course on.
 */
export default class HolbertonCourse {
  /**
   * determine a new @see {@link HolbertonCourse}.
   *
   * @param {String} name -  name of  course.
   * @param {Number} length - How the course is (in months).
   * @param {String[]} students -  names of most students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   *  name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the  course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students .
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
