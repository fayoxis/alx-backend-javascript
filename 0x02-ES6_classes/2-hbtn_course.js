/**
 * Represents aCOURSE of action
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} courseName - The name of the course.
   * @param {Number} courseLength - How long the course is (in months).
   * @param {String[]} courseStudents - The names of students in the course.
   */
  constructor(courseName, courseLength, courseStudents) {
    this._validateName(courseName);
    this._validateLength(courseLength);
    this._validateStudents(courseStudents);

    this._name = courseName;
    this._length = courseLength;
    this._students = courseStudents;
  }

  /**
   * Gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   */
  _validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * Gets the length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   */
  _validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * Gets the names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   */
  _validateStudents(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
