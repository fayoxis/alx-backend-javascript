export default class HolbertonCourse {
  #name;
  #length;
  #students;

  constructor(name, length, students) {
    this.#setName(name);
    this.#setLength(length);
    this.#setStudents(students);
  }

  #setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.#name = name;
  }

  #setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this.#length = length;
  }

  #setStudents(students) {
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this.#students = students;
  }

  get name() {
    return this.#name;
  }

  get length() {
    return this.#length;
  }

  get students() {
    return this.#students;
  }
}
