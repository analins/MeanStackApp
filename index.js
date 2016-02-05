var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').load();

var app = express();

mongoose.connect('mongodb://localhost/meansignup_api')
// var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/meansignup_api';
// mongoose.connect(mongoPath);

app.use(express.static('./public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users');

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

app.listen(8080, function(){
  console.log("hello!");
});

// var port = process.env.PORT || 8080;
// app.listen(port, function () {
//   console.log('listening on ' + port);
// });
