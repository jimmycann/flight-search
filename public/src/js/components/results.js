'use strict';

export default {
  div: function (className) {
    return $('<div />', { class: className });
  },

  button: function (text, id) {
    return $('<button />', {
      text,
      type: 'button',
      class: 'btn btn-primary btn-lg dropdown-toggle',
      id
    });
  },

  form: function () {
    return $('<form />');
  },

  build: function () {
    $('.inner').remove();

    const inner = this.div('inner');

    inner.append(this.div('results'));

    $('.main').append(inner);
  }
};
