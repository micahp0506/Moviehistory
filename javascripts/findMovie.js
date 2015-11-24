define(function (require) {
	
	var newMovieObject;
	
	return {
		

		findMovie: function () {
			
			$("#find-movie").keyup(function (event) {
				key = event.which
				console.log(event.key);
				if ( key === 13) {
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
			    $("#find-movie").val(" ");
				};

			    
			});			
				
		},
		getMovie: function () {

			return newMovieObject;
			

		}
	};
	
			    
				
			
  
		
	
//end of module
});