'use strict';

var curry = require('../../function/curry');

module.exports = curry(function (prop, value, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = value;
  return result;
});