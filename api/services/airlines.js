'use strict';

const request = require('request-promise');

module.exports = {
  getAll: function () {
    return request.get('http://node.locomote.com/code-task/airlines');
  }
};
