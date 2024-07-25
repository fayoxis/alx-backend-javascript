export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  validateName(name) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
    return name;
  }

  validateLength(length) {
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    return length;
  }

  validateStudents(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const student of students) {
      if (typeof student !== 'string') throw TypeError('students must contain strings');
    }
    return students;
  }

  set name(name) {
    this._name = this.validateName(name);
  }

  get name() {
    return this._name;
  }

  set length(length) {
    this._length = this.validateLength(length);
  }

  get length() {
    return this._length;
  }

  set students(students) {
    this._students = this.validateStudents(students);
  }

  get students() {
    return this._students;
  }
}
