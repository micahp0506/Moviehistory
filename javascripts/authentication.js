define(function(require) {
	fb = require('firebase');

	var authInfo = null;


	var ref = new Firebase("https://mbt-movie-history.firebaseio.com");
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
  				}
			});

		},

	newUser: function (userEmail, userPassword){
		

	ref.createUser({
  email: userEmail,
  password: userPassword
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
    
    $("#content").html("");
    $("#nav-bar").show();

  }
});
	}


	}
});