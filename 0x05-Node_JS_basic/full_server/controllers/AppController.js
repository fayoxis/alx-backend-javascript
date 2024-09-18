/**
 *  miscellaneous route handlers.
 * @param {String} dataPath  to the CSV data file.
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
