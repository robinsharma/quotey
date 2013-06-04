App.populator('home', function (page) {

  var x = $(page); // set current page to variable x
  var kik_button = $(x).find('.app-button.kik.right'); // Find location of kik button
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
    zAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });

  // Load the quote into quote-text
  function loadquote(q_data) {
    try { // try to run card stuff
      if (cards.kik.message) {
        q_data = cards.kik.message.data;
        quote = q_data[0].description;
        quote_div.html(quote);
        if (cards.kik.returnToConversation) {
          // Card was launched by a conversation
          cards.kik.returnToConversation(); // return to conversation
        }
      }
      else {
        quote = q_data[0].description;
        quote_div.html(quote);
      }
    } catch (e) { // catch dat shit if it ain't workin (quotey not opened in kik)
      quote = q_data[0].description;
      quote_div.html(quote);
    }
    /*
    if (cards.kik.message) {
      q_data = cards.kik.message.linkData;
      quote = q_data[0].description;
      quote_div.html(quote);
      if (cards.kik.returnToConversation) {
        // Card was launched by a conversation
        cards.kik.returnToConversation(); // return to conversation
      }
    }
    else {
      quote = q_data[0].description;
      quote_div.html(quote);
    }
    */

    // Handle kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        pic   : "img/quotey_icon.png" ,
        data  : q_data
      });
    });
  } 

/*
  function loadquote(q_data) {
    if (cards.kik.returnToConversation) {
      // Card was launched by a conversation
      cards.kik.returnToConversation(); // return to conversation
    }
    if(cards.kik.message) {
      quote = linkData[0].description;
      quote_div.html(quote);

    }else{
      quote = q_data[0].description;
      quote_div.html(quote);
    }
    // Handle kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        pic   : "img/quotey_icon.png" ,
        big   : true ,
        linkData: q_data
      });
    });
  } 
*/

// Hide kik button if card opened in browser
try {
  if(!cards.kik){
    kik_button.hide();
  }
} catch (e) {
  kik_button.hide();
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