const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/buy-nintendo';
mongoose.connect(databaseURI);

const Device = require('../models/device');
const Accessory = require('../models/accessory');

Device.collection.drop();
Accessory.collection.drop();

Device
  .create([{
    image: '../public/images/switch.jpg',
    name: 'Switch',
    punchLine: 'Switch and Play',
    processor: 'Qauntum',
    ram: 8,
    capacity: 32,
    year: 2016,
    rrp: 269.99
  }, {
    image: '../public/images/n64.jpg',
    name: 'N64',
    punchLine: 'bip bip ballerina',
    processor: 'amd efdf',
    ram: 4,
    capacity: 16,
    year: 1997,
    rrp: 369.99
  }])
  .then( (devices) => {
    console.log(`${devices.length} devices created`);

    return Accessory.create([{
      // image: '#',
      name: 'Charger',
      description: 'It charges your device',
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
