define(function (require) {
	
	var newMovieObject;
	
	return {
		
		findMovie: function () {

			$("#find-movie").keypress(function(event){
				console.log("find-movie");
			    if(event.keyCode == 13){
				    console.log("enter pressed");
				    event.preventDefault();	
				    searchForMovie();
			    }
			});			
			function searchForMovie(){
			console.log("find-movie working");
			//need to get the value of move title
			var title = $("#find-movie").val();
			console.log("title", title);
			//search the api for the title
			$.ajax({
			  type: "GET",	
		      url: "http://www.omdbapi.com/?" + "t=" + title + "&y=&plot=shorta&r=json",
		      dataType: "json"
		    })
		    .done(function(titleData) {
		    	
		    	var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/" + userId);
				var firebaseResults = ref.orderByChild("title").equalTo(title);



		    	var idNum = titleData["imdbID"];
		    	console.log(titleData);
		    	console.log(idNum);
		    	
		    	//puts the img url into an object so it can be passed into the handlebars template
					var posterObject= { poster : "http://img.omdbapi.com/?i=" + idNum + "&apikey=7c212437" };
					console.log(posterObject);
		    	require(["hbs!../templates/newMovies"], function(posterTemplate) {
  			 
  			 		$("#content").prepend(posterTemplate(posterObject));
  			 	});
		    	newMovieObject = titleData;
		    	console.log(newMovieObject);
		    	
	  			 
	  		}); 
		}	    
			
			
		},
		
		

		getMovie: function () {

			return newMovieObject;//this picks the last movie selected instead of the clicked movie
			

		}
	};
//end of module
});
