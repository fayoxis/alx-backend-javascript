import fs from 'fs';

/**
 * Reads the data of students from a CSV data file.
 * @param {String} dataPath - The path to the CSV data file.
 * @returns {Promise<Object>} - A Promise that resolves with an object containing student data.
 * The object keys are the unique location strings, and the values are arrays of student objects.
 * Each student object has the following properties:
 *   - firstname (String): The student's first name.
 *   - lastname (String): The student's last name.
 *   - age (Number): The student's age.
 *  @author dtchaye tchaye arthur <https://github.com/fayoxis>
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  while (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          while (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
