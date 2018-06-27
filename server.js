const express = require('express');
const morgan = require('morgan');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const databaseURI = 'mongodb://localhost/buy-nintendo';
mongoose.connect(databaseURI);

const Device = require('./models/device');
const Accessory = require('./models/accessory');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));

app.get('/',(req,res) => {
  res.render('index');
});

app.get('/devices',(req,res) => {
  Device
    .find()
    .sort({name:-1})
    .exec()
    .then( (records) => {
      res.render('devices',{records});
  });
});

app.get('/accessories',(req,res) => {
  Accessory
    .find()
    .exec()
    .then( (records) => {
      res.render('accessories',{records});
  });
});

app.get('*',(req,res) => {
  res.render('404');
});

app.listen(3000, () => console.log('express is listening on 3000...'));
