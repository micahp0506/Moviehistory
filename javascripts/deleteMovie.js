define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


			$("body").on("click", ".delete", function() {
			ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
			
			var user = ref.getAuth();
			var userID = user.uid;
			
			ref = ref.child(userID);
			var movieKey = $(this).attr("id");
			ref = ref.child(movieKey);
			ref.remove();
			
  				});

//end of module
});