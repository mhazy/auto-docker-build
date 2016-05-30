'use strict';

const config = require('./index');
const path = require('path');


const logEvents = {
  response: '*',
  log: '*',
  request: '*',
  'request-internal': '*',
  error: '*',
  model: '*'
};

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [logEvents]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

module.exports = [
  {
    register: require('good'),
    options: goodOptions
  },
  {
    register: require('hapi-github-webhooks')
  },
];
