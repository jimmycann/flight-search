'use strict';

const qs = require('querystring');
const moment = require('moment');
const request = require('request-promise');

const Utils = require('./Utils');

module.exports = {
  search: function (airline, { to, from, date }) {
    const outbound = moment(date).format('YYYY-MM-DD');

    return request.get(`http://node.locomote.com/code-task/flight_search/${airline}?${qs.stringify({ to: to.toUpperCase(), from: from.toUpperCase(), date: outbound })}`);
  },

  returnCheapest: function (results) {
    const newArr = Utils.isJson(results);

    return newArr.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
  }
};
