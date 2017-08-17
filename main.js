const API_KEY = 'FBVLnLhjifmshnoctoI9vwM8zF6Xp1izu7KjsnZPNpE95HKLWL';

function fetchQuote(callback) {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10"', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    dataType: 'json',
    success: callback,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", API_KEY); // Enter here your Mashape key
    }
  });
}

$(document).ready(function () {
  $quote = $('.quote');
  $author = $('.author');
  fetchQuote(function (data) {
    $quote.text(data.quote);
    $author.html("&mdash;&nbsp;&nbsp;" + data.author);
  });
  $button = $('button.refresh');
  $button.click(function (e) {
    fetchQuote(function (data) {
      console.log(data);
      $quote.text(data.quote);
      $author.html("&mdash;&nbsp;&nbsp;" + data.author);
    });
  });
});
