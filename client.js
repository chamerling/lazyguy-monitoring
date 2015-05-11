'use strict';

var http = require('http');
var request = require('request');


function get() {
  request('http://boot2docker:3000', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  });
}

function init() {
    var loop = function() {
        get();
        var rand = Math.round(Math.random() * 1000);
        setTimeout(myFunction, rand);
    }
    loop();
}

init();
