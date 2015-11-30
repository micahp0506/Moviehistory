define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


	$("body").on("click", ".watched", function(){

			
			ref = new Firebase("https://moviehistorynew.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;
			console.log("this is", this);
			ref = ref.child(userID);
			var moKey = $(this).attr("id");
			console.log("moKey", moKey);
			ref = ref.child(moKey).update({ watched: "true", unwatched: null });
			

	});




















//end of module
});
	