'use strict';

module.exports = {
  returnArray: function (data) {
    const testArr = this.isJson(data);
    if (!testArr) {
      return [];
    }

    if (!Array.isArray(testArr)) {
      return [ testArr ];
    }

    return testArr;
  },

  isJson: function (data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }
};
