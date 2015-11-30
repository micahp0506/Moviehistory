define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


	$("#watched").on("click", function(){
		console.log("watched clicking fine");
			
			ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
			
			var user = ref.getAuth();
			var userID = user.uid;
			console.log("this is", this);
			ref = ref.child(userID);
			
			ref.on("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				require(["hbs!../templates/watched"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 			})
			})
			
  				});

			

	});






