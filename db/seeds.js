const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/buy-nintendo';
mongoose.connect(databaseURI);

const Console = require('../models/console');
const Accessory = require('..models/accessory');

Console.collection.drop();
Accessory.collection.drop();

Console
  .create([{
    image: '#',
    name: 'Switch',
    processor: 'Qauntum',
    ram: 4,
    capacity: 32,
    year: 2016,
    rrp: 269.99
  }, {

  }])
  .then( (consoles) => {
    console.log(`${consoles.length} consoles created`);

    return Accessory.create([{
      image: '#',
      name: 'Charger',
      rrp: 20
    }]);
  })
  .then( (accessories) => {
    console.log(`${accessories.length} accessories created`);
  })
  .catch( (err) => {
    console.log(err);
  })
  .finally( () => {
    mongoose.connection.close();
  });
