define(function(require) {
var ref = new Firebase("https://mbt-movie-history.firebaseio.com/");
ref.authWithPassword({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, authData) { /* Your Code */ }, {
  remember: "sessionOnly"
});
});