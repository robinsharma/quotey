App.populator('home', function (page) {

  // set current page to variable x
  var p = $(page);

  // find the location on the page where the quote will go

  //Cause app to reload one title bar pressed
  p.find('.app-title').on('click', function() {
    App.load('home', 'fade');
  });

  cards.ready(function (){
    zAPI.getData(function(meta, quote){
      if(quote){
        loadquote(quote)
      }
    });
  });
  function loadquote(data){

    /* Unreal SlideViewer
    - some maths to make slideViewer to function incoherent with topBar & titleBar;
    */
    var wrapper = page.querySelector('.wrapper');

    var height = (p.height() - (p.find(".titleBar").height() + p.find(".app-topbar").height()));
    wrapper.innerHTML = '';
    wrapper.style.height = height + "px";

/*
    var slideViewer = new SlideViewer(wrapper, source,{startAt: 0, length: 30});
    p.find(".app-button.right").click(function(){
      k = slideViewer.page();

      cards.kik.send({
          title: data[k].title,
          text: 'So funny it\'s UNREAL',
          linkData: JSON.stringify(data[k])
      });
    });


    slideViewer.on('flip', function(i){
         if (i >= 0){
              p.find('.titleBar').html(data[i].title);
         }else {
              return;
         }                 
    });
*/

    /*
    - Force dat SlideViewer to set the title of the first post
    */
    p.find('.titleBar').html(data[0].description);
  }

});

App.populator('page2', function (page) {
  // put stuff here
});

try {
  App.restore();
}
catch (err) {
  App.load('home');
}