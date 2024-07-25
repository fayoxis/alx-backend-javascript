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
    // Initialize instance properties using the provided arguments
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for the 'name' property
  get name() {
    return this._name;
  }

  // Setter for the 'name' property
  set name(value) {
    // Check if the provided value is a string
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Assign the provided value to the '_name' property
    this._name = value;
  }

  // Getter for the 'length' property
  get length() {
    return this._length;
  }

  // Setter for the 'length' property
  set length(value) {
    // Check if the provided value is a number
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // Assign the provided value to the '_length' property
    this._length = value;
  }

  // Getter for the 'students' property
  get students() {
    return this._students;
  }

  // Setter for the 'students' property
  set students(value) {
    // Check if the provided value is an array
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    // Check if all elements in the array are strings
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // Assign the provided value to the '_students' property
    this._students = value;
  }
}
