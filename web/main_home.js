App.populator('home', function (page) {

  var x = $(page); // set current page to variable x
  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = $(x).find('.quote-text');
  quote_div.html(quote); // Default, placeholder quote.
  //quote_div.html("You only live once, but if you do it right, once is enough. - Mae West");

  //Cause app to reload one title bar pressed
  $(x).find('.app-title').on('click', function() {
    App.load('home', 'fade');
  });

  // Acquire data from feed.
  cards.ready(function (){
    zAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });

  // Load the quote into quote-text
  function loadquote(data) {
    quote = data[0].description;
    quote_div.html(quote);
  } 

  $(x).find(".app-button.kik.right").click( function () {
    var messageText = $(quote);
    cards.kik.send({
      title : 'Incoming Message!' ,
      text  : 'This will self-destruct 3 seconds after opening.' ,
    })
  });

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