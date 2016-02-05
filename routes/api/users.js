var express = require('express');
var router = express.Router();

var User = require('../../models/user');

// Get
router.get('/', function(req, res){
  User.find({}, function(err, dbUsers){
    res.json({ users: dbUsers})
  });
});

// Show One
router.get('/:id', function(req, res){
  User.findById( req.params.id, function( err, dbUsers){
    res.json( dbUser );
  });
});

// New User Comment
router.post('/', function(req, res){
  console.log(req.body)
  User.create(req.body.user, function(err, user){
    res.json(user);
  });
});


// Delete

router.delete('/:id', function(req, res) {
  console.log('deleting!');
  User.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
