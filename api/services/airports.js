'use strict';

const request = require('request-promise');

module.exports = {
  search: function (query) {
    return request.get(`http://node.locomote.com/code-task/airports?q=${query}`);
  }
};
