define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


			$("body").on("click", ".delete", function() {
			ref = new Firebase("https://moviehistorynew.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;
			
			ref = ref.child(userID);
			var movieKey = $(this).attr("id");
			ref = ref.child(movieKey);
			console.log("delte ref", ref);
			ref.remove();

			var ref = new Firebase("https://moviehistorynew.firebaseio.com/users/");
			console.log("ref", ref);
			var user = ref.getAuth();
			var uid = user.uid;
			ref = ref.child(uid);

			ref.on("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				require(["hbs!../templates/allMovies"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 			});
			});
			
  				});



//end of module
});