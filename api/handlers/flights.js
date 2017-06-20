'use strict';

const Boom = require('boom');
const FlightService = require('../services/Flight');

module.exports = function () {
  return function (request, reply) {
    return FlightService.search(request.params.airline, request.query)
      .then(results => {
        return reply(results || []).code(200)
          .header('x-csrf-token', request.server.plugins.crumb.generate(request, reply))
          .header('Content-Type', 'application/json');
      })
      .catch(err => reply(Boom.badImplementation(err)));
  };
};
