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
  if (Array.isArray(students)) {
    return students.reduce((ids, student) => {
      ids.push(student.id);
      return ids;
    }, []);
  }
  return [];
};

export default getListStudentIds;
