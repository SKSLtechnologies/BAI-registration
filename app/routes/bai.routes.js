const path = require('path');
module.exports = (app) => {
    const BAIinfo = require('../controllers/bai.controller.js');
    
    //Go to registration form
    app.get('/register', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/register.html'));
    });

    app.get('/success', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/success.html'));
    });

    // Create a new member
    app.post('/new', BAIinfo.create);

    //View all members
    app.get('/members', BAIinfo.findAll);

    //View all list 
    app.get('/list', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/table.html'));
    });

    app.get('/listed', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/table1.html'));
    });


    app.get('/searched', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../writeMe.json'));
    });

    // Create a new member
    app.post('/search', BAIinfo.search);
    app.get('/filter', function (req, res) {
        res.sendFile(path.join(__dirname + '../../../public/views/filter.html'));
    });


}