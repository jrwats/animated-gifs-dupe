$(function() {
  $('#submit').click(function(event) {
    var url = $('#url').val();
    var results = $('#results');
    $.getJSON('/check', {url: url}, function(data) {
      if (!data.exists) {
        results.text('Looks unique!');
      } else {
        for (var i = 0; i < data.urls.length; i++) {
          var x = data.urls[i];
          results.text(results.text() + '\n' + x);
        }
      }
    });
  });
});
