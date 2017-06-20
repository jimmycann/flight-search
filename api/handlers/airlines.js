'use strict';

const Boom = require('boom');
const AirlineService = require('../services/Airline');

module.exports = function () {
  return function (request, reply) {
    return AirlineService.findAll()
      .then(airlines => {
        if (!airlines) {
          throw new Error('Airlines not found');
        }
        return reply(airlines).code(200)
          .header('x-csrf-token', request.server.plugins.crumb.generate(request, reply))
          .header('Content-Type', 'application/json');
      })
      .catch(err => reply(Boom.badImplementation(err)));
  };
};
