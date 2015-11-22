define (function(require) { 
    console.log("whatever");

//Our first step is to add mouseover and mouseout handlers for the stars. We need to highlight the star the mouse is over, and all the preceding stars.
$('.ratings_stars').hover(
    // Handles the mouseover
    function() {
        $(this).prevAll().andSelf().addClass('ratings_over');
        $(this).nextAll().removeClass('ratings_vote'); 
    },
    // Handles the mouseout
    function() {
        $(this).prevAll().andSelf().removeClass('ratings_over');
        set_votes($(this).parent());
    }
);


});
