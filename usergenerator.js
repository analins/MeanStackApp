var User = require('./models/user');
var mongoose = require('mongoose');
var faker = require('faker');

var mongoPath = process.env.MONGOLAB_URI || 'mongodb://localhost/meansignup_api';
mongoose.connect('mongodb://localhost/meansignup_api');


function genUsers() {

  for (var i = 0; i < 15; i++) {
    newUser = {};
      newUser.username = faker.internet.userName();
      newUser.comment = faker.company.catchPhrase() + ' ' + faker.company.bs();

      dbUser = new User(newUser);
      dbUser.save(function (dbUser) {

          console.log('yay!');

      });
  }
  mongoose.disconnect();
}

genUsers();
