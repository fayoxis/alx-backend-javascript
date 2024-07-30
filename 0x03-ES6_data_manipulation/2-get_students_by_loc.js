/**
 * Retrieves students in a given location.
 * @param {Object[]} students - The list of students.
 * @param {number} students[].id - The student's ID.
 * @param {string} students[].firstName - The student's first name.
 * @param {string} students[].location - The student's location.
 * @param {string} city - The location to filter by.
 * @returns {Object[]} The list of students in the given location.
 * @author  <https://github.com/>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
