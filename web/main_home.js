/*
 * Home Page Populator
 * 
 * Static home page. No js needed
 *
 */
App.populator('home', function (page) {
  //changing colours?
});

/*
 * Random Quotes Page populator
 * 
 * Acquires and displays random quotes from the zAPI.js
 *
 */

App.populator('Random', function (page) {

  // Acquire data form feed
  cards.ready(function (){
    zAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });

  var x = $(page); // set Random HTML page to variable x

  // Find kik button
  var kik_button = x.find('.app-button.kik.right');
  
  // hide the kik button if opened in broswer and not kik
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  //typeof os.name    === 'android'; // 'ios', 'android', 'osx', 'windows', etc
  if(!os.ios) {
    // Hide back button if not in iOS
    back_button.hide();
  } else {
      // Else declare its functionality
      back_button.on('click', function() {
        App.load('home', 'slide-right');
      });
  }

  // Find quote container location
  var quote_div = x.find('.quote-text');
  var quote = "\"<b>quotey</b> is loading...\" - luckysharms";

  // populate it with loading quote
  quote_div.html(quote);

  // Declare/set up next quote button
  x.find('#next_quote').on('click', function() {
    App.load('Random', 'fade');
    App.removeFromStack(-1);
  }); 

  // loadquote function loads the quote acquired from rss feed and displays it in the quote container
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }

});

App.populator('Inspirational', function (page) {


  var x = $(page); // set Inspirational HTML page to variable x
  var kik_button = x.find('.app-button.kik.right'); // Find location of kik button
  //Hide kik button if linked opened in browser (not kik)
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  // hide back button if not in iOS
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }

  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');
  //Set loading quote
  quote_div.html(quote); // Default, placeholder quote.

  // Acquire quote form rss feed
  cards.ready(function (){
    inspireAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });
  // Load the quote into quote-text
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }
});

App.populator('Funny', function (page) {


  var x = $(page); // set Inspirational HTML page to variable x
  var kik_button = x.find('.app-button.kik.right'); // Find location of kik button
  //Hide kik button if linked opened in browser (not kik)
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  // hide back button if not in iOS
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }

  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');
  //Set loading quote
  quote_div.html(quote); // Default, placeholder quote.

  // Acquire quote form rss feed
  cards.ready(function (){
    funnyAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });
  // Load the quote into quote-text
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }
});

App.populator('Love', function (page) {


  var x = $(page); // set Inspirational HTML page to variable x
  var kik_button = x.find('.app-button.kik.right'); // Find location of kik button
  //Hide kik button if linked opened in browser (not kik)
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  // hide back button if not in iOS
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }

  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');
  //Set loading quote
  quote_div.html(quote); // Default, placeholder quote.

  // Acquire quote form rss feed
  cards.ready(function (){
    loveAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });
  // Load the quote into quote-text
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }
});

App.populator('Friendship', function (page) {


  var x = $(page); // set Inspirational HTML page to variable x
  var kik_button = x.find('.app-button.kik.right'); // Find location of kik button
  //Hide kik button if linked opened in browser (not kik)
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  // hide back button if not in iOS
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }

  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');
  //Set loading quote
  quote_div.html(quote); // Default, placeholder quote.

  // Acquire quote form rss feed
  cards.ready(function (){
    friendAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });
  // Load the quote into quote-text
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }
});


App.populator('QuotesDaddy', function (page) {


  var x = $(page); // set Inspirational HTML page to variable x
  var kik_button = x.find('.app-button.kik.right'); // Find location of kik button
  //Hide kik button if linked opened in browser (not kik)
  try {
    if(!cards.kik){
      kik_button.hide();
    }
  } catch (e) {
    kik_button.hide();
  }

  // hide back button if not in iOS
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }

  var quote = "\"And on the eleventh day <b>quotey</b> was loading...\" - luckysharms"; // find the location on the page where the quote will go
  var quote_div = x.find('.quote-text');
  //Set loading quote
  quote_div.html(quote); // Default, placeholder quote.

  // Acquire quote form rss feed
  cards.ready(function (){
    quotesdaddyAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        loadquote(quotes_data);
      }
    });
  });
  // Load the quote into quote-text
  function loadquote(q_data) {
    quote = q_data[0].description;
    quote_div.text(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : q_data[0].description }
      });
    });
  }
});


App.populator('About', function (page) {
  var x = $(page);
  var back_button = x.find('.app-button.back.left');
  var os = cards.utils.platform.os;
  if(!os.ios) {
    back_button.hide();
  }
});


App.populator('preview', function (page, data) {
  var x = $(page);
  var back_button = x.find('.app-button.back.left');
  var quote = data.q;

  var quote_div = x.find('.quote-text');

  quote_div.text(quote);

  var os = cards.utils.platform.os;

  if(!os.ios) {
    back_button.hide();
  } else {
    x.find('#previewHome').hide();
  }

  var kik_button = x.find('.app-button.kik.right');

  try {
    if(!cards.kik){
      kik_button.hide();
    } 
    else {
      kik_button.click( function () {
        cards.kik.send({
          title : 'Quote:' ,
          text  : quote ,
          data  : { q : quote }
        });
      });
    }
  } catch (e) {
    kik_button.hide();
  }
});

if(cards.kik && cards.kik.message) {
  App.load('preview', cards.kik.message);
  App.addToStack(0, ['home']);
} else {
  App.load('home');
}