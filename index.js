const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// create express app
var app = express()
app.use(express.static(path.join(__dirname, 'public')))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// define a simple route
// app.get('/home', (req, res) => {
//     res.json({"message": "Submitted"});
// });

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/success.html'));
});

require('./app/routes/bai.routes.js')(app);

// listen for requests
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));