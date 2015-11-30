define(function (require) {
    var firebase = require("firebase");
    var _ = require("lodash");
    var newMovieObject;
    
    return {
        

        findMovie: function () {
            
            $("#find-movie").keyup(function (event) {
                key = event.which;
                
                if ( key === 13) {
            console.log("find-movie working");
                //need to get the value of move title
                var title = $("#find-movie").val();
                console.log("title", title);
                //search the api for the title
                

                    var ref = new Firebase("https://mbt-movie-history.firebaseio.com/users/");
                    console.log("ref", ref);
                    var user = ref.getAuth();
                    var userID = user.uid;
                    console.log("userID", userID);
                    ref = ref.child(userID);
                    console.log("ref", ref);
                    

                    var firebaseResults = ref.orderByChild("title").equalTo(title);
                    console.log(firebaseResults);
                    

                    //checks the firebase for the title and runs the template if it does
                    firebaseResults.once("value", function (snapshot){

                        var dataSnapshot = snapshot.val();

                        var searchSnapshot = _.filter(dataSnapshot, function(snapshotObject) {

                    if (_.includes(snapshotObject.id, "id")){
                        console.log("snapshotObject", snapshotObject.id);
                        return snapshotObject;
                    } 
                    console.log(snapshotObject);

                    

                    
                    
                    require(["hbs!../templates/foundWatched"], function(posterTemplate) {
                 
                        $("#content").html(posterTemplate(snapshotObject));

                            });
                


                         

                    });
                        //runs the ajax if the title is not found in the firebase
                    if (dataSnapshot === null) {

                        findStuff();
                    }
                    console.log("dataSnapshot", dataSnapshot);

                });


                    //I made a function for this because I could not get the ajax to 
                    //run inside the firebase .once() function
        function findStuff () {
                title = title.replace(" ", "%");
                    
                $.ajax({
                  type: "GET",  
                  url: "http://www.omdbapi.com/?s=" + title + "&y=&plot=shorta&r=json",
                  dataType: "json"
                })
                .done(function(titleData) {
                    
                    

                    newMovieObject = titleData;
                    searchMovie = newMovieObject.Search;
                    console.log(searchMovie);

                    for(var i = 0; i < searchMovie.length; i++) {

                        var id = searchMovie[i].imdbID; 
                      var poster = searchMovie[i].Poster;
                        console.log("ID", id, poster)
                       
                       if (poster !== "N/A" ) {

                        searchMovie[i].posterUrl = "http://img.omdbapi.com/?i=" + id + "&apikey=7c212437";
                        };
                        

                    };
                    console.log(searchMovie);

                    require(["hbs!../templates/newMovies"], function(posterTemplate) {
             
                        $("#content").html(posterTemplate({searchMovie: searchMovie}));
                    });
                })

                        }
                    //end of "enter-key" if statement
                    $("#find-movie").val("");
                    }
                //end of search bar event listener

                });

        //end of find movie     
            },          
                
        
        getMovie: function () {

            return newMovieObject;
            

        }
    };
    
                
                
            
  
        
    
//end of module
});