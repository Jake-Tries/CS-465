const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./db');

const Trip = mongoose.model('trips');

const trips = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../data/trips.json'),
    'utf8'
  )
);

Trip.deleteMany({})
  .then(() => Trip.insertMany(trips))
  .then(() => {
    console.log('Trips loaded successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });