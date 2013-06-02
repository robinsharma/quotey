App.populator('home', function (page) {

  // set current page to variable x
  var x = $(page);

  // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');

  // Default, placeholder quote.
  quote_div.html("\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms")
  //quote_div.html("You only live once, but if you do it right, once is enough. - Mae West");

  //Cause app to reload one title bar pressed
  x.find('.app-title').on('click', function() {
    App.load('home', 'fade');
  });

  // Acquire data from feed.
  cards.ready(function (){
    zAPI.getData(function(meta, quote){
      if(quote){
        loadquote(quote)
      }
    });
  });

  function loadquote(data) {
    quote_div.html(data[0].description);
  }

});

App.populator('About', function (page) {
  // put stuff here
});

try {
  App.restore();
}
catch (err) {
  App.load('home');
}