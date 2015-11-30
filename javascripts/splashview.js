define(function(require) {
return {
    splashViewDisplay: function(data) {
      require(['hbs!../templates/splashview'], function (splashView){
        //jquery to grab the dom element where we want to put our songs
        //use songTemplate on data to generate html
        //insert html into dom
        $("#content").html(splashView(data));
      });

      $("#nav-bar").hide();
      $("#nav-links").hide();
    }
  };
});