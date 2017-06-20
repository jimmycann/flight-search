'use strict';

const Boom = require('boom');
const AirportService = require('../services/Airports');

module.exports = function () {
  return function (request, reply) {
    return AirportService.search(request.params.airport)
      .then(airports => {
        return reply(airports || []).code(200)
          .header('x-csrf-token', request.server.plugins.crumb.generate(request, reply))
          .header('Content-Type', 'application/json');
      })
      .catch(err => reply(Boom.badImplementation(err)));
  };
};
