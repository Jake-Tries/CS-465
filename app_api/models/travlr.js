const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  code: String,
  name: {
    type: String,
    required: true
  },
  length: String,
  start: Date,
  resort: String,
  perPerson: Number,
  image: String,
  description: String
});

mongoose.model('trips', tripSchema);