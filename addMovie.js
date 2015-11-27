define(function (require) {

	return addSong: function () {
		

		$("body").on("click", "#heart" function(){

			console.log("Hi")
			$.ajax({
				  type: "POST",	
			      url: "https://mbt-movie-history.firebaseio.com/myMovies.json",
			      data: JSON.stringify(newMovie)})
			    })
			    .done(function() {




			    	//end of .done()
			    })







			//end of event listener
		})


		//end of addSong
	}


















//end of module

}):
