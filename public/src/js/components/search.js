'use strict';

import autocomplete from './autocomplete';
import flights from '../model/flights';

export default {
  inner: function () {
    return $('<div />', { class: 'inner' });
  },

  button: function () {
    return $('<button />', {
      text: 'Search Flights',
      type: 'button',
      class: 'btn btn-primary btn-lg dropdown-toggle',
      id: 'search-flights'
    });
  },

  form: function () {
    return $('<form />');
  },

  buildQuery: function () {
    return Object.assign({}, {
      from: $('input[name=from]').val(),
      to: $('input[name=to]').val(),
      date: $('input[name=date]').val()
    });
  },

  build: function () {
    $('.inner').remove();

    const inner = this.inner();
    const form = this.form();

    form.append(autocomplete.build('from', 'Where are you leaving from?', 'Depart'));
    form.append(autocomplete.build('to', 'What is your destination?', 'Arrive'));
    form.append(autocomplete.build('date', 'When are you leaving? (DD-MM-YYYY)', 'Date'));
    form.append(this.button());

    inner.append(form);
    $('.main').append(inner);

    $('#search-flights').click(() => {
      return flights.search(this.buildQuery())
        .then(console.log)
        .catch(err => {
          console.error(err);
          return this.build();
        });
    });
  }
};
