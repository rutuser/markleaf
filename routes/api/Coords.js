const express = require('express');
const router = express.Router();

//Coords Model
const Coords = require('../../models/Coords');

// @route   GET api/coords
// @desc    Get All Coords
// @access  Public
router.get('/', (req, res) => {
  Coords.find()
    .then(coords => res.json(coords));
});

// @route   POST api/coords
// @desc    Create new Coords
// @access  Public
router.post('/', (req, res) => {
  const newCoords = new Coords({
    lat: req.body.lat,
    lng: req.body.lng
  });
  newCoords.save()
  .then(coords => res.json(coords))
  .catch(console.log('Something´s wrong...'));
});

// @route   DELETE api/coords/:id
// @desc    Delete Coords
// @access  Public
router.delete('/:id', (req, res) => {
    Coords.findById(req.params.id)
    .then(coords => coords.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;