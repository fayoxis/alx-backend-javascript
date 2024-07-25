/**
 * this will represent a class room.
 */
export default class ClassRoom {
  /**
   * use this to Creates a new @see {@link ClassRoom}.
   * @param {number} maxStudents - The maximum number of students
   * allowed in the class.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
