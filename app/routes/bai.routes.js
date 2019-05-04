module.exports = (app) => {
    const BAIinfo = require('../controllers/bai.controller.js');

    // Create a new member
    app.post('/new', BAIinfo.create);
    //View all members
    app.get('/members', BAIinfo.findAll);

}