'use strict';

const Bluebird = require('bluebird');
const Hapi = require('hapi');
require('hapi-bluebird');

const server = new Hapi.Server({ debug: { request: ['error'] } });

const plugins = [
    // {
    //     register: require('./routes/.js'),
    //     options: {
    //         database: database
    //     }
    // }
];

server.connection({
  host: 'localhost',
  port: 8888
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.register(plugins)
  .then(() => server.start())
  .then(() => server.log('info', 'Server running at: ' + server.info.uri))
  .catch(err => { throw err });

module.exports = server;
