define(function (require) {

	return {

		findMovie: function () {


			
			$("#find-movie").on("click", function() {

			console.log("find-movie working");

				//need to get the value of move title
				var title = $("#new-movie").val();
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
			    	console.log(idNum)
			    	$.ajax({
				  type: "GET",	
			      url: "http://img.omdbapi.com/?i=" + idNum + "&apikey=7c212437",
			      dataType: "json"
			    	})
			    })	
			    .done(function(posterData) {
					console.log(posterData);
					var poster = posterData["Poster"];
					console.log(poster);
			    	require(["hbs!../templates/newMovies"], function(posterTemplate) {
	  			 
	  			 	$("#content").html(posterTemplate(posterData));
	  			 
	  			 	});
			    	


			      
			    })
			    .fail(function(xhr, status, error) {
			      
			      //end of ajax
			      });

			    
			    //end of event handler
			    
			    });
				



				
			//end of FindMovie	
			}



       //end of return
		};




		
	















//end of module
});