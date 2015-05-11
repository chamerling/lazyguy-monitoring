'use strict';

var express = require('express');
var statsd = require('express-statsd');
var app = express();

app.use(statsd({host: 'statsd', port: 8125}));

app.get('/', function (req, res) {
  res.json(200, {yo: 'lo'});
});

app.get('/err', function (req, res) {
  res.json(500, {err: 'You failed!'});
});

app.listen(3000, function(err) {
  console.log('LazyGuy Application is now started');
});
