/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {string} courseName - The name of the course.
   * @param {number} courseDuration - How long the course is (in months).
   * @param {string[]} studentsArray - The names of students in the course.
   */
  constructor(courseName, courseDuration, studentsArray) {
    this._name = courseName;
    this._length = courseDuration;
    this._students = studentsArray;
  }

  /**
   * Gets the name of this course.
   * @returns {string} The course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   * @param {string} value - The new course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   * @returns {number} The course duration in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   * @param {number} value - The new course duration in months.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   * @returns {string[]} The array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   * @param {string[]} value - The new array of student names.
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
