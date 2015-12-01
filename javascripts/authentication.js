define(function(require) {
	fb = require('firebase');
	var gs = require("get-set");

	var authInfo = null;
	var ref = new Firebase("https://moviehistorynew.firebaseio.com");
	return {
	login: function (userEmail, userPassword) {
		
		
	ref.authWithPassword({
	email: userEmail,
	password: userPassword
	}, 
	function (error, authData) {
  		if (error) {
    		console.log("Login Failed!", error);
  		} else {
    		console.log("Authenticated successfully with payload:", authData);
    		$("#content").html("");
    		$("#nav-bar").show();
    		$("#nav-links").show();
    		
    		//fetch data from firebase based on login info 
    		var ref = new Firebase("https://moviehistorynew.firebaseio.com/users/");
			console.log("ref", ref);
			var user = ref.getAuth();
			var uid = user.uid;
			console.log("uid", uid);
			// Sending uid to setter to be able to access later
			gs.setUid(uid);
			ref = ref.child(uid);
			console.log("ref", ref);
			
			

			ref.once("value", function(snapshot){

				var snapshotObject = snapshot.val();
				console.log(snapshotObject);

				require(["hbs!../templates/allMovies"], function(posterTemplate) {
	  			 
	  			 		$("#content").html(posterTemplate(snapshotObject));

	  			 			});
			});
    		
  				}
			});
		},
	newUser: function (userEmail, userPassword){


		ref.createUser({
		  		email: userEmail,
	  			password: userPassword,
			}, function(error, userData) {
				console.log("yoo")
      			var ref = new Firebase("https:https://moviehistorynew.firebaseio.com/users/" + userData.uid);
      			console.log("???????", userData);
			  if (error) {
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
        		console.log("inside");
        		ref.set({
          			"user_uid": userData.uid
        		});
        		gs.setUid(userData.uid);
			    console.log("Successfully created user account with uid:", userData.uid);
			  	}
			  	$("#content").html("");
	    		$("#nav-bar").show();
			});
		},  	
		
// 		ref.createUser({
// 	  email: userEmail,
// 	  password: userPassword
// }, 
// 	function(error, userData) {
// 		var authData = ref.getAuth();
// 		console.log(authData);
// 		if (error) {
// 			console.log("Error creating user:", error);
// 		} else {
// 		    console.log("Successfully created user account with uid:", userData.uid);
// 	   		ref.authWithPassword({
// 				email: userEmail,
// 				password: userPassword
// 			}, function (error, authData) {
//   				if (error) {
//     				console.log("Login Failed!", error);
//   				} else {
//     				console.log("Authenticated successfully with payload:", authData);
//   				}
// 			});
// 		    // log user in, set authData = ref.getAuth();
// 			var usersFirebase = ref.child("users");
// 		    var userExists = false;
// 		    var uid = authData.uid;

		 

// 		    usersFirebase.once("value", function(dataSnapshot) {
// 		    	dataSnapshot.forEach(function(childSnapshot) {
// 			    	if (childSnapshot.val().uid === authData.uid) {
// 			    		userExists = true;
// 			    	}
// 		    	});
// 			    if (userExists === false) {
// 			    	usersFirebase.child(uid).set({

// 			    		authData: authData
			    		
// 			    	});
// 			    }
// 		    });
	    
// 	    		$("#content").html("");
// 	    		$("#nav-bar").show();
// 	  				}
// 				});
// 			},
			logOut: function () {
                // Logging out
                 
                 console.log("did it click");
                  ref.unauth();
                  
                  console.log("you have logged out");
		}
	};
	});