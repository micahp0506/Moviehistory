define(function (require) {
	var firebase = require("firebase");
	var getNewMovie = require("findMovie");


return {

	newMovie: function(){
	


	console.log();

		

		$("body").on("click", ".add-button", function (){
		
		var ref = new Firebase("https://moviehistorynew.firebaseio.com/users/");
		console.log("ref", ref);
		var user = ref.getAuth();

		var uid = user.uid;
		ref = ref.child(uid);
			console.log("heart clicked");
			var title = $(this).attr("id");
			console.log(this);
			var newMovieObject = getNewMovie.getMovie(title);
			console.log(newMovieObject);

			var newMovie = {

				title: newMovieObject["Title"],
				actors: newMovieObject["Actors"],
				year: newMovieObject["Year"],
				poster: newMovieObject["Poster"],
				plot: newMovieObject["Plot"],
				id: newMovieObject["imdbID"],
				unwatched: "true",
				rating: 1
				
				
			};

			ref.push(newMovie);

			console.log(newMovie);
			
			$(this).parent().remove();

				//end of click function
			    });

			//end of newMovie()
			}
		//end of return
		};
	
});