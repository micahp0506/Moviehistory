define(function (require) {
	var $ = require("jquery");
	var firebase = require("firebase");
	


	$("#favorite").on("click", function(){
		console.log("favorite clicking fine");
			
			ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
			
			var user = ref.getAuth();
			var userID = user.uid;
			
			ref = ref.child(userID);
			
			ref.on("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				require(["hbs!../templates/favorites"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 		});
				});	
			
	  	});

			

});






