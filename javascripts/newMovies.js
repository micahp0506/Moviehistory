define(function (require) {

return {
	newMovie: function(addMovie){
		$("body").on("click", "#heart", function (){
			console.log("hey");
			var newMovie = {

				title: addMovie.Title,
				actors: addMovie.Actors,
				year: addMovie.Year,
				watched: "false"




			};


		});
	}
	
};


   

});