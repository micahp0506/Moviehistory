define(function(require) {
	var ref = new Firebase("https://mbt-movie-history.firebaseio.com/");
	ref.authWithPassword({
	  email    : "bobtony@firebase.com",
	  password : "correcthorsebatterystaple"
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	  	
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
});