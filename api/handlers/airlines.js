'use strict';

const Boom = require('boom');
const AirlineService = require('../services/airlines');

module.exports = function () {
  return function (request, reply) {
    return AirlineService.getAll()
      .then(airlines => {
        if (!airlines) {
          return reply(Boom.badImplementation());
        }
        return reply(airlines).code(200).header('x-csrf-token', request.server.plugins.crumb.generate(request, reply));
      });
  };
};
