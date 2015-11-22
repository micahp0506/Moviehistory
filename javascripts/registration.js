define(function(require) {
var ref = new Firebase("https://mbt-movie-history.firebaseio.com/");
ref.createUser({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});
});