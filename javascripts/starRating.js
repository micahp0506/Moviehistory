define (function(require) { 
   var $ = require("jquery");
    var firebase = require("firebase");

    $("body").on("click", ".star5", function(){


        console.log("star5 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 5, favorite: "true" });

       


    });
$("body").on("click", ".star4", function(){


        console.log("star4 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 4, favorite: null });

       


    });
$("body").on("click", ".star3", function(){


        console.log("star3 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 3, favorite: null });

       


    });
$("body").on("click", ".star2", function(){


        console.log("star2 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 2, favorite: null });

       


    });
$("body").on("click", ".star1", function(){


        console.log("star1 clicked")

        ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/")
            
            var user = ref.getAuth();
            var userID = user.uid;
            var movieKey = $(this).attr("id");
            console.log("this is", this)
            ref = ref.child(userID);
            ref = ref.child(movieKey);
            ref.update({rating: 1, favorite: null });

       


    });













   });//end of module