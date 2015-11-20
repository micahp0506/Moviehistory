define(function (require) {

	return {

		findMovie: function () {


			
			$("#find-movie").on("click", function() {

			console.log("find-movie working");

				//need to get the value of move title
				var title = $("#new-movie").val();
				console.log("title", title);
				//search the data base for the title
				$.ajax({
			      url: "http://img.omdbapi.com/?apikey=[yourkey]&"
			    })
			    .done(function(response) {
			      // Resolve the promise
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