const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Activity = new Schema(
    {
      _id: Number,
      name: String,
      description: String,
      priceRating: Number,
      telephone: String,
      theme: Number,
      coords: Array
    },
    { timestamps: true }
)

module.exports = mongoose.model('activity', Activity);
