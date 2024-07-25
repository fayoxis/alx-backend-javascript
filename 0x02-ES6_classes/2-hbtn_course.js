/**
 * A class of  Course.
 */
export default class HolbertonCourse {
  /**
   * Constructs a new instance.
   *
   * @param {String} courseName - The name of the course.
   * @param {Number} courseLength - The duration of the course in months.
   * @param {String[]} courseStudents - An array of student names enrolled in the course.
   */
  constructor(courseName, courseLength, courseStudents) {
    this._name = courseName;
    this._length = courseLength;
    this._students = courseStudents;
  }

  /**
   * Retrieves the name of the course.
   * @returns {String} The course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Updates the name of the course.
   * @param {String} value - The new course name.
   * @throws {TypeError} If the provided value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Retrieves the length (duration) of the course in months.
   * @returns {Number} The course length in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Updates the length (duration) of the course in months.
   * @param {Number} value - The new course length in months.
   * @throws {TypeError} If the provided value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Retrieves the list of student names enrolled in the course.
   * @returns {String[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Updates the list of student names enrolled in the course.
   * @param {String[]} value - An array of student names.
   * @throws {TypeError} If the provided value is not an array of strings.
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
