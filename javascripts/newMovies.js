define(function (require) {
	var firebase = require("firebase");
	var getNewMovie = require("findMovie");


return {

	newMovie: function(){
	


	console.log();

		

		$("body").on("click", "#heart", function (){
		
		var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
		console.log("ref", ref);
		var user = ref.getAuth();

		var uid = user.uid;
		ref = ref.child(uid);
			console.log("heart clicked");
			var newMovieObject = getNewMovie.getMovie();
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