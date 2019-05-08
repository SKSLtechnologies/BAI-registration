const path = require('path');
module.exports = (app) => {
    const BAIinfo = require('../controllers/bai.controller.js');
    
    //Go to registration form
    app.get('/register', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/register.html'));
    });

    // Create a new member
    app.post('/new', BAIinfo.create);

    //View all members
    app.get('/members', BAIinfo.findAll);

}