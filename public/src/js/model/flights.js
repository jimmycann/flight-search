'use strict';

import Bluebird from 'bluebird';

import Airlines from './airlines';

export default {
  search: function () {
    const query = this.buildQuery();

    return Airlines.findAll()
      .then(airlines => Bluebird.all(airlines.map(al => this.airlineFlightSearch(query))));
  },

  buildQuery: function () {
    return Object.assign({}, {
      from: $('input[name=from]').val(),
      to: $('input[name=to]').val(),
      date: $('input[name=date]').val()
    });
  },

  airlineFlightSearch: function ({ from, to, date, airline }) {
    return new Bluebird((resolve, reject) => $.ajax({
      type: 'GET',
      url: `/api/v1/flights/QF?from=${from}&to=${to}&date=2017-12-12`,
      dataType: 'json',
      timeout: 10000,
      context: $('body'),
      success: function (data) {
        return resolve(data);
      },
      error: function (xhr, type) {
        console.error(xhr, type);
        return reject(new Error(xhr));
      }
    }));
  }
};
