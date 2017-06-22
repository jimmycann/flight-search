'use strict';

import autocomplete from './autocomplete';

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
  }
};
