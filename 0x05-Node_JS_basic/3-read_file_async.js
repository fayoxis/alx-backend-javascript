const fs = require('fs');

/**
 * Counts students in a CSV data file.
 * @author dtchaye tchaye arthur <https://github.com/fayoxis>
 */
function countStudents(dataPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (error, results) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = results.split('\n');
        let countStudents = 0;
        let msg = '';
        const fields = {};

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line !== '') {
            countStudents++;
            const [fname, lname, age, field] = line.split(',');
            if (!fields[field]) {
              fields[field] = {
                count: 1,
                students: [fname],
              };
            } else {
              const newCount = fields[field].count + 1;
              const newStudents = fields[field].students.concat(fname);
              fields[field] = {
                count: newCount,
                students: newStudents,
              };
            }
          }
        }

        console.log(`Number of students: ${countStudents}`);
        msg += `Number of students: ${countStudents}\n`;
        for (const field of Object.keys(fields)) {
          const n = fields[field].count;
          const names = fields[field].students.join(', ');
          console.log(`Number of students in ${field}: ${n}. List: ${names}`);
          msg += `Number of students in ${field}: ${n}. List: ${names}\n`;
        }
        msg = msg.slice(0, -1);
        resolve(msg);
      }
    });
  });
}

module.exports = countStudents;
