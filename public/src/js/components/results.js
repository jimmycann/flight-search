'use strict';

import moment from 'moment';

import search from './search';
import flights from '../model/flights';

export default {
  div: function (className, text = null) {
    return $('<div />', { class: className, text });
  },

  flightTile: function (flt) {
    return this.div('panel panel-default')
      .append(this.div('panel-heading', `${flt.airline.name} ${flt.airline.code}${flt.flightNum} - From $${flt.price}AUD`));
  },

  button: function (text, id = null) {
    return $('<button />', {
      text,
      type: 'button',
      class: 'btn btn-primary btn-lg dropdown-toggle',
      id
    });
  },

  tab: function (query, date, active = null) {
    const link = $('<a />', { href: '#', text: date });
    link.click(() => flights.search(Object.assign({}, query, { date })));

    return $('<li />', {
      role: 'presentation',
      class: active
    }).append(link);
  },

  tabs: function (query) {
    const nav = $('<ul />', { class: 'nav nav-tabs' });

    nav.append(this.tab(query, moment(query.date, 'DD-MM-YYYY').subtract(2, 'days').format('DD-MM-YYYY')));
    nav.append(this.tab(query, moment(query.date, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY')));
    nav.append(this.tab(query, query.date, 'active'));
    nav.append(this.tab(query, moment(query.date, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY')));
    nav.append(this.tab(query, moment(query.date, 'DD-MM-YYYY').add(2, 'days').format('DD-MM-YYYY')));

    return nav;
  },

  build: function (results, query) {
    $('.inner').remove();

    const inner = this.div('inner');
    inner.append(this.tabs(query));

    const resultDiv = this.div('results');
    inner.append(resultDiv);
    resultDiv.append(results.map(flt => this.flightTile(flt)));

    inner.append(this.button('New Search', 'return-flights'));

    $('.main').append(inner);

    $('#return-flights').click(() => search.build());
  }
};
