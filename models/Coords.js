const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CoordsSchema = new Schema({
  lat: {
    type: Number,
    required: false
  },
  lng: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Coords = mongoose.model('coords', CoordsSchema);