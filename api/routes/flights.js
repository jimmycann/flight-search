'use strict';

const Joi = require('joi');
const Schema = require('../schemas/flights');

module.exports = [{
  path: '/api/v1/flights/{airline}',
  method: 'get',
  handler: { flights: {} },
  config: {
    validate: {
      params: { airline: Joi.string().min(2).max(2) },
      query: Schema.flightSearch
    },
    plugins: { errorh: false }
  }
}];
