App.populator('home', function (page) {
  // implement slowly changing colours?
});

App.populator('Random', function(page) {

  var x = $(page);
  var kik_button = $(x).find('.app-button.kik.right');
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }
  var quote_div = $(x).find('.quote-text');
  var quote = "\"<b>quotey</b> is loading...\" - luckysharms";

  quote_div.html(quote);


  $(x).find('#next_quote').on('click', function() {
    App.load('Random', 'fade');
  });

  $(x).find('.app-button.back.left').on('click', function() {
    App.load('home', 'slide-right');
  });

  cards.ready(function (){
    zAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });

  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.html(quote);
  }


});

App.populator('About', function (page) {
  var x = $(page);
  var back_button = $(x).find('.app-button.back.left');
  var os = cards.utils.platform.os;
  //typeof os.name    === 'android'; // 'ios', 'android', 'osx', 'windows', etc
  if(os.android) {
    back_button.hide();
  }
});

App.populator('preview', function(page, data){
  var x = $(page);
  var kik_button = $(x).find('.app-button.kik.right');
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }
  var quote_div = $(x).find('.quote-text');
  var quote = data.description;

  quote_div.html(quote);
});

App.populator('Inspirational', function (page) {

  var x = $(page); // set current page to variable x
  var kik_button = $(x).find('.app-button.kik.right'); // Find location of kik button
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }
  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = $(x).find('.quote-text');
  
  quote_div.html(quote); // Default, placeholder quote.
  //quote_div.html("You only live once, but if you do it right, once is enough. - Mae West");
  
  //Cause app to reload one title bar pressed
  $(x).find('#next_quote').on('click', function() {
    App.load('home', 'fade');
  });

  // Acquire data from feed.
  cards.ready(function (){
    inspireAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });



  // Load the quote into quote-text
  function loadquote(q_data) {
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        pic   : "img/quotey_icon.png" ,
        data  : q_data[0]
      });
    });
    quote = q_data[0].description;
    quote_div.html(quote);

  } 

  try {
    if (cards.kik.returnToConversation) {
      // Card was launched by a conversation
      cards.kik.returnToConversation(); // return to conversation
    }
  } catch (e) {

  }
});

try {
  App.restore();
}
catch (err) {
  App.load('home');
}