const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  image: {type:String},
  name: {type:String, required: true},
  punchLine: {type:String},
  processor: {type:String},
  ram: {type:Number},
  capacity: {type:Number},
  year: {type:Number},
  rrp: {type:Number, required: true}
});

module.exports = mongoose.model('Device', deviceSchema);
