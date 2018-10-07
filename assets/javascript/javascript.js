

var topics = [ "balloons", "stuffed animals", "bears", "cotton candy", "friends"]; // array of items from carnival 
        // that we will create buttons for and add to html page
   
    var buttonArray; // this creates the buttons from the 'topics' array above.
    for (var index in topics) {
        buttonArray = $('<button>').text(topics[index]);
        $('#additem').append(buttonArray); //<button>cotton candy</button> - this is what the button looks like for each item in the array.
        } // end of for loop

        select();

    // ====== leave code above alone this is for the array of buttons printed to screen ======

            function select() {
                 $("#additem").on("click", function() { // Event listener for our existing buttons 
            
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + topics[index]; 
            // Storing our giphy API URL for a random 1st image (bunny) for example

        $.ajax ({ // Perfoming an AJAX GET request to our queryURL
            url: queryURL,
            method: "GET"
        }).then(function(response) { 
            console.log(response);

            var imageUrl = response.data.image_original_url; // Saving the image_original_url property            
            var button1 = $("<img>");  // Creating and storing an image element
            button1.attr("src", imageUrl); // Setting the button_1 src attribute to imageUrl
            button1.attr("alt", "first image");
        
            $("#images1").empty();
            $("#images1").prepend(button1); // Prepending the button_1 to the images div
            });
        });
            } // end of function select

            function still_animate() {
                 // The attr jQuery method allows us to get or set the value of any attribute on our HTML element.
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate,
                    // Else set src to the data-still value.
                            $(".gif").on("click", function() {
                                var state = $(this).attr("data-state");
                                if (state === "still") {
                                    $(this).attr("src", $(this).attr("data-animate"));
                                    $(this).attr("data-state", "animate");
                                    } else {
                                        $(this).attr("src", $(this).attr("data-still"));
                                        $(this).attr("data-state", "still");
                                        }
                                    });
                                    
}
// when you click on the submit button #submit-btn this function call will add the new item entered by user into the 
// text box and create a new button that will be added to the page
        $('#submit-btn').on('click', function() {
            var gold = $('#input').val();
            topics.push(gold);
            var button1 = $('<button>').text(gold);
            $('#moreitems').append(button1);
            });

        $('#submit-btn').on("click", function() { // Event listener for our #submit-btn which is the submit button
            var topic = $('#input').val();
            var testreq = "https://api.giphy.com/v1/gifs/random?api_key=fiuWpCZCpb9kxLiYUhbCSQzWELaC8X6y&tag=" + topic;
            $.ajax({url: testreq})
            .then(function(response) {
                console.log(response);

            var imageUrl = response.data.image_original_url; // Saving the image_original_url property
            var button1 = $("<img>"); // Creating and storing an image element
          
            $("button").addClass("newbutton");
            button1.attr("src", imageUrl); // Setting the button1 src attribute to imageUrl
            button1.attr("alt", "first image");

            $("#images1").empty();
            $("#images1").prepend(button1);  // Prepending the button1 to the images1 div
      
            newbutton2()

        });
    });   // end of submit-btn


function newbutton2() {

        $(".newbutton").on("click", function() {
           var sameUserInput = $('.newbutton').val();
           var dorepeat = "https://api.giphy.com/v1/gifs/random?api_key=fiuWpCZCpb9kxLiYUhbCSQzWELaC8X6y&tag=" + sameUserInput;
            $.ajax({url: dorepeat})
            .then(function(response) {
                console.log(response);

            var imageUrl = response.data.image_original_url; // Saving the image_original_url property
            var newbuttonphoto = $("<img>"); // Creating and storing an image element
           
            newbuttonphoto.attr("src", imageUrl); // Setting the button1 src attribute to imageUrl
            newbuttonphoto.attr("alt", "next image");

                // $("#images2").empty();
                 $("#images1").prepend(newbuttonphoto);

            });
        });  // end of .newbutton
        
    } // end of newbutton2()


