module.exports = {
  search: function (input) {
    $.ajax({
      type: 'GET',
      url: `/api/v1/airports/${input}`,
      dataType: 'json',
      timeout: 1000,
      context: $('body'),
      success: function (data) {
        this.append(JSON.stringify(data));
      },
      error: function (xhr, type) {
        console.error(xhr, type);
      }
    });
  }
};
