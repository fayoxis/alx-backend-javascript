/**
 * Represents a course offered by a learning institution.
 */
export default class HolbertonCourse {
  /**
   * Constructs a new HolbertonCourse object.
   *
   * @param {string} name - The name of the course.
   * @param {number} length - The duration of the course in months.
   * @param {string[]} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    this._validateAndSetName(name);
    this._validateAndSetLength(length);
    this._validateAndSetStudents(students);
  }

  /**
   * Retrieves the course name.
   * @returns {string} The course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Updates the course name after validating the input.
   * @param {string} newName - The new course name.
   * @throws {TypeError} If the provided value is not a string.
   */
  _validateAndSetName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /**
   * Retrieves the course duration in months.
   * @returns {number} The course duration in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Updates the course duration after validating the input.
   * @param {number} newLength - The new course duration in months.
   * @throws {TypeError} If the provided value is not a number.
   */
  _validateAndSetLength(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /**
   * Retrieves the list of enrolled students.
   * @returns {string[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Updates the list of enrolled students after validating the input.
   * @param {string[]} newStudents - The new list of enrolled students.
   * @throws {TypeError} If the provided value is not an array of strings.
   */
  _validateAndSetStudents(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
