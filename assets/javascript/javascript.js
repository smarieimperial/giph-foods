

var topics = ["cotton candy", "friends", "bears", "balloons", "stuffed animals"]; // array of items from carnival 
        // that we will create buttons for and add to html page
   
    var buttonArray; // this creates the buttons from the 'topics' array above.
    for (var index in topics) {
        buttonArray = $('<button>').text(topics[index]);
        $('#additem').append(buttonArray); //<button>cotton candy</button> - this is what the button looks like for each item in the array.
        } // end of for loop

        select();

    //     $("#additem").on("click", function() { // Event listener for our existing buttons 
            
    //     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + topics[index]; 
    //         // Storing our giphy API URL for a random 1st image (bunny) for example
    //     $.ajax ({ // Perfoming an AJAX GET request to our queryURL
    //         url: queryURL,
    //         method: "GET"
    //     })
    //     .then(function(response) {  // After the data from the AJAX request comes back
    //         console.log(response);
    //         $('#additem').text(JSON.stringify(response.rating));
    //                 console.log(response.rating);


    //         var rate_rating = $("<h3>"); //  5. Under every gif, display its rating (PG, G, so on).
    //         rate_rating.text("Rating: " + response.rating);
            
    //         var imageUrl = response.data.image_original_url; // Saving the image_original_url property            
    //         var button1 = $("<img>");  // Creating and storing an image element
    //         button1.attr("src", imageUrl); // Setting the button_1 src attribute to imageUrl
    //         button1.attr("alt", "first image");
        
    //         $("#images1").empty();
    //         $("#images1").prepend(button1).prepend(rate_rating); // Prepending the button_1 to the images div
    //         });
    //     });   
    // ====== leave code above alone this is for the array of buttons printed to screen ======
            function select() {
                 $("#additem").on("click", function() { // Event listener for our existing buttons 
            
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + topics[index]; 
            // Storing our giphy API URL for a random 1st image (bunny) for example
        $.ajax ({ // Perfoming an AJAX GET request to our queryURL
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {  // After the data from the AJAX request comes back
            console.log(response);
            $('#additem').text(JSON.stringify(response.data.rating));
                    console.log(response.rating);


            var rate_rating = $("<h3>"); //  5. Under every gif, display its rating (PG, G, so on).
            rate_rating.text("Rating: " + response.data.rating);
            
            var imageUrl = response.data.image_original_url; // Saving the image_original_url property            
            var button1 = $("<img>");  // Creating and storing an image element
            button1.attr("src", imageUrl); // Setting the button_1 src attribute to imageUrl
            button1.attr("alt", "first image");
        
            $("#images1").empty();
            $("#images1").prepend(button1).prepend(rate_rating); // Prepending the button_1 to the images div
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

            $('#moreitems').text(JSON.stringify(response.data.rating));
                console.log(response.data.rating);
            var rate_rating = $("<h3>"); //  5. Under every gif, display its rating (PG, G, so on).
            rate_rating.text("Rating: " + response.data.rating);

            var imageUrl = response.data.image_original_url; // Saving the image_original_url property
            var button1 = $("<img>"); // Creating and storing an image element
            //button1.addClass("newbutton");
            $("button").addClass("newbutton");
            button1.attr("src", imageUrl); // Setting the button1 src attribute to imageUrl
            button1.attr("alt", "first image");

            $("#images1").empty();
            $("#images1").prepend(button1).prepend(rate_rating);  // Prepending the button1 to the images1 div
      
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

            $('#moreitems').text(JSON.stringify(response.data.rating));
                console.log(response.data.rating);
                var rate_rating = $("<h3>"); //  5. Under every gif, display its rating (PG, G, so on).
                rate_rating.text("Rating: " + response.data.rating);

            var imageUrl = response.data.image_original_url; // Saving the image_original_url property
            var newbuttonphoto = $("<img>"); // Creating and storing an image element
            //button2.addClass("newbutton");
           newbuttonphoto.attr("src", imageUrl); // Setting the button1 src attribute to imageUrl
            newbuttonphoto.attr("alt", "next image");

                // $("#images2").empty();
                 $("#images1").prepend(newbuttonphoto).prepend(rate_rating);;

            });
        });  // end of .newbutton
        
    } // end of newbutton2()


// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.