'use strict';

const path = require('path');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply.file('dist/index.html');
  }
}, {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.join(process.cwd(), 'public'),
      listing: true
    }
  }
}];
