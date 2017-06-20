'use strict';

const request = require('request-promise');

module.exports = {
  findAll: function () {
    return request.get('http://node.locomote.com/code-task/airlines');
  }
};
