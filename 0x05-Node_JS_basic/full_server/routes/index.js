import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Defines the appropriate handler in the given Express application.
 * @param {Object} app - The Express application instance.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
