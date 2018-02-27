const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const drive = require('./routes/files');
const config = require('./config/database');

const bodyparser = require('body-parser');
const app = express();
port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/files',drive);
// Set Static Folder
app.use(express.static(path.join(__dirname, './public')));

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.send('Invalid Endpoint');
});


app.listen(port,function(){
  console.log('server running on port '+port);
});