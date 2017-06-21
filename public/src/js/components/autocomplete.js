'use strict';

module.exports = {
  div: function () {
    return $('<div />', { class: 'input-group input-group-lg ac' });
  },

  span: function (text) {
    return $('<span />', { text, class: 'input-group-addon' });
  },

  input: function (name, placeholder) {
    return $('<input />', { name, placeholder, class: 'form-control', type: 'text' });
  },

  build: function (name, placeholder, spanText) {
    const div = this.div();
    div.append(this.span(spanText));
    div.append(this.input(name, placeholder));

    return div;
  }
};
