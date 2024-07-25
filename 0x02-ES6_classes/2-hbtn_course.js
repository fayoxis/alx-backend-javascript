/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse class
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   *
   * Implement getters and setters for each attribute
   */
  constructor(name, length, students) {
    // Initialize private properties with the provided values
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for the name property
  get name() {
    return this._name;
  }

  // Setter for the name property
  set name(value) {
    // Check if the provided value is a string
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for the length property
  get length() {
    return this._length;
  }

  // Setter for the length property
  set length(value) {
    // Check if the provided value is a number
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for the students property
  get students() {
    return this._students;
  }

  // Setter for the students property
  set students(value) {
    // Check if the provided value is an array
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    
    // Loop through each element in the array
    for (const student of value) {
      // Check if the element is a string
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    
    // If all elements are strings, assign the array to the private property
    this._students = value;
  }
}
