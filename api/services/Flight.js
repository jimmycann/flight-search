'use strict';

const qs = require('querystring');
const moment = require('moment');
const request = require('request-promise');

module.exports = {
  search: function (airline, { to, from, date }) {
    const outbound = moment(date).format('YYYY-MM-DD');

    return request.get(`http://node.locomote.com/code-task/flight_search/${airline}?${qs.stringify({ to, from, date: outbound })}`);
  }
};
