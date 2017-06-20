'use strict';

module.exports = [{
  path: '/api/v1/airlines',
  method: 'get',
  handler: { airlines: {} },
  config: {
    plugins: { errorh: false }
  }
}];
