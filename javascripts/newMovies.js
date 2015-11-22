requirejs(
  ["dependencies"], 
  function(dependencies) {

return {
	newMovie: function(addMovie){
		$("#body").on("click", "#heart", function (addMovie){

			var newMovie = {

				title: addMovie["Title"],
				actors: addMovie["Actors"],
				year: addMovie["Year"],
				watched: "false"




			}


		})
	}
	
}


   

});