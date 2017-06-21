'use strict';

import Bluebird from 'bluebird';

export default {
  findAll: function () {
    return new Bluebird((resolve, reject) => $.ajax({
      type: 'GET',
      url: `/api/v1/airlines`,
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
