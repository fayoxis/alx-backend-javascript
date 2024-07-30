/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns
 */
const getListStudentIds = (students) => {
  return Array.isArray(students) ? students.map(student => student.id) : [];
}
export default getListStudentIds;
