/*
 * Home Page Populator
 * 
 * Static home page. No js needed
 *
 */
App.populator('home', function (page) {
  //changing colours?
});

var index = 0;
var init_quote1 = "\"and that, ladies and gentlemen, was when quotey started loading...\"";
var global_quotes = "";
var flag = 0;
App.populator('r_quotes', function (page) {

// Acquire data form feed
  cards.ready(function (){
    r_quotesAPI.getData(function(meta, quotes_data){
      if(quotes_data){
        global_quotes = quotes_data;
        loadquote();
      }
    });
  });


  var x = $(page); // set r_quotes HTML page to variable x

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
  if(os.android) {
    // Hide back button if not in iOS
    back_button.hide();
  } else {
    // Else declare its functionality
    back_button.on('click', function() {
      App.load('home', 'slide-right');
    });

    if(!os.ios) {
      x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
    }
  }

  // Find quote container location
  var quote_div = x.find('.quote-text');

  // populate it with loading quote or initial quote
  quote_div.html(init_quote1);

  // Declare/set up next quote button
  var prev = x.find('#prev_quote');
  var next = x.find('#next_quote');
  prev.disabled = true;
  prev.hide();   

  prev.on('click', function() {
    next.disabled = false;
    next.show();
    if (flag == 1) {
      index -= (1*flag);
      flag = 0;
    }   
    if (index == 1) {
      index -= 1;
      prev.disabled = true;
      prev.hide();    
    }

    else if (index != 0){
      prev.disabled = false;
      prev.show();   
      index -= 1;
    }
    loadquote();
  }); 

  next.on('click', function() {
    prev.disabled = false;
    prev.show(); 
    if (index == 23) {
      index += 1;
      next.disabled = true;
      next.hide();    
    }

    else if (index != 24){
      next.disabled = false;
      next.show();   
      index += 1;
    }
    loadquote();
  }); 

  x.find('#reload_quote').on('click', function() {
    index = 0;
    init_quote1 = "\"and that, ladies and gentlemen, was when quotey started loading...\"";
    App.load('r_quotes', 'fade');
    App.removeFromStack(-1);
  });

  // loadquote function loads the quote acquired from rss feed and displays it in the quote container
  function loadquote() {
    quote = global_quotes[index].title;
    //var regexNum = /\d/g;
    var check = quote.indexOf("quotes");
    var infinite_loop_prevent = 0;
    while (check > -1 && infinite_loop_prevent < 2){
      if (index < 25) {
        index += 1;
        flag += 1;
      }
      else {
        index = 0
        infinite_loop_prevent += 1;
      }
      quote = global_quotes[index].title;
      var check = quote.indexOf("quotes");
    }
    init_quote1 = quote;
    quote_div.html(quote);

    //Set up kik button
    kik_button.click( function () {
      cards.kik.send({
        title : 'Quote:' ,
        text  : quote ,
        data  : { q : quote }
      });
    });
  }

});

/*
 * Random Quotes Page populator
 * 
 * Acquires and displays random quotes from the zAPI.js
 *
 */
var init_quote = "\"quotey would like to load now...\" - luckysharms";
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
  if(os.android) {
    // Hide back button if not in iOS
    back_button.hide();
  } else {
    // Else declare its functionality
    back_button.on('click', function() {
      App.load('home', 'slide-right');
    });

    if(!os.ios) {
      x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
    }
  }

  // Find quote container location
  var quote_div = x.find('.quote-text');

  // populate it with loading quote or initial quote
  quote_div.html(init_quote);

  // Declare/set up next quote button
  x.find('#next_quote').on('click', function() {
    App.load('Random', 'fade');
    App.removeFromStack(-1);
  }); 

  // loadquote function loads the quote acquired from rss feed and displays it in the quote container
  function loadquote(q_data) {
    quote = q_data[0].description;
    init_quote = quote;
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
  }

  var quote = "\"And on the eleventh day quotey was loading...\" - luckysharms"; // find the location on the page where the quote will go
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
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');  
  }

  var quote = "\"Hold on! quotey needs to load...\" - luckysharms"; // find the location on the page where the quote will go
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
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
  }

  var quote = "\"Initiating quotey loading sequence...\" - luckysharms"; // find the location on the page where the quote will go
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
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
  }

  var quote = "\"Load quotey loooooad...\" - luckysharms"; // find the location on the page where the quote will go
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
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
  }

  var quote = "\"Yay! quotey is loading :)...\" - luckysharms"; // find the location on the page where the quote will go
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
    quote_div.html(quote);

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
  back_button.on('click', function() {
    App.load('home', 'slide-right');
  });
  var os = cards.utils.platform.os;
  if(os.android) {
    back_button.hide();
  } else if(!os.ios) {
    x.find('.app-title.main').css('text-align', 'center').css('padding-left', '0px');
  }
});


App.populator('preview', function (page, data) {
  var x = $(page);
  var back_button = x.find('.app-button.back.left');
  var quote = data.q;

  var quote_div = x.find('.quote-text');

  quote_div.html(quote);

  var os = cards.utils.platform.os;

  if(!os.ios) {
    back_button.hide();
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