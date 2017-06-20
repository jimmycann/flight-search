'use strict';

const Joi = require('joi');

module.exports = [{
  path: '/api/v1/airports/{airport}',
  method: 'get',
  handler: { airports: {} },
  config: {
    validate: { params: { airport: Joi.string() } },
    plugins: { errorh: false }
  }
}];
