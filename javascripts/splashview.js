define(function(require) {
return {
    splashViewDisplay: function(data) {
      require(['hbs!../templates/splashview'], function (splashView){
        // Using jquery, we're telling our template to populate inside of the content div.
        $("#content").html(splashView(data));
      });
        // This hides the nav-bar because it's not usable until user logs in.
      $("#nav-bar").hide();
    }
  };
});