'use strict';

const Joi = require('joi');

exports.flightSearch = Joi.object().keys({
  from: Joi.string().min(3).max(3).required(),
  to: Joi.string().min(3).max(3).required(),
  date: Joi.date().min('now').required()
});
