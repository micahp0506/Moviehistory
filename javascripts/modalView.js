define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


	$("body").on("click", ".movie-info", function(){

			console.log("clicked the poster");
			ref = new Firebase("https://moviehistorynew.firebaseio.com/users/")
			
			var user = ref.getAuth();
			var userID = user.uid;
			console.log("this is", this);
			ref = ref.child(userID);
			var moKey = $(this).attr("id");
			console.log("moKey", moKey)
			ref = ref.child(moKey);
			ref.once("value", function (snapshot){

			    		var dataSnapshot = snapshot.val();
			require(["hbs!../templates/movieModal"], function(modalTemplate) {
	  			 
	  			 		$("#modal-body").html(modalTemplate(dataSnapshot));

	  			 			})
		});
			

	});

});

