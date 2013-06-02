App.populator('home', function (page) {

  // set current page to variable x
  var x = $(page);

  // find the location on the page where the quote will go


  //Cause app to reload one title bar pressed
  x.find('.app-title').on('click', function() {
    App.load('home', 'fade');
  });

  cards.ready(function (){
    zAPI.getData(function(meta, quote){
      if(quote){
        loadquote(quote)
      }
    });
  });

  function loadquote(data) {
    x.find('.app-section').html(data[0].description);
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