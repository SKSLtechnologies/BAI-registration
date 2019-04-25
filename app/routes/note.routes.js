module.exports = (app) => {
    const BAIinfo = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', BAIinfo.create);

    app.get('/notes', BAIinfo.findAll);

}