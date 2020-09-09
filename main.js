const express = require('express')
const bodyParser = require('body-parser')
var path = require('path')
// create express app
const app = express()
const justdid = require('./controllers/justdid.controller.js')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect(dbConfig.url, {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

app.get('/', justdid.getCount)
app.get('/create', justdid.create)
app.get('/delete', justdid.delete)
app.get('/reset', justdid.reset)
app.post('/hCounter', justdid.addOne)
app.post('/hLCounter', justdid.laddOne)
app.post('/hRCounter', justdid.raddOne)

// listen for requests
app.listen(4000, () => {
    console.log("Go ahead.  I am listening on port 4000.")
})
