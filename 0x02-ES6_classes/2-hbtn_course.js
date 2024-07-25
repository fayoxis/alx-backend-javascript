export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateName(name);
    this.validateLength(length);
    this.validateStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  validateName(name) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
  }

  validateLength(length) {
    if (typeof length !== 'number') throw TypeError('length must be a Number');
  }

  validateStudents(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const student of students) {
      if (typeof student !== 'string') throw TypeError('students must contain strings');
    }
  }

  set name(name) {
    this.validateName(name);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this.validateLength(length);
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this.validateStudents(students);
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
