'use strict';

import Bluebird from 'bluebird';
import moment from 'moment';

import Airlines from './airlines';
import results from '../components/results';

export default {
  search: function (query) {
    return Airlines.findAll()
      .then(airlines => Bluebird.all(airlines.map(al => this.airlineFlightSearch(query, al.code))))
      .then(flights => this.sortAscPrice(flights))
      .tap(res => results.build(res, query));
  },

  sortAscPrice: function (flights) {
    return flights.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  },

  airlineFlightSearch: function ({ from, to, date }, airline) {
    return new Bluebird((resolve, reject) => $.ajax({
      type: 'GET',
      url: `/api/v1/flights/${airline}?from=${from}&to=${to}&date=${moment(date, 'DD-MM-YYYY').format('MM-DD-YYYY')}`,
      dataType: 'json',
      timeout: 10000,
      context: $('body'),
      success: function (data) {
        return resolve(data);
      },
      error: function (xhr, type) {
        return reject(new Error(xhr));
      }
    }));
  }
};
