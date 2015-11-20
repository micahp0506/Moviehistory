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
			    	require()

			    	require(["hbs!../templates/newMovies"], function(posterTemplate) {
	  			 
	  			 	$("#content").html(posterTemplate(titleData));
	  			 
	  			 	});
			    	console.log(titleData);


			      
			    })
			    .fail(function(xhr, status, error) {
			      // Reject the promise
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