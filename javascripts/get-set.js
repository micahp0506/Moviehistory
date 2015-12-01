define(function(require){
  var $ = require("jquery");
  var Q = require("q");

  var deferred = Q.defer();
  var userID = null;
  var userMovieData = null;

  //Getters and Setterss for UID and movie object
  return {
    // Getting current userID
    getUid: function() {
        console.log("returning", userID);
        return userID;
    },
    // Setting current userID, coming from user-create or user-login
    setUid: function(newId){
        console.log("setting user id to ", newId);
        userID = newId;
      }
     
  };

});//end of define