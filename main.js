const express = require('express')
const bodyParser = require('body-parser')
var path = require('path')
// create express app
const app = express()
const justdid = require('./controllers/justdid.controller.js');
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


/* define a simple route
app.get('/', (req, res) => {
    //res.json({"message": "This is the todo app."});
    res.sendFile(__dirname + '/index.html')
    //res.render('index', {list: list});
})*/

app.get('/', justdid.getCount);
app.get('/create', justdid.create);
app.get('/delete', justdid.delete);
app.get('/reset', justdid.reset);
app.post('/hCounter', justdid.addOne);
/*app.post('/hCounter', (req, res) => {
    //res.json({"message": "This is the todo app."});
    //res.sendFile(__dirname + '/index.html');
    console.log('this is in post')
    justdid.addOne
    res.redirect('/')
    //res.render('index', {list: list});
})*/

//require('./routes/todo.routes.js')(app);

// listen for requests
app.listen(4000, () => {
    console.log("I Am Listening on port 4000.  I am always listening...")
})
