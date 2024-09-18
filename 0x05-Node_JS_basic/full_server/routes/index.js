import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * the appropriate handler in the
 * given Express application.
 * @param {String} dataPath  to the CSV data file.
 * @author dtchaye tchaye arthur <https://github.com/fayoxis>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
