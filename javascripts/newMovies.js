define(function (require) {
	var firebase = require("firebase");
	var getNewMovie = require("findMovie");


return {

	newMovie: function(){
	


	console.log();

		var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
		console.log("ref", ref);
		var user = ref.getAuth();
		var uid = user.uid;

		$("body").on("click", "#heart", function (){
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
				watched: "false"
				
			};
			ref.child(uid).push(newMovie);
			console.log(newMovie);
			
			

				//end of click function
			    });

			//end of newMovie()
			}
		//end of return
		};
	
});