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
    image: '/images/switch.jpg',
    name: 'Switch',
    punchLine: 'Switch and Play',
    processor: 'Octa-core (4×ARM Cortex-A57 & 4×ARM Cortex-A53) @ 1.020 GHz',
    ram: '4 GB',
    capacity: '32 GB',
    year: 2017,
    rrp: 329.99
  }, {
    image: '/images/n64.jpg',
    name: 'N64',
    punchLine: 'Get N or Get Out',
    processor: '64-bit NEC VR4300 @ 93.75 MHz',
    ram: '4 MB',
    capacity: '64 MB',
    year: 1996,
    rrp: 199.99
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
