const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Venue = new Schema(
    {
      _id: Number,
      name: String,
      description: String,
      priceRating: Number,
      telephone: String,
      coords: Array
    },
    { timestamps: true }
)

module.exports = mongoose.model('venue', Venue);
