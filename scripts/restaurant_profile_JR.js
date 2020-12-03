function getRestaurantProfile() {
    console.log("rest-profile")
    //Parse the URL to get the restaurant doc ID by searching for the "?" and splitting it
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("?");
    var restID = queries[1]; //grab the restaurant doc's ID after "?" and make it a variable
    console.log(restID);

    //Use the 'restID' to get the specific restaurant doc
    db.collection("Restaurants")
        //once we have the restaurant's document, we need to 'get' it and then read it using 'then'
        .doc(restID)
        .get()
        .then(function (doc) {
            console.log(doc.data());
            var name = doc.data().Name;
            var address = doc.data().Address;
            var hours = doc.data().Business_hours;
            var count = doc.data().Count;
            var masks = doc.data().Masks_required;
            var id = doc.id; //The restaurant's doc ID
            var image = doc.data().Image;

            //d1 is the div container with class = "card"
            var d1 = $('#card-container').append('<div class="card" id="inside-card" style="width: 25rem;">');
            var imgdiv = $('.card').append('<div id="img-container">');
            var i = $('#img-container').append('<img class="card-img-top" src="/images/' + image + '" alt="Card image cap">');
            var d2 = d1.append('<div class="card-body">');
            $('.card').attr('id', "restPic");
            d2.append('<h5 id="restName" class="card-title">' + name + '</h5>'); //add heart class from font-awesome
            d2.append('<i class="far fa-heart fav"></i>')
            $('.fa-heart').attr('id', id);
            d2.append('<p id="restAddress" class="card-text"> <span> Address:</span>' + address + '</p>');
            d2.append('<p class="card-text"> <span> Hours of Operation: </span>' + hours + '</p>');
            d2.append('<p class="card-text"> <span> People currently inside the restaurant: </span>' + count + '</p>');
            d2.append('<p class="card-text"> <span> Masks required: </span>' + masks + '</p>');
            d2.append($(".reviewBtn"));
            d2.append('<a class="btn btn-warning mt-2" href="review.html" role="button">Click to read some reviews!</a>')
            $(".modal-title").append(name);

            // When the heart is clicked
            $("#" + id).click(function () { //add listener

                //Toggle between the full-heart ("fa-heart"), and the empty-heart (fa-heart-o)
                $(this).toggleClass('far fas');

                //If the "fa-heart" class is here, then add to faves, else remove from faves
                if ($(this).hasClass('fas')) {
                    console.log("ON");
                    //save to database
                    firebase.auth().onAuthStateChanged(function (user) {
                        db.collection("user").doc(user.uid).update({
                            faves: firebase.firestore.FieldValue.arrayUnion(name)
                        })
                    })
                } else {
                    console.log("OFF");
                    //Remove from database
                    firebase.auth().onAuthStateChanged(function (user) {
                        db.collection("user").doc(user.uid).update({
                            faves: firebase.firestore.FieldValue.arrayRemove(name)
                        })
                    })
                }
            })

        })
}




getRestaurantProfile();