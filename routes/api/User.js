const express = require('express');
const router = express.Router();

//Coords Model
const User = require('../../models/User');

// @route   GET api/user
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .then(user => res.json(user));
});

// @route   POST api/coords
// @desc    Create new Coords
// @access  Public
router.post('/', (req, res) => {
    const newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    newUser.save()
    .then(user => res.json(user))
    .catch(console.log('Something´s wrong...'));
  });

module.exports = router;