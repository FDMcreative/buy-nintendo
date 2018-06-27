const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
  image: {type:String},
  name: {type:String, required:true},
  description: {type:String},
  rrp: {type:Number, required:true}
});

module.exports = mongoose.model('Accessory', accessorySchema)
