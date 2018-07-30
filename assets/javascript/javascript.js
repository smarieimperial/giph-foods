    // array of items from carnival that we will create buttons for and add to html page
    var topics = ["cotton candy", "psychic", "circus", "clowns", "games", "balloons", "stuffed animals"];
   
        // this creates the buttons from the topics array
            var button2;
                    for (var index in topics){

                    button2 = $('<button>').text(topics[index]);
                    //<button>cotton candy</button>
                    $('#additem').append(button2);
                    }


                // Event listener for our existing buttons 
                    $("#additem").on("click", function() {

                // Storing our giphy API URL for a random 1st image (bunny)
                    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cotton+candy";
                // Perfoming an AJAX GET request to our queryURL
                        $.ajax({
                            url: queryURL,
                            method: "GET"
                        })
                    // After the data from the AJAX request comes back
                        .then(function(response) {
                            console.log(response);
                            console.log(response.Rating);
                //  5. Under every gif, display its rating (PG, G, so on).
                        var p_rating = $("<p>");
                        var r_rating = $("<h3>");
                        r_rating.text("Rating: " + response.Rating);
                        p_rating.append(r_rating);
                        $('#images1').prepend(r_rating);
    
                    // Saving the image_original_url property
                        var imageUrl = response.data.image_original_url;
    
                    // Creating and storing an image element
                        var button1 = $("<img>");
    
                    // Setting the button_1 src attribute to imageUrl
                        button1.attr("src", imageUrl);
                        button1.attr("alt", "first image");
        
                    // Prepending the button_1 to the images div
                        $("#images1").prepend(button1);
                    });
                });
                // ====== leave code above alone ======

// 3. When the user clicks on a button, the page should grab 10 static, 
//  non-animated gif images from the GIPHY API and place them on the page.
// 4. When the user clicks one of the still GIPHY images, the gif should animate. 
//  If the user clicks the gif again, it should stop playing.
//  6. Add a form to your page that takes the value from a user input box and adds it into
//   your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

            // when you click on the submit button #carnivalbtn this function call will add the new item entered by
            // user into the text box and create a new button that will be added to the page
            $('#carnivalbtn').on('click', function() {
                var topic = $('#input').val();
                topics.push(topic);
                var button2 = $('<button>').text(topic);
                $('#moreitems').append(button2);
                });

            // Event listener for our #carnivalbtn which is the submit button
            $("#carnivalbtn").on("click", function() {
                // event.preventDefault();
                var topic = $('#input').val();
                var testreq = "https://api.giphy.com/v1/gifs/random?api_key=fiuWpCZCpb9kxLiYUhbCSQzWELaC8X6y&tag=" + topic;
                $.ajax({url: testreq})
      	        .then(function(response) {
                    $('#moreitems').text(JSON.stringify(response.rating));
                      console.log(response.rating);
            //  5. Under every gif, display its rating (PG, G, so on).

            var p_rating = $("<p>");
            var r_rating = $("<h3>");
            r_rating.text("Rating: " + response.Rating);
            p_rating.append(r_rating);
            $('#images1').prepend(r_rating);

            // Saving the image_original_url property
                var imageUrl = response.data.image_original_url;
            
            // Creating and storing an image element
                var button1 = $("<img>");

            // Setting the button1 src attribute to imageUrl
                button1.attr("src", imageUrl);
                button1.attr("alt", "first image");

            // Prepending the button1 to the images1 div
                $("#images1").prepend(button1);

            });
        });

        // // Storing our giphy API URL for a random 1st image (puppy)
        //     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=puppy";
        
        // // Perfoming an AJAX GET request to our queryURL
        //     $.ajax({
        //             url: queryURL,
        //             method: "GET"
        //         })
        // // After the data from the AJAX request comes back
        //         .then(function(response) {
        //         console.log(response);
        //         console.log(response.rating);
        //  5. Under every gif, display its rating (PG, G, so on this data is provided by the GIPHY API.)
            // var p_rating = $("<p>");
            // var r_rating = $("<h3>");
            // r_rating.text("Rating: " + response.Rating);
            // p_rating.append(r_rating);
            // $('#images1').prepend(r_rating);

        // Saving the image_original_url property
            // var imageUrl = response.data.image_original_url;
        
        // Creating and storing an image element
            // var button1 = $("<img>");

        // Setting the button1 src attribute to imageUrl
            // button1.attr("src", imageUrl);
            // button1.attr("alt", "first image");

        // Prepending the button1 to the images1 div
        //         $("#images1").prepend(button1);
        //     });
        // });


        // === test code below didn't work =====

 // when you click on the submit button #carnivalbtn this function call will add the new item entered by
        // user into the text box and create a new button that will be added to the page
        // $('#carnivalbtn').on('click', function() {

        //     var topic = $('#input').val();
        //     topics.push(topic);

        //     var button2 = $('<button>').text(topic);
        //     $('#moreitems').append(button2);
        //     });

    // Event listener for our #carnivalbtn which is the submit button
        // $("#carnivalbtn").on("click", function() {
    
        //     var test = $('#input').val();
        //     var testreq = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + test;
        //     $.ajax({url: testreq,
        //             method: "GET"})
        //       .then(function(response) {
        //           $('#moreitems').text(JSON.stringify(response.rating));
        //           console.log(response.rating);

                  //  5. Under every gif, display its rating (PG, G, so on).
//  * This data is provided by the GIPHY API.
        // var p_rating = $("<p>");
        // var r_rating = $("<h3>");
        // r_rating.text("Rating: " + response.Rating);
        // p_rating.append(r_rating);
        // $('#images1').prepend(r_rating);

    // Saving the image_original_url property
    //     var imageUrl = response.data.image_original_url;
    
    // // Creating and storing an image element
    //     var button1 = $("<img>");

    // Setting the button1 src attribute to imageUrl
//         button1.attr("src", imageUrl);
//         button1.attr("alt", "first image");

//     // Prepending the button1 to the images1 div
//         $("#images1").prepend(button1);

//       });
//   });